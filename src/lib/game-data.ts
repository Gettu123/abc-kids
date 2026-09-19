import type { Lang } from "./types";

export type AnimalDef = {
  id: string;
  letter: string;
  es: string;
  pt: string;
  sound?: string;
};

export const ANIMALS: AnimalDef[] = [
  { id: "calopsita", letter: "C", es: "Calopsita", pt: "Calopsita", sound: "chirp" },
  { id: "araguato", letter: "A", es: "Araguato", pt: "Bugio", sound: "howl" },
  { id: "arara", letter: "A", es: "Guacamaya", pt: "Arara", sound: "squawk" },
  { id: "cotorra", letter: "C", es: "Cotorra", pt: "Caturrita", sound: "squawk" },
  { id: "lapa", letter: "L", es: "Lapa", pt: "Paca", sound: "squeak" },
  { id: "leao", letter: "L", es: "León", pt: "Leão", sound: "roar" },
  { id: "gato", letter: "G", es: "Gato", pt: "Gato", sound: "meow" },
  { id: "perro", letter: "P", es: "Perro", pt: "Cachorro", sound: "bark" },
  { id: "pato", letter: "P", es: "Pato", pt: "Pato", sound: "quack" },
  { id: "tucan", letter: "T", es: "Tucán", pt: "Tucano", sound: "squawk" },
  { id: "mono", letter: "M", es: "Mono", pt: "Macaco", sound: "hoot" },
  { id: "oso", letter: "O", es: "Oso", pt: "Urso", sound: "growl" },
  { id: "ovelha", letter: "O", es: "Oveja", pt: "Ovelha", sound: "baa" },
  { id: "sapo", letter: "S", es: "Sapo", pt: "Sapo", sound: "ribbit" },
  { id: "vaca", letter: "V", es: "Vaca", pt: "Vaca", sound: "moo" },
];

export const ANIMALS_BY_LANG: Record<Lang, AnimalDef[]> = {
  "es-VE": ANIMALS.filter((a) =>
    ["calopsita", "araguato", "cotorra", "lapa", "gato", "perro", "tucan", "mono", "vaca", "sapo"].includes(a.id),
  ),
  pt: ANIMALS.filter((a) =>
    ["calopsita", "arara", "leao", "gato", "pato", "tucan", "mono", "ovelha", "vaca", "oso"].includes(a.id),
  ),
};

export const ALPHABET: Record<Lang, Record<string, string>> = {
  "es-VE": {
    A: "Auyama",
    B: "Banana",
    C: "Calopsita",
    D: "Danta",
    E: "Estrella",
    F: "Flor",
    G: "Gato",
    H: "Helado",
    I: "Iguana",
    J: "Jirafa",
    K: "Koala",
    L: "Lapa",
    M: "Mango",
    N: "Nube",
    Ñ: "Ñoño",
    O: "Oso",
    P: "Perro",
    Q: "Queso",
    R: "Rana",
    S: "Sol",
    T: "Tucán",
    U: "Uva",
    V: "Vaca",
    W: "Waffle",
    X: "Xilófono",
    Y: "Yoyo",
    Z: "Zapato",
  },
  pt: {
    A: "Abacaxi",
    B: "Bola",
    C: "Calopsita",
    D: "Dedo",
    E: "Elefante",
    F: "Flor",
    G: "Gato",
    H: "Hipopótamo",
    I: "Igreja",
    J: "Jacaré",
    K: "Kiwi",
    L: "Leão",
    M: "Macaco",
    N: "Navio",
    Ñ: "Nhoque",
    O: "Ovelha",
    P: "Pato",
    Q: "Queijo",
    R: "Rato",
    S: "Sapo",
    T: "Tucano",
    U: "Urso",
    V: "Vaca",
    W: "Waffle",
    X: "Xícara",
    Y: "Ioiô",
    Z: "Zebra",
  },
};

export type MemoryItem = { id: string; es: string; pt: string; sound?: string };

export type MemoryThemeId =
  | "letters"
  | "numbers"
  | "objects"
  | "vehicles"
  | "fruits"
  | "nature"
  | "cockatiels"
  | "cows"
  | "animals"
  | "mix";

export type MemoryBoard = { theme: MemoryThemeId; items: MemoryItem[] };

export const MEMORY_THEMES: MemoryThemeId[] = [
  "letters",
  "numbers",
  "objects",
  "vehicles",
  "fruits",
  "nature",
  "cockatiels",
  "cows",
  "animals",
  "mix",
];

const LETTERS: MemoryItem[] = "ABCDEFGHIJLMNOPRSTUV".split("").map((L) => ({
  id: `letter-${L}`,
  es: L,
  pt: L,
}));

