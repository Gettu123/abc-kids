import type { ReactNode } from "react";
import { CalopsitaArt } from "@/components/mascots";

type IconProps = { className?: string; title?: string };

function Svg({ className, title, children }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role={title ? "img" : "presentation"} aria-label={title}>
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function GlyphArt({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`grid h-full w-full place-items-center font-display font-semibold text-ink ${className ?? ""}`}>
      <span className="text-[2.6rem] leading-none">{text}</span>
    </div>
  );
}

export function CarroArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Carro">
      <rect x="18" y="52" width="84" height="32" rx="10" fill="#E85D4C" stroke="#2B2118" strokeWidth="3" />
      <path d="M32 52l10-18h36l10 18z" fill="#4AADDC" stroke="#2B2118" strokeWidth="3" />
      <circle cx="38" cy="86" r="12" fill="#2B2118" />
      <circle cx="82" cy="86" r="12" fill="#2B2118" />
      <circle cx="38" cy="86" r="5" fill="#C9C9C9" />
      <circle cx="82" cy="86" r="5" fill="#C9C9C9" />
    </Svg>
  );
}

export function BusArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Bus">
      <rect x="14" y="36" width="92" height="48" rx="10" fill="#EE9B0F" stroke="#2B2118" strokeWidth="3" />
      <rect x="22" y="44" width="18" height="16" rx="3" fill="#7EC8E8" />
      <rect x="46" y="44" width="18" height="16" rx="3" fill="#7EC8E8" />
      <rect x="70" y="44" width="18" height="16" rx="3" fill="#7EC8E8" />
      <circle cx="36" cy="90" r="10" fill="#2B2118" />
      <circle cx="84" cy="90" r="10" fill="#2B2118" />
    </Svg>
  );
}

export function BiciArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Bici">
      <circle cx="34" cy="78" r="18" fill="none" stroke="#2B2118" strokeWidth="5" />
      <circle cx="86" cy="78" r="18" fill="none" stroke="#2B2118" strokeWidth="5" />
      <path d="M34 78l22-28h20l10 28M56 50l-10 28h40" fill="none" stroke="#148F8A" strokeWidth="4" strokeLinejoin="round" />
      <circle cx="56" cy="50" r="5" fill="#E85D4C" stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

export function AvionArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Avión">
      <ellipse cx="60" cy="60" rx="44" ry="14" fill="#4AADDC" stroke="#2B2118" strokeWidth="3" />
      <path d="M50 60l-10-32h16zM50 60l-6 28h14z" fill="#EE9B0F" stroke="#2B2118" strokeWidth="3" />
      <circle cx="90" cy="56" r="6" fill="#FFF6E8" stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

export function BarcoArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Barco">
      <path d="M20 70h80l-12 24H32z" fill="#E85D4C" stroke="#2B2118" strokeWidth="3" />
      <path d="M60 70V28l32 42z" fill="#FFF6E8" stroke="#2B2118" strokeWidth="3" />
      <path d="M16 98h88" stroke="#4AADDC" strokeWidth="6" strokeLinecap="round" />
    </Svg>
  );
}

export function TrenArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Tren">
      <rect x="20" y="40" width="52" height="40" rx="8" fill="#E85D4C" stroke="#2B2118" strokeWidth="3" />
      <rect x="72" y="52" width="32" height="28" rx="6" fill="#148F8A" stroke="#2B2118" strokeWidth="3" />
      <rect x="28" y="48" width="20" height="14" rx="3" fill="#7EC8E8" />
      <circle cx="34" cy="90" r="8" fill="#2B2118" />
      <circle cx="58" cy="90" r="8" fill="#2B2118" />
      <circle cx="90" cy="90" r="8" fill="#2B2118" />
    </Svg>
  );
}

export function BolaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Bola">
      <circle cx="60" cy="60" r="36" fill="#EE9B0F" stroke="#2B2118" strokeWidth="3" />
      <path d="M28 50c20 8 44 8 64 0M28 70c20-8 44-8 64 0" fill="none" stroke="#FFF6E8" strokeWidth="4" />
    </Svg>
  );
}

export function ZapatoArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Zapato">
      <path d="M22 70c0-18 20-28 40-20 18 4 38 2 42 16v18H22z" fill="#4A74B8" stroke="#2B2118" strokeWidth="3" />
      <rect x="22" y="82" width="82" height="12" rx="6" fill="#2B2118" />
    </Svg>
  );
}

export function RelojArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Reloj">
      <circle cx="60" cy="64" r="32" fill="#FFF6E8" stroke="#2B2118" strokeWidth="4" />
      <path d="M60 64V42M60 64l16 10" stroke="#E85D4C" strokeWidth="4" strokeLinecap="round" />
      <rect x="52" y="20" width="16" height="14" rx="4" fill="#C9A27A" stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

export function LibroArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Libro">
      <path d="M24 28h32c8 0 12 6 12 12v56c-8-6-16-6-32 0zM96 28H64c-8 0-12 6-12 12v56c8-6 16-6 32 0z" fill="#148F8A" stroke="#2B2118" strokeWidth="3" />
      <path d="M60 40v56" stroke="#2B2118" strokeWidth="3" />
    </Svg>
  );
}

