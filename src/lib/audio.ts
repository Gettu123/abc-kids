import { SPEECH_LANG } from "./i18n";
import type { Lang } from "./types";

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let unlocked = false;

function ensureCtx() {
  if (typeof window === "undefined") return null;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!ctx) {
    ctx = new AC({ latencyHint: "interactive" });
    master = ctx.createGain();
    master.gain.value = 0.35;
    master.connect(ctx.destination);
  }
  return ctx;
}

export function unlockAudio() {
  const c = ensureCtx();
  if (!c) return;
  if (c.state === "suspended") void c.resume();
  unlocked = true;
}

export function setMuted(muted: boolean) {
  if (!master) ensureCtx();
  if (master) master.gain.setTargetAtTime(muted ? 0 : 0.35, ctx?.currentTime ?? 0, 0.02);
}

function beep(freq: number, dur: number, type: OscillatorType = "sine", gain = 0.2, when = 0) {
  const c = ensureCtx();
  if (!c || !master) return;
  const t0 = c.currentTime + when;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g);
  g.connect(master);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

function playAnimal(kind?: string) {
  const k = (kind ?? "").toLowerCase();
  if (k.includes("calopsita") || k.includes("chirp") || k.includes("cotorra") || k.includes("tucan") || k.includes("arara")) {
    beep(1800, 0.07, "sine", 0.16);
    beep(2400, 0.06, "sine", 0.14, 0.08);
    beep(2000, 0.09, "triangle", 0.12, 0.16);
    return;
  }
  if (k.includes("vaca") || k.includes("ternero") || k.includes("moo")) {
    beep(150, 0.35, "sawtooth", 0.12);
    beep(110, 0.45, "sine", 0.14, 0.12);
    return;
  }
  if (k.includes("gato") || k.includes("meow")) {
    beep(820, 0.12, "sine", 0.14);
    beep(520, 0.22, "sine", 0.12, 0.1);
    return;
  }
  if (k.includes("perro") || k.includes("bark")) {
    beep(240, 0.1, "square", 0.12);
    beep(180, 0.12, "square", 0.1, 0.12);
    return;
  }
  if (k.includes("pato") || k.includes("quack")) {
    beep(360, 0.12, "sawtooth", 0.1);
    beep(300, 0.14, "sawtooth", 0.1, 0.1);
    return;
  }
  if (k.includes("sapo") || k.includes("ribbit")) {
    beep(280, 0.08, "square", 0.1);
    beep(220, 0.12, "sine", 0.12, 0.08);
    return;
  }
  if (k.includes("leao") || k.includes("oso") || k.includes("roar") || k.includes("growl")) {
    beep(90, 0.4, "sawtooth", 0.1);
    beep(70, 0.35, "sine", 0.12, 0.1);
    return;
  }
  if (k.includes("ovelha") || k.includes("baa")) {
    beep(420, 0.12, "triangle", 0.12);
    beep(340, 0.18, "triangle", 0.1, 0.1);
    return;
  }
  if (k.includes("mono") || k.includes("hoot")) {
    beep(640, 0.1, "sine", 0.12);
    beep(720, 0.1, "sine", 0.1, 0.12);
    return;
  }
  beep(900, 0.1, "sine", 0.12);
  beep(1200, 0.08, "sine", 0.1, 0.1);
}

export const sfx = {
  tap() {
    if (!unlocked) return;
    beep(720 + Math.random() * 40, 0.08, "triangle", 0.12);
  },
  flip() {
    if (!unlocked) return;
    beep(420, 0.1, "square", 0.08);
    beep(640, 0.12, "sine", 0.1, 0.04);
  },
  match() {
    if (!unlocked) return;
    beep(523, 0.12, "sine", 0.16);
    beep(659, 0.14, "sine", 0.16, 0.08);
    beep(784, 0.2, "sine", 0.16, 0.16);
  },
  wrong() {
    if (!unlocked) return;
    beep(220, 0.16, "triangle", 0.12);
    beep(180, 0.2, "sine", 0.1, 0.08);
  },
  win() {
    if (!unlocked) return;
    [523, 659, 784, 1046].forEach((f, i) => beep(f, 0.18, "sine", 0.18, i * 0.1));
  },
  pop() {
    if (!unlocked) return;
    beep(880 + Math.random() * 80, 0.07, "sine", 0.1);
  },
  animal(kind?: string) {
    if (!unlocked) return;
    playAnimal(kind);
  },
};

let speaking = false;

export function speak(text: string, lang: Lang, muted: boolean) {
  if (muted || typeof window === "undefined" || !window.speechSynthesis) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = SPEECH_LANG[lang];
  u.rate = 0.92;
  u.pitch = 1.15;
  const voices = window.speechSynthesis.getVoices();
  const codes = lang === "pt" ? ["pt-BR", "pt-PT", "pt"] : ["es-VE", "es-US", "es-MX", "es-ES", "es"];
  for (const code of codes) {
    const v = voices.find((voice) => voice.lang.toLowerCase().startsWith(code.toLowerCase()));
    if (v) {
      u.voice = v;
      break;
    }
  }
  window.speechSynthesis.cancel();
  speaking = true;
  u.onend = () => {
    speaking = false;
  };
  window.speechSynthesis.speak(u);
}

export function stopSpeak() {
  if (typeof window === "undefined") return;
  window.speechSynthesis?.cancel();
  speaking = false;
}

export function isSpeaking() {
  return speaking;
}

if (typeof window !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      const c = ctx;
      if (c?.state === "suspended") void c.resume();
    }
  });
}
