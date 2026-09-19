import { EMPTY_PROGRESS, EMPTY_ROUNDS, type Persisted } from "./types";
import { todayKey } from "./utils";

export const SAVE_KEY = "abejita-save-v1";
export const SAVE_VERSION = 1;

export const defaultPersisted = (): Persisted => ({
  version: SAVE_VERSION,
  lang: "es-VE",
  profiles: [],
  activeId: null,
  screenLimitMin: 20,
  dayKey: todayKey(),
  dayUsedSec: 0,
  muted: false,
});

function migrate(raw: unknown): Persisted {
  const base = defaultPersisted();
  if (!raw || typeof raw !== "object") return base;
  const s = raw as Partial<Persisted>;
  const day = s.dayKey === todayKey() ? (s.dayUsedSec ?? 0) : 0;
  return {
    ...base,
    ...s,
    version: SAVE_VERSION,
    lang: s.lang === "pt" ? "pt" : "es-VE",
    profiles: Array.isArray(s.profiles)
      ? s.profiles.map((p) => ({
          ...p,
          progress: { ...EMPTY_PROGRESS, ...p.progress },
          rounds: { ...EMPTY_ROUNDS, ...p.rounds },
          medals: p.medals ?? [],
          sessions: p.sessions ?? [],
          playTimeSec: p.playTimeSec ?? 0,
        }))
      : [],
    screenLimitMin: typeof s.screenLimitMin === "number" ? s.screenLimitMin : 20,
    dayKey: todayKey(),
    dayUsedSec: day,
    muted: Boolean(s.muted),
  };
}

export function loadPersisted(): Persisted {
  if (typeof window === "undefined") return defaultPersisted();
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return defaultPersisted();
    return migrate(JSON.parse(raw));
  } catch {
    return defaultPersisted();
  }
}

export function savePersisted(state: Persisted) {
  if (typeof window === "undefined") return;
  try {
    const prev = localStorage.getItem(SAVE_KEY);
    if (prev) localStorage.setItem(`${SAVE_KEY}-bak`, prev);
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch {
    /* private mode / quota */
  }
}
