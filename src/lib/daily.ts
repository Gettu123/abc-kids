import { hashSeed, shuffleSeeded, todayKey } from "./utils";
import { MEMORY_THEMES, type MemoryBoard, type MemoryThemeId, themeDeck } from "./game-data";

export const DAILY_BOARDS = 10;

export function todaysMemoryBoards(): MemoryBoard[] {
  const seed = hashSeed(`abc-kids-${todayKey()}`);
  const themes = shuffleSeeded([...MEMORY_THEMES], seed);
  return themes.slice(0, DAILY_BOARDS).map((theme, i) => {
    const deck = themeDeck(theme);
    const items = shuffleSeeded(deck, seed + i * 97).slice(0, 4);
    return { theme, items };
  });
}

export function themeLabel(theme: MemoryThemeId, lang: "es-VE" | "pt") {
  const labels: Record<MemoryThemeId, { es: string; pt: string }> = {
    letters: { es: "Letras", pt: "Letras" },
    numbers: { es: "Números", pt: "Números" },
    objects: { es: "Objetos", pt: "Objetos" },
    vehicles: { es: "Vehículos", pt: "Veículos" },
    fruits: { es: "Frutas", pt: "Frutas" },
    nature: { es: "Naturaleza", pt: "Natureza" },
    cockatiels: { es: "Calopsitas", pt: "Calopsitas" },
    cows: { es: "Vacas", pt: "Vacas" },
    animals: { es: "Animales", pt: "Animais" },
    mix: { es: "Sorpresa", pt: "Surpresa" },
  };
  return lang === "pt" ? labels[theme].pt : labels[theme].es;
}
