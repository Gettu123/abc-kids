import { useEffect, useRef, useState } from "react";
import { ArtById } from "@/components/art";
import { LiraArt } from "@/components/mascots";
import { Confetti } from "@/components/confetti";
import { Scene, TopBar, WinBanner } from "@/components/shell";
import { KidButton } from "@/components/ui/kid-button";
import { kidWord, t, randomPraise } from "@/lib/i18n";
import { COUNT_OBJECTS } from "@/lib/game-data";
import { useApp } from "@/lib/store";
import { sfx, speak, unlockAudio } from "@/lib/audio";
import { shuffle, cn } from "@/lib/utils";

type Mode = "objects" | "digit";

function numberWord(n: number, lang: "es-VE" | "pt") {
  const es = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve","veinte","veintiuno","veintidós","veintitrés","veinticuatro","veinticinco"];
  const pt = ["zero","um","dois","três","quatro","cinco","seis","sete","oito","nove","dez","onze","doze","treze","catorze","quinze","dezesseis","dezessete","dezoito","dezenove","vinte","vinte e um","vinte e dois","vinte e três","vinte e quatro","vinte e cinco"];
  return (lang === "pt" ? pt : es)[n] ?? String(n);
}

export function CountingScreen() {
  const lang = useApp((s) => s.lang);
  const muted = useApp((s) => s.muted);
  const setScreen = useApp((s) => s.setScreen);
  const completeRound = useApp((s) => s.completeRound);
  const logSession = useApp((s) => s.logSession);
  const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
  const [n, setN] = useState(3);
  const [kind, setKind] = useState<(typeof COUNT_OBJECTS)[number]>("calopsita-white");
  const [mode, setMode] = useState<Mode>("objects");
  const [choices, setChoices] = useState<number[]>([2, 3, 4]);
  const [marks, setMarks] = useState<(number | null)[]>([]);
  const [teaching, setTeaching] = useState(false);
  const [teachI, setTeachI] = useState(0);
  const [done, setDone] = useState(false);
  const [burst, setBurst] = useState(0);
  const [score, setScore] = useState(0);
  const started = useRef(Date.now());
  const teachTimer = useRef<number | null>(null);

  const deal = (preferred?: number) => {
    const count = preferred ?? 1 + Math.floor(Math.random() * 25);
    const obj = COUNT_OBJECTS[Math.floor(Math.random() * COUNT_OBJECTS.length)];
    const nextMode: Mode = Math.random() > 0.45 ? "objects" : "digit";
    const pool = Array.from({ length: 25 }, (_, i) => i + 1).filter((x) => x !== count);
    const wrong = shuffle([count, ...shuffle(pool).slice(0, 2)]);
    setN(count);
    setKind(obj);
    setMode(nextMode);
    setChoices(wrong);
    setMarks(Array.from({ length: Math.min(count, 25) }, () => null));
    setTeaching(false);
    setTeachI(0);
    speak(nextMode === "digit" ? t(lang, "whatNumber") : t(lang, "howMany"), lang, muted);
  };

  useEffect(() => {
    deal(3);
    started.current = Date.now();
    return () => {
      logSession("counting", Math.round((Date.now() - started.current) / 1000));
      if (teachTimer.current) window.clearTimeout(teachTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tapItem = (i: number) => {
    if (marks[i] != null || done || teaching) return;
    unlockAudio();
    sfx.pop();
    const order = marks.filter((x) => x != null).length + 1;
    setMarks((arr) => {
      const next = [...arr];
      next[i] = order;
      return next;
    });
    speak(numberWord(order, lang), lang, muted);
  };

  const startTeach = () => {
    unlockAudio();
    setTeaching(true);
    setTeachI(0);
    setMarks(Array.from({ length: n }, () => null));
    speak(t(lang, "countTogether"), lang, muted);
    const step = (i: number) => {
      if (i >= n) {
        speak(t(lang, "nowYou"), lang, muted);
        setTeaching(false);
        return;
      }
      setTeachI(i + 1);
      setMarks((arr) => {
        const next = [...arr];
        next[i] = i + 1;
        return next;
      });
      sfx.pop();
      speak(numberWord(i + 1, lang), lang, muted);
      teachTimer.current = window.setTimeout(() => step(i + 1), 900);
    };
    teachTimer.current = window.setTimeout(() => step(0), 700);
  };

  const pick = (value: number) => {
    if (done || teaching) return;
    unlockAudio();
    if (value === n) {
      sfx.match();
      setBurst((b) => b + 1);
      const nextScore = score + 1;
      setScore(nextScore);
      completeRound("counting");
      speak(`${numberWord(n, lang)}. ${n}`, lang, muted);
      if (profile) speak(randomPraise(lang, profile.name, profile.gender), lang, muted);
      if (nextScore >= 5) {
        setDone(true);
        sfx.win();
      } else {
        window.setTimeout(() => deal(), 1000);
      }
    } else {
      sfx.wrong();
      if (profile) speak(t(lang, "tryAgain", { kid: kidWord(lang, profile.gender) }), lang, muted);
      startTeach();
    }
  };

  const cols = n > 16 ? "grid-cols-5" : n > 9 ? "grid-cols-5" : "grid-cols-4";

  return (
    <Scene>
      <Confetti burstKey={burst} />
      <TopBar title={t(lang, "counting")} onBack={() => setScreen("home")} />
      <div className="mx-auto max-w-lg px-4 pb-16">
        <p className="text-center font-display text-xl">
          {teaching ? t(lang, "repeatWithMe") : mode === "digit" ? t(lang, "whatNumber") : t(lang, "howMany")}
        </p>
        {teaching ? <p className="mb-2 text-center font-display text-4xl font-semibold tabular-nums">{teachI}</p> : null}
        {done ? (
          <div className="text-center">
            <LiraArt className="mx-auto size-24 anim-float" />
            <WinBanner
              title={t(lang, "wellDone")}
              againLabel={t(lang, "playAgain")}
              homeLabel={t(lang, "back")}
              onAgain={() => {
                setScore(0);
                setDone(false);
                deal(1);
              }}
              onHome={() => setScreen("home")}
            />
          </div>
        ) : (
          <>
            {mode === "digit" && !teaching ? (
              <button
                type="button"
                onClick={() => {
                  unlockAudio();
                  speak(`${numberWord(n, lang)}. ${n}`, lang, muted);
                }}
                className="mx-auto my-4 grid size-36 place-items-center rounded-[36px] bg-accent font-display text-7xl font-semibold text-ink shadow-[0_8px_0_color-mix(in_oklab,var(--color-ink)_16%,transparent)]"
              >
                {n}
              </button>
            ) : (
              <div className={cn("mt-3 grid gap-2", cols)}>
                {marks.map((mark, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => tapItem(i)}
                    className={cn(
                      "relative aspect-square rounded-[14px] bg-foam p-1 shadow-[0_4px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)]",
                      (mark != null || (teaching && i < teachI)) && "ring-4 ring-leaf",
                    )}
                  >
                    <ArtById id={kind} className="size-full" />
                    {mark != null ? (
                      <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-leaf font-display text-xs font-semibold text-foam">
                        {mark}
                      </span>
                    ) : null}
                  </button>
                ))}
              </div>
            )}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {choices.map((c) => (
                <button
                  key={c}
                  type="button"
                  disabled={teaching}
                  onClick={() => pick(c)}
                  className="min-h-20 rounded-[24px] bg-accent font-display text-4xl font-semibold text-ink shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_16%,transparent)] transition-transform active:scale-[0.96] disabled:opacity-50"
                >
                  {c}
                </button>
              ))}
            </div>
            <KidButton tone="cream" className="mt-4 w-full" disabled={teaching} onClick={startTeach}>
              {t(lang, "dontKnow")}
            </KidButton>
          </>
        )}
      </div>
    </Scene>
  );
}
