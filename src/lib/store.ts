import { create } from "zustand";
import type { Gender, Lang, MedalId, ModuleId, Persisted, Profile, Screen } from "./types";
import { EMPTY_PROGRESS, EMPTY_ROUNDS, MODULES } from "./types";
import { loadPersisted, savePersisted } from "./storage";
import { todayKey, uid, clamp } from "./utils";

type AppStore = Persisted & {
  screen: Screen;
  hydrated: boolean;
  timeLocked: boolean;
  parentalOpen: boolean;
  hydrate: () => void;
  persist: () => void;
  setLang: (lang: Lang) => void;
  setMuted: (muted: boolean) => void;
  setScreen: (screen: Screen) => void;
  setScreenLimit: (min: number) => void;
  createProfile: (name: string, gender: Gender, lang: Lang) => Profile;
  selectProfile: (id: string) => void;
  deleteProfile: (id: string) => void;
  active: () => Profile | null;
  addProgress: (module: ModuleId, amount: number) => void;
  completeRound: (module: ModuleId) => void;
  awardMedal: (id: MedalId) => void;
  logSession: (module: ModuleId, durationSec: number) => void;
  tickSecond: () => void;
  unlockTime: () => void;
  setParentalOpen: (open: boolean) => void;
};

function persistSlice(s: AppStore): Persisted {
  return {
    version: s.version,
    lang: s.lang,
    profiles: s.profiles,
    activeId: s.activeId,
    screenLimitMin: s.screenLimitMin,
    dayKey: s.dayKey,
    dayUsedSec: s.dayUsedSec,
    muted: s.muted,
  };
}

export const useApp = create<AppStore>((set, get) => ({
  ...loadPersisted(),
  screen: "welcome",
  hydrated: false,
  timeLocked: false,
  parentalOpen: false,

  hydrate: () => {
    const loaded = loadPersisted();
    const day = loaded.dayKey === todayKey() ? loaded.dayUsedSec : 0;
    const locked = loaded.screenLimitMin > 0 && day >= loaded.screenLimitMin * 60;
    const hasProfiles = loaded.profiles.length > 0;
    set({
      ...loaded,
      dayKey: todayKey(),
      dayUsedSec: day,
      hydrated: true,
      timeLocked: locked,
      screen: hasProfiles ? "profiles" : "welcome",
    });
  },

  persist: () => savePersisted(persistSlice(get())),

  setLang: (lang) => {
    const activeId = get().activeId;
    set((s) => ({
      lang,
      profiles: s.profiles.map((p) => (p.id === activeId ? { ...p, lang } : p)),
    }));
    get().persist();
  },

  setMuted: (muted) => {
    set({ muted });
    get().persist();
  },

  setScreen: (screen) => set({ screen, parentalOpen: screen === "parental" ? true : get().parentalOpen }),

  setScreenLimit: (min) => {
    set({ screenLimitMin: min, timeLocked: min > 0 && get().dayUsedSec >= min * 60 });
    get().persist();
  },

  createProfile: (name, gender, lang) => {
    const profile: Profile = {
      id: uid(),
      name: name.trim(),
      gender,
      lang,
      createdAt: Date.now(),
      playTimeSec: 0,
      progress: { ...EMPTY_PROGRESS },
      medals: [],
      sessions: [],
      rounds: { ...EMPTY_ROUNDS },
    };
    set((s) => ({
      profiles: [...s.profiles, profile],
      activeId: profile.id,
      lang,
      screen: "home",
    }));
    get().persist();
    return profile;
  },

  selectProfile: (id) => {
    const p = get().profiles.find((x) => x.id === id);
    if (!p) return;
    set({ activeId: id, lang: p.lang, screen: "home" });
    get().persist();
  },

  deleteProfile: (id) => {
    set((s) => {
      const profiles = s.profiles.filter((p) => p.id !== id);
      const activeId = s.activeId === id ? (profiles[0]?.id ?? null) : s.activeId;
      return {
        profiles,
        activeId,
        screen: profiles.length ? "profiles" : "welcome",
      };
    });
    get().persist();
  },

  active: () => {
    const { profiles, activeId } = get();
    return profiles.find((p) => p.id === activeId) ?? null;
  },

  addProgress: (module, amount) => {
    const id = get().activeId;
    if (!id) return;
    set((s) => ({
      profiles: s.profiles.map((p) => {
        if (p.id !== id) return p;
        const progress = { ...p.progress, [module]: clamp(p.progress[module] + amount, 0, 100) };
        const medals = [...p.medals];
        if (!medals.includes("first-play")) medals.push("first-play");
        if (progress[module] >= 100) {
          const map: Partial<Record<ModuleId, MedalId>> = {
            memory: "memory-star",
            counting: "counter",
            letters: "name-spelled",
            shapes: "shaper",
            animals: "animal-friend",
          };
          const m = map[module];
          if (m && !medals.includes(m)) medals.push(m);
        }
        const filled = MODULES.filter((m) => progress[m] >= 50).length;
        if (filled >= 3 && !medals.includes("explorer")) medals.push("explorer");
        if (MODULES.every((m) => progress[m] >= 100) && !medals.includes("all-rounder")) medals.push("all-rounder");
        return { ...p, progress, medals };
      }),
    }));
    get().persist();
  },

  completeRound: (module) => {
    const id = get().activeId;
    if (!id) return;
    set((s) => ({
      profiles: s.profiles.map((p) =>
        p.id === id ? { ...p, rounds: { ...p.rounds, [module]: (p.rounds[module] ?? 0) + 1 } } : p,
      ),
    }));
    get().addProgress(module, 20);
  },

  awardMedal: (medal) => {
    const id = get().activeId;
    if (!id) return;
    set((s) => ({
      profiles: s.profiles.map((p) =>
        p.id === id && !p.medals.includes(medal) ? { ...p, medals: [...p.medals, medal] } : p,
      ),
    }));
    get().persist();
  },

  logSession: (module, durationSec) => {
    const id = get().activeId;
    if (!id || durationSec < 2) return;
    set((s) => ({
      profiles: s.profiles.map((p) =>
        p.id === id
          ? {
              ...p,
              playTimeSec: p.playTimeSec + durationSec,
              sessions: [{ at: Date.now(), durationSec, module }, ...p.sessions].slice(0, 20),
            }
          : p,
      ),
    }));
    get().persist();
  },

  tickSecond: () => {
    const s = get();
    if (s.timeLocked) return;
    if (!["home", "memory", "counting", "letters", "shapes", "animals"].includes(s.screen)) return;
    const next = s.dayUsedSec + 1;
    const locked = s.screenLimitMin > 0 && next >= s.screenLimitMin * 60;
    const id = s.activeId;
    set({
      dayUsedSec: next,
      timeLocked: locked,
      profiles: s.profiles.map((p) => (p.id === id ? { ...p, playTimeSec: p.playTimeSec + 1 } : p)),
    });
    if (next % 15 === 0) get().persist();
  },

  unlockTime: () => {
    set({ timeLocked: false, dayUsedSec: 0, dayKey: todayKey() });
    get().persist();
  },

  setParentalOpen: (open) => set({ parentalOpen: open, screen: open ? "parental" : get().activeId ? "home" : "welcome" }),
}));
