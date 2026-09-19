import { useEffect, useMemo, useRef, useState } from "react";
import { ArtById } from "@/components/art";
import { LiraArt } from "@/components/mascots";
import { Confetti } from "@/components/confetti";
import { Scene, TopBar, WinBanner } from "@/components/shell";
import { KidButton } from "@/components/ui/kid-button";
import { t, randomPraise } from "@/lib/i18n";
import { todaysMemoryBoards, themeLabel } from "@/lib/daily";
import { useApp } from "@/lib/store";
import { sfx, speak, unlockAudio } from "@/lib/audio";
import { shuffle, cn } from "@/lib/utils";
import type { MemoryItem } from "@/lib/game-data";

type Card = { uid: string; id: string; flipped: boolean; matched: boolean; sound?: string };

function makeRound(items: MemoryItem[]): Card[] {
  return shuffle(
    items.flatMap((it) => [
      { uid: `${it.id}-a`, id: it.id, flipped: false, matched: false, sound: it.sound },
      { uid: `${it.id}-b`, id: it.id, flipped: false, matched: false, sound: it.sound },
    ]),
  );
}

export function MemoryScreen() {
  const lang = useApp((s) => s.lang);
  const muted = useApp((s) => s.muted);
  const setScreen = useApp((s) => s.setScreen);
  const addProgress = useApp((s) => s.addProgress);
  const logSession = useApp((s) => s.logSession);
  const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
  const boards = useMemo(() => todaysMemoryBoards(), []);
  const [round, setRound] = useState(0);
  const board = boards[round] ?? boards[0];
  const [cards, setCards] = useState<Card[]>(() => makeRound(board.items));
  const [picked, setPicked] = useState<string[]>([]);
  const [lock, setLock] = useState(false);
  const [won, setWon] = useState(false);
  const [burst, setBurst] = useState(0);
  const started = useRef(Date.now());
  const busy = useRef(false);

  const deal = (r: number) => {
    const b = boards[r] ?? boards[0];
    setCards(makeRound(b.items));
    setPicked([]);
    setLock(false);
    setWon(false);
    busy.current = false;
  };

  useEffect(() => {
    speak(`${t(lang, "findPairs")}. ${themeLabel(board.theme, lang)}`, lang, muted);
    started.current = Date.now();
    return () => logSession("memory", Math.round((Date.now() - started.current) / 1000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const label = useMemo(() => {
    const map: Record<string, string> = {};
    for (const b of boards) {
      for (const it of b.items) map[it.id] = lang === "pt" ? it.pt : it.es;
    }
    return map;
  }, [lang, boards]);

  const onCard = (uid: string) => {
    if (lock || won || busy.current) return;
    const card = cards.find((c) => c.uid === uid);
    if (!card || card.flipped || card.matched) return;
    unlockAudio();
    sfx.flip();
    if (card.sound) sfx.animal(card.id);
    const nextPicked = [...picked, uid];
    setCards((cs) => cs.map((c) => (c.uid === uid ? { ...c, flipped: true } : c)));
    setPicked(nextPicked);
    if (nextPicked.length < 2) return;

    const aCard = cards.find((c) => c.uid === nextPicked[0]) ?? card;
    const bCard = cards.find((c) => c.uid === nextPicked[1]) ?? card;
    busy.current = true;
    setLock(true);
    const match = aCard.id === bCard.id;
    window.setTimeout(() => {
      if (match) {
        sfx.match();
        if (aCard.sound) sfx.animal(aCard.id);
        setBurst((n) => n + 1);
        if (profile) speak(t(lang, "match"), lang, muted);
        setCards((cs) => {
          const next = cs.map((c) => (c.id === aCard.id ? { ...c, matched: true, flipped: true } : c));
          if (next.every((c) => c.matched)) {
            sfx.win();
            setWon(true);
            addProgress("memory", 10);
            if (profile) speak(randomPraise(lang, profile.name, profile.gender), lang, muted);
          }
          return next;
        });
      } else {
        sfx.wrong();
        setCards((cs) => cs.map((c) => (c.uid === aCard.uid || c.uid === bCard.uid ? { ...c, flipped: false } : c)));
      }
      setPicked([]);
      setLock(false);
      busy.current = false;
    }, match ? 420 : 780);
  };

  const goNext = () => {
    if (round >= 9) {
      setScreen("home");
      return;
    }
    const next = round + 1;
    setRound(next);
    deal(next);
    speak(themeLabel(boards[next].theme, lang), lang, muted);
  };

  return (
    <Scene>
      <Confetti burstKey={burst} />
      <TopBar title={t(lang, "memory")} onBack={() => setScreen("home")} />
      <div className="mx-auto max-w-lg px-4 pb-16">
        <p className="text-center font-display text-lg text-muted">{t(lang, "roundOf", { n: round + 1 })}</p>
        <p className="mb-1 text-center font-display text-xl font-semibold">{themeLabel(board.theme, lang)}</p>
        <p className="mb-3 text-center text-sm text-muted">{t(lang, "newToday")}</p>
        {won ? (
          <div className="text-center">
            <LiraArt className="mx-auto size-24 anim-float" />
            <WinBanner
              title={t(lang, "wellDone")}
              againLabel={round >= 9 ? t(lang, "playAgain") : t(lang, "nextScreen")}
              homeLabel={t(lang, "back")}
              onAgain={() => {
                if (round >= 9) {
                  setRound(0);
                  deal(0);
                } else goNext();
              }}
              onHome={() => setScreen("home")}
            />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-3">
            {cards.map((c) => (
              <button
                key={c.uid}
                type="button"
                aria-label={c.flipped || c.matched ? label[c.id] : t(lang, "memory")}
                onClick={() => onCard(c.uid)}
                className="[perspective:800px]"
              >
                <div className={cn("flip-inner relative aspect-square w-full", (c.flipped || c.matched) && "is-flipped")}>
                  <div className="flip-face absolute inset-0 grid place-items-center rounded-[20px] bg-primary shadow-[0_5px_0_color-mix(in_oklab,var(--color-ink)_18%,transparent)]">
                    <span className="font-display text-3xl font-semibold text-foam">?</span>
                  </div>
                  <div className="flip-face flip-back absolute inset-0 grid place-items-center rounded-[20px] bg-foam p-2 shadow-[0_5px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)]">
                    <ArtById id={c.id} className="size-[85%]" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
        {!won && round < 9 ? (
          <KidButton tone="cream" className="mt-5 w-full" onClick={goNext}>
            {t(lang, "nextScreen")}
          </KidButton>
        ) : null}
      </div>
    </Scene>
  );
}