const NUMBERS: MemoryItem[] = Array.from({ length: 12 }, (_, i) => ({
  id: `num-${i + 1}`,
  es: String(i + 1),
  pt: String(i + 1),
}));

const OBJECTS: MemoryItem[] = [
  { id: "bola", es: "Bola", pt: "Bola" },
  { id: "zapato", es: "Zapato", pt: "Sapato" },
  { id: "reloj", es: "Reloj", pt: "Relógio" },
  { id: "libro", es: "Libro", pt: "Livro" },
  { id: "arepa", es: "Arepa", pt: "Pão" },
  { id: "silla", es: "Silla", pt: "Cadeira" },
];

const VEHICLES: MemoryItem[] = [
  { id: "carro", es: "Carro", pt: "Carro" },
  { id: "bus", es: "Autobús", pt: "Ônibus" },
  { id: "bici", es: "Bici", pt: "Bicicleta" },
  { id: "avion", es: "Avión", pt: "Avião" },
  { id: "barco", es: "Barco", pt: "Barco" },
  { id: "tren", es: "Tren", pt: "Trem" },
];

const FRUITS: MemoryItem[] = [
  { id: "mango", es: "Mango", pt: "Manga" },
  { id: "auyama", es: "Auyama", pt: "Abóbora" },
  { id: "uva", es: "Uva", pt: "Uva" },
  { id: "banana", es: "Banana", pt: "Banana" },
  { id: "manzana", es: "Manzana", pt: "Maçã" },
  { id: "naranja", es: "Naranja", pt: "Laranja" },
];

const NATURE: MemoryItem[] = [
  { id: "sol", es: "Sol", pt: "Sol" },
  { id: "estrella", es: "Estrella", pt: "Estrela" },
  { id: "flor", es: "Flor", pt: "Flor" },
  { id: "nube", es: "Nube", pt: "Nuvem" },
  { id: "arbol", es: "Árbol", pt: "Árvore" },
  { id: "luna", es: "Luna", pt: "Lua" },
];

const COCKATIELS: MemoryItem[] = [
  { id: "calopsita-white", es: "Calopsita", pt: "Calopsita", sound: "chirp" },
  { id: "calopsita-grey", es: "Calopsita gris", pt: "Calopsita cinza", sound: "chirp" },
  { id: "calopsita-blue", es: "Calopsita azul", pt: "Calopsita azul", sound: "chirp" },
  { id: "calopsita-crest", es: "Copa amarilla", pt: "Crista amarela", sound: "chirp" },
];

const COWS: MemoryItem[] = [
  { id: "vaca", es: "Vaca", pt: "Vaca", sound: "moo" },
  { id: "vaca-manchas", es: "Vaca manchada", pt: "Vaca malhada", sound: "moo" },
  { id: "vaca-cafe", es: "Vaca café", pt: "Vaca marrom", sound: "moo" },
  { id: "ternero", es: "Ternero", pt: "Bezerro", sound: "moo" },
];

const ANIMAL_ITEMS: MemoryItem[] = ANIMALS.map((a) => ({
  id: a.id,
  es: a.es,
  pt: a.pt,
  sound: a.sound,
}));

const MIX_POOL: MemoryItem[] = [...FRUITS, ...NATURE, ...VEHICLES, ...OBJECTS, ...COCKATIELS];

export function themeDeck(theme: MemoryThemeId): MemoryItem[] {
  switch (theme) {
    case "letters":
      return LETTERS;
    case "numbers":
      return NUMBERS;
    case "objects":
      return OBJECTS;
    case "vehicles":
      return VEHICLES;
    case "fruits":
      return FRUITS;
    case "nature":
      return NATURE;
    case "cockatiels":
      return COCKATIELS;
    case "cows":
      return COWS;
    case "animals":
      return ANIMAL_ITEMS;
    default:
      return MIX_POOL;
  }
}

export const MEMORY_DECK: MemoryItem[] = MIX_POOL;

export type ShapeId = "circle" | "square" | "triangle" | "rectangle" | "star";

export const SHAPES: ShapeId[] = ["circle", "square", "triangle", "rectangle", "star"];

export const SHAPE_COLOR: Record<ShapeId, string> = {
  circle: "var(--color-coral)",
  square: "var(--color-teal)",
  triangle: "var(--color-mango)",
  rectangle: "var(--color-leaf)",
  star: "var(--color-sky)",
};

export const COUNT_OBJECTS = ["calopsita-white", "mango", "estrella", "flor", "uva", "vaca"] as const;
export type CountObject = (typeof COUNT_OBJECTS)[number];
