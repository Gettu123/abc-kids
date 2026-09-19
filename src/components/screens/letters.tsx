import { useEffect, useMemo, useRef, useState } from "react";
import { BeeArt } from "@/components/art";
import { Confetti } from "@/components/confetti";
import { BigLetter, Scene, SpeechBubble, TopBar, WinBanner } from "@/components/shell";
import { KidButton } from "@/components/ui/kid-button";
import { t } from "@/lib/i18n";
import { ALPHABET } from "@/lib/game-data";
import { useApp } from "@/lib/store";
import { sfx, speak, unlockAudio } from "@/lib/audio";
import { lettersOfName, cn } from "@/lib/utils";

type Step = "learn" | "sort" | "build";

export function LettersScreen() {
  const lang = useApp((s) => s.lang);
  const muted = useApp((s) => s.muted);
  const setScreen = useApp((s) => s.setScreen);
  const completeRound = useApp((s) => s.completeRound);
  const addProgress = useApp((s) => s.addProgress);
  const awardMedal = useApp((s) => s.awardMedal);
  const logSession = useApp((s) => s.logSession);
  const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
  const parsed = useMemo(() => lettersOfName(profile?.name ?? "Ana"), [profile?.name]);
  const [step, setStep] = useState<Step>("learn");
  const [learnIndex, setLearnIndex] = useState(0);
  const [sortPlaced, setSortPlaced] = useState<Record<number, "vowel" | "consonant" | null>>({});
  const [sortSel, setSortSel] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [build, setBuild] = useState<(number | null)[]>(() => parsed.letters.map(() => null));
  const [pool, setPool] = useState<number[]>(() => parsed.letters.map((_, i) => i));
  const [burst, setBurst] = useState(0);
  const [won, setWon] = useState(false);
  const started = useRef(Date.now());

  useEffect(() => {
    speak(t(lang, "lettersOfYourName", { name: parsed.display }), lang, muted);
    started.current = Date.now();
    return () => logSession("letters", Math.round((Date.now() - started.current) / 1000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!profile) return null;

  const letter = parsed.letters[learnIndex] ?? parsed.letters[0] ?? "A";
  const example = ALPHABET[lang][letter] ?? letter;
  const isVowel = parsed.isVowel(letter);

  const speakLetter = (L: string) => {
    const word = ALPHABET[lang][L] ?? L;
    speak(t(lang, "letterWord", { letter: L, word }), lang, muted);
  };

  const placeSort = (bucket: "vowel" | "consonant") => {
    if (sortSel === null) return;
    unlockAudio();
    const L = parsed.letters[sortSel];
    const ok = (parsed.isVowel(L) && bucket === "vowel") || (!parsed.isVowel(L) && bucket === "consonant");
    if (!ok) {
      sfx.wrong();
      setSortSel(null);
      return;
    }
    sfx.pop();
    const next = { ...sortPlaced, [sortSel]: bucket };
    setSortPlaced(next);
    setSortSel(null);
    speakLetter(L);
    if (parsed.letters.every((_, idx) => next[idx])) {
      sfx.match();
      setBurst((b) => b + 1);
    }
  };

  const onSlotTap = (slot: number) => {
    if (selected === null) return;
    unlockAudio();
    if (parsed.letters[selected] !== parsed.letters[slot] || build[slot] !== null) {
      sfx.wrong();
      setSelected(null);
      return;
    }
    sfx.pop();
    const next = [...build];
    next[slot] = selected;
    setBuild(next);
    setPool((p) => p.filter((x) => x !== selected));
    setSelected(null);
    if (next.every((v) => v !== null)) {
      sfx.win();
      setBurst((b) => b + 1);
      setWon(true);
      completeRound("letters");
      addProgress("letters", 80);
      awardMedal("name-spelled");
      speak(t(lang, "wellDone"), lang, muted);
    }
  };

  return (
    <Scene>
      <Confetti burstKey={burst} />
      <TopBar title={t(lang, "letters")} onBack={() => setScreen("home")} />
      <div className="mx-auto max-w-lg px-4 pb-12">
        <BeeArt className="mx-auto size-20 anim-float" variant={profile.gender === "girl" ? "luna" : "sol"} />
        {step === "learn" && (
          <div className="mt-2 text-center">
            <SpeechBubble text={t(lang, "stepLetters")} />
            <button
              type="button"
              onClick={() => {
                unlockAudio();
                speakLetter(letter);
              }}
              className="mx-auto mt-5 grid size-32 place-items-center rounded-[32px] bg-accent font-display text-7xl font-semibold text-ink shadow-[0_8px_0_color-mix(in_oklab,var(--color-ink)_16%,transparent)] anim-pulse"
            >
              {letter}
            </button>
            <p className="mt-4 font-display text-2xl">{t(lang, "letterWord", { letter, word: example })}</p>
            <p className="mt-1 text-muted">{isVowel ? t(lang, "vowelOf", { letter }) : t(lang, "consonantOf", { letter })}</p>
            <KidButton
              className="mt-6 w-full"
              onClick={() => {
                unlockAudio();
                if (learnIndex < parsed.letters.length - 1) setLearnIndex((i) => i + 1);
                else setStep("sort");
              }}
            >
              {t(lang, "next")}
            </KidButton>
          </div>
        )}

        {step === "sort" && (
          <div className="mt-2">
            <SpeechBubble text={t(lang, "stepSort")} />
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {parsed.letters.map((L, i) =>
                sortPlaced[i] ? null : (
                  <BigLetter key={`${L}-${i}`} letter={L} active={sortSel === i} onClick={() => setSortSel(i)} />
                ),
              )}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => placeSort("vowel")}
                className="min-h-36 rounded-[24px] bg-coral/20 p-3"
              >
                <p className="font-display text-lg font-semibold">{t(lang, "vowels")}</p>
                <div className="mt-2 flex flex-wrap justify-center gap-1">
                  {parsed.letters.map((L, i) =>
                    sortPlaced[i] === "vowel" ? (
                      <span key={i} className="grid size-10 place-items-center rounded-[12px] bg-foam font-display text-xl">
                        {L}
                      </span>
                    ) : null,
                  )}
                </div>
              </button>
              <button
                type="button"
                onClick={() => placeSort("consonant")}
                className="min-h-36 rounded-[24px] bg-primary/20 p-3"
              >
                <p className="font-display text-lg font-semibold">{t(lang, "consonants")}</p>
                <div className="mt-2 flex flex-wrap justify-center gap-1">
                  {parsed.letters.map((L, i) =>
                    sortPlaced[i] === "consonant" ? (
                      <span key={i} className="grid size-10 place-items-center rounded-[12px] bg-foam font-display text-xl">
                        {L}
                      </span>
                    ) : null,
                  )}
                </div>
              </button>
            </div>
            {parsed.letters.every((_, i) => sortPlaced[i]) ? (
              <KidButton
                className="mt-5 w-full"
                onClick={() => {
                  unlockAudio();
                  setBuild(parsed.letters.map(() => null));
                  setPool(parsed.letters.map((_, i) => i));
                  setStep("build");
                }}
              >
                {t(lang, "next")}
              </KidButton>
            ) : (
              <p className="mt-3 text-center text-sm text-muted">{t(lang, "tapLetter")}</p>
            )}
          </div>
        )}

        {step === "build" && (
          <div className="mt-2 text-center">
            <SpeechBubble text={t(lang, "buildYourName")} />
            {won ? (
              <WinBanner
                title={`${parsed.display}!`}
                againLabel={t(lang, "playAgain")}
                homeLabel={t(lang, "back")}
                onAgain={() => {
                  setWon(false);
                  setLearnIndex(0);
                  setSortPlaced({});
                  setBuild(parsed.letters.map(() => null));
                  setPool(parsed.letters.map((_, i) => i));
                  setStep("learn");
                }}
                onHome={() => setScreen("home")}
              />
            ) : (
              <>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {parsed.letters.map((L, slot) => (
                    <button
                      key={`slot-${slot}`}
                      type="button"
                      onClick={() => onSlotTap(slot)}
                      className={cn(
                        "grid size-14 place-items-center rounded-[16px] font-display text-2xl font-semibold",
                        build[slot] !== null
                          ? "bg-leaf text-foam"
                          : "border-4 border-dashed border-ink/30 bg-foam/60 text-muted",
                      )}
                    >
                      {build[slot] !== null ? L : "·"}
                    </button>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {pool.map((i) => (
                    <BigLetter
                      key={`pool-${i}`}
                      letter={parsed.letters[i]}
                      active={selected === i}
                      onClick={() => {
                        unlockAudio();
                        sfx.tap();
                        setSelected(i);
                      }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted">{t(lang, "tapLetter")}</p>
              </>
            )}
          </div>
        )}
      </div>
    </Scene>
  );
}
