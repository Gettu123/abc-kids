import { useEffect, useRef, useState } from "react";
import { ShapeArt } from "@/components/art";
import { Confetti } from "@/components/confetti";
import { Scene, SpeechBubble, TopBar, WinBanner } from "@/components/shell";
import { t, randomPraise, type I18nKey } from "@/lib/i18n";
import { SHAPES, type ShapeId } from "@/lib/game-data";
import { useApp } from "@/lib/store";
import { sfx, speak, unlockAudio } from "@/lib/audio";
import { shuffle } from "@/lib/utils";

const LABEL: Record<ShapeId, I18nKey> = {
  circle: "circle",
  square: "square",
  triangle: "triangle",
  rectangle: "rectangle",
  star: "star",
};

export function ShapesScreen() {
  const lang = useApp((s) => s.lang);
  const muted = useApp((s) => s.muted);
  const setScreen = useApp((s) => s.setScreen);
  const completeRound = useApp((s) => s.completeRound);
  const logSession = useApp((s) => s.logSession);
  const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
  const [target, setTarget] = useState<ShapeId>("circle");
  const [opts, setOpts] = useState<ShapeId[]>(SHAPES.slice(0, 3));
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [burst, setBurst] = useState(0);
  const started = useRef(Date.now());

  const deal = () => {
    const next = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    const others = shuffle(SHAPES.filter((s) => s !== next)).slice(0, 2);
    setTarget(next);
    setOpts(shuffle([next, ...others]));
    speak(t(lang, "tapTheShape", { shape: t(lang, LABEL[next]) }), lang, muted);
  };

  useEffect(() => {
    deal();
    started.current = Date.now();
    return () => logSession("shapes", Math.round((Date.now() - started.current) / 1000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pick = (id: ShapeId) => {
    if (done) return;
    unlockAudio();
    if (id === target) {
      sfx.match();
      setBurst((b) => b + 1);
      const next = score + 1;
      setScore(next);
      completeRound("shapes");
      if (profile) speak(randomPraise(lang, profile.name, profile.gender), lang, muted);
      if (next >= 5) {
        setDone(true);
        sfx.win();
      } else {
        window.setTimeout(deal, 700);
      }
    } else {
      sfx.wrong();
      speak(t(lang, "almost"), lang, muted);
    }
  };

  return (
    <Scene>
      <Confetti burstKey={burst} />
      <TopBar title={t(lang, "shapes")} onBack={() => setScreen("home")} />
      <div className="mx-auto max-w-lg px-4 pb-12">
        <SpeechBubble text={t(lang, "tapTheShape", { shape: t(lang, LABEL[target]) })} />
        {done ? (
          <WinBanner
            title={t(lang, "wellDone")}
            againLabel={t(lang, "playAgain")}
            homeLabel={t(lang, "back")}
            onAgain={() => {
              setScore(0);
              setDone(false);
              deal();
            }}
            onHome={() => setScreen("home")}
          />
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {opts.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => pick(id)}
                className="kid-card grid min-h-36 place-items-center p-4 transition-transform active:scale-[0.96]"
                aria-label={t(lang, LABEL[id])}
              >
                <ShapeArt id={id} className="size-28" />
              </button>
            ))}
          </div>
        )}
      </div>
    </Scene>
  );
}
