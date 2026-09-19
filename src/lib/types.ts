export type Lang = "es-VE" | "pt";
export type Gender = "boy" | "girl";
export type ModuleId = "memory" | "counting" | "letters" | "shapes" | "animals";
export type Screen =
  | "welcome"
  | "profiles"
  | "onboarding"
  | "home"
  | "memory"
  | "counting"
  | "letters"
  | "shapes"
  | "animals"
  | "parental";

export type MedalId =
  | "first-play"
  | "name-spelled"
  | "memory-star"
  | "counter"
  | "shaper"
  | "animal-friend"
  | "explorer"
  | "all-rounder";

export type Session = {
  at: number;
  durationSec: number;
  module: ModuleId;
};

export type Profile = {
  id: string;
  name: string;
  gender: Gender;
  lang: Lang;
  createdAt: number;
  playTimeSec: number;
  progress: Record<ModuleId, number>;
  medals: MedalId[];
  sessions: Session[];
  rounds: Record<ModuleId, number>;
};

export type Persisted = {
  version: number;
  lang: Lang;
  profiles: Profile[];
  activeId: string | null;
  screenLimitMin: number;
  dayKey: string;
  dayUsedSec: number;
  muted: boolean;
};

export const MODULES: ModuleId[] = ["memory", "counting", "letters", "shapes", "animals"];

export const EMPTY_PROGRESS: Record<ModuleId, number> = {
  memory: 0,
  counting: 0,
  letters: 0,
  shapes: 0,
  animals: 0,
};

export const EMPTY_ROUNDS: Record<ModuleId, number> = {
  memory: 0,
  counting: 0,
  letters: 0,
  shapes: 0,
  animals: 0,
};
