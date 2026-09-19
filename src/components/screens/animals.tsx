import { useEffect, useRef, useState } from "react";
import { ArtById } from "@/components/art";
import { Confetti } from "@/components/confetti";
import { Scene, SpeechBubble, TopBar, WinBanner } from "@/components/shell";
import { t, randomPraise } from "@/lib/i18n";
import { ANIMALS_BY_LANG, type AnimalDef } from "@/lib/game-data";
import { useApp } from "@/lib/store";
import { sfx, speak, unlockAudio } from "@/lib/audio";
import { shuffle } from "@/lib/utils";

type Round = { animal: AnimalDef; opts: string[] };

function makeRound(deck: AnimalDef[], avoid?: string): Round {
  const pool = avoid ? deck.filter((a) => a.id !== avoid) : deck;
  const animal = (pool.length ? pool : deck)[Math.floor(Math.random() * (pool.length || deck.length))];
  const distractors = shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").filter((l) => l !== animal.letter)).slice(0, 2);
  return { animal, opts: shuffle([animal.letter, ...distractors]) };
}

export function AnimalsScreen() {
  const lang = useApp((s) => s.lang);
  const muted = useApp((s) => s.muted);
  const setScreen = useApp((s) => s.setScreen);
  const completeRound = useApp((s) => s.completeRound);
  const logSession = useApp((s) => s.logSession);
  const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
  const deck = ANIMALS_BY_LANG[lang];
  const [round, setRound] = useState<Round>(() => makeRound(deck));
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [burst, setBurst] = useState(0);
  const started = useRef(Date.now());
  const mutedRef = useRef(muted);
  mutedRef.current = muted;

  const nameOf = (a: AnimalDef) => (lang === "pt" ? a.pt : a.es);

  const deal = (prevId?: string) => {
    const next = makeRound(ANIMALS_BY_LANG[lang], prevId);
    setRound(next);
    speak(t(lang, "whatLetter"), lang, mutedRef.current);
  };

  useEffect(() => {
    deal();
    started.current = Date.now();
    return () => logSession("animals", Math.round((Date.now() - started.current) / 1000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const pick = (letter: string) => {
    if (done) return;
    unlockAudio();
    if (letter === round.animal.letter) {
      sfx.match();
      setBurst((b) => b + 1);
      speak(t(lang, "letterOf", { letter, name: nameOf(round.animal) }), lang, muted);
      const next = score + 1;
      setScore(next);
      completeRound("animals");
      if (next >= 5) {
        setDone(true);
        sfx.win();
        if (profile) speak(randomPraise(lang, profile.name, profile.gender), lang, muted);
      } else {
        window.setTimeout(() => deal(round.animal.id), 900);
      }
    } else {
      sfx.wrong();
      speak(t(lang, "almost"), lang, muted);
    }
  };

  return (
    <Scene>
      <Confetti burstKey={burst} />
      <TopBar title={t(lang, "animals")} onBack={() => setScreen("home")} />
      <div className="mx-auto max-w-lg px-4 pb-12 text-center">
        <SpeechBubble text={t(lang, "whatLetter")} />
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
          <>
            <div className="kid-card mx-auto mt-5 max-w-xs p-4">
              <ArtById id={round.animal.id} className="mx-auto size-36" />
              <p className="mt-2 font-display text-2xl font-semibold">{nameOf(round.animal)}</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {round.opts.map((L) => (
                <button
                  key={L}
                  type="button"
                  onClick={() => pick(L)}
                  className="min-h-20 rounded-[24px] bg-sky font-display text-4xl font-semibold text-ink shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_16%,transparent)] transition-transform active:scale-[0.96]"
                >
                  {L}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </Scene>
  );
}