export function SillaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Silla">
      <rect x="30" y="28" width="12" height="70" rx="4" fill="#C48A4A" stroke="#2B2118" strokeWidth="3" />
      <rect x="30" y="58" width="60" height="14" rx="4" fill="#E8C99A" stroke="#2B2118" strokeWidth="3" />
      <rect x="78" y="58" width="12" height="40" rx="4" fill="#C48A4A" stroke="#2B2118" strokeWidth="3" />
    </Svg>
  );
}

export function NubeArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Nube">
      <circle cx="44" cy="64" r="22" fill="#F4F7FB" stroke="#2B2118" strokeWidth="3" />
      <circle cx="70" cy="58" r="26" fill="#F4F7FB" stroke="#2B2118" strokeWidth="3" />
      <circle cx="86" cy="68" r="18" fill="#F4F7FB" stroke="#2B2118" strokeWidth="3" />
    </Svg>
  );
}

export function ArbolArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Árbol">
      <rect x="52" y="70" width="16" height="32" rx="4" fill="#8B6914" stroke="#2B2118" strokeWidth="3" />
      <circle cx="60" cy="48" r="32" fill="#2BA86A" stroke="#2B2118" strokeWidth="3" />
    </Svg>
  );
}

export function LunaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Luna">
      <path d="M70 24c-22 6-36 28-30 52 6 22 28 36 50 30-18 8-42 2-54-18-14-22-8-50 12-64 8-6 14-6 22 0z" fill="#FFD56A" stroke="#2B2118" strokeWidth="3" />
    </Svg>
  );
}

export function BananaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Banana">
      <path d="M34 30c8-8 20-8 22 4 8 40 18 56 40 62-28 10-52-8-62-40-4-12 0-20 0-26z" fill="#F5D76E" stroke="#2B2118" strokeWidth="3" />
    </Svg>
  );
}

export function ManzanaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Manzana">
      <circle cx="60" cy="68" r="32" fill="#E85D4C" stroke="#2B2118" strokeWidth="3" />
      <path d="M60 40c0-12 10-18 16-10" fill="none" stroke="#2BA86A" strokeWidth="5" strokeLinecap="round" />
    </Svg>
  );
}

export function NaranjaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Naranja">
      <circle cx="60" cy="64" r="34" fill="#EE9B0F" stroke="#2B2118" strokeWidth="3" />
      <circle cx="60" cy="64" r="8" fill="#FFE08A" />
    </Svg>
  );
}

export function VacaTint({ className, fill = "#FFF6E8" }: IconProps & { fill?: string }) {
  return (
    <Svg className={className} title="Vaca">
      <ellipse cx="60" cy="72" rx="36" ry="28" fill={fill} stroke="#2B2118" strokeWidth="3" />
      <circle cx="40" cy="62" r="12" fill="#2B2118" />
      <circle cx="78" cy="80" r="10" fill="#2B2118" />
      <circle cx="86" cy="48" r="16" fill={fill} stroke="#2B2118" strokeWidth="3" />
      <path d="M76 36l-6-16 12 8M96 38l8-16 2 14" fill="#F4C14A" stroke="#2B2118" strokeWidth="2.5" />
      <ellipse cx="98" cy="52" rx="8" ry="5" fill="#E85D4C" stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

export const EXTRA_ART: Record<string, (p: IconProps) => React.JSX.Element> = {
  carro: (p) => <CarroArt {...p} />,
  bus: (p) => <BusArt {...p} />,
  bici: (p) => <BiciArt {...p} />,
  avion: (p) => <AvionArt {...p} />,
  barco: (p) => <BarcoArt {...p} />,
  tren: (p) => <TrenArt {...p} />,
  bola: (p) => <BolaArt {...p} />,
  zapato: (p) => <ZapatoArt {...p} />,
  reloj: (p) => <RelojArt {...p} />,
  libro: (p) => <LibroArt {...p} />,
  silla: (p) => <SillaArt {...p} />,
  nube: (p) => <NubeArt {...p} />,
  arbol: (p) => <ArbolArt {...p} />,
  luna: (p) => <LunaArt {...p} />,
  banana: (p) => <BananaArt {...p} />,
  manzana: (p) => <ManzanaArt {...p} />,
  naranja: (p) => <NaranjaArt {...p} />,
  calopsita: (p) => <CalopsitaArt {...p} color="white" />,
  "calopsita-white": (p) => <CalopsitaArt {...p} color="white" />,
  "calopsita-grey": (p) => <CalopsitaArt {...p} color="grey" />,
  "calopsita-blue": (p) => <CalopsitaArt {...p} color="blue" />,
  "calopsita-crest": (p) => <CalopsitaArt {...p} color="crest" />,
  "vaca-manchas": (p) => <VacaTint {...p} fill="#FFF6E8" />,
  "vaca-cafe": (p) => <VacaTint {...p} fill="#A07038" />,
  ternero: (p) => <VacaTint {...p} fill="#E8C99A" />,
};
