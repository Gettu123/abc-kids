import type { ReactNode, JSX } from "react";
import type { ShapeId } from "@/lib/game-data";
import { EXTRA_ART, GlyphArt } from "@/components/art-extra";

type IconProps = { className?: string; title?: string };

function Svg({ className, title, children }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role={title ? "img" : "presentation"} aria-label={title}>
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function BeeArt({ className, variant = "sol" }: IconProps & { variant?: "sol" | "luna" }) {
  const body = variant === "luna" ? "#F4C14A" : "#F5C542";
  const scarf = variant === "luna" ? "#E85D4C" : "#148F8A";
  return (
    <Svg className={className} title="Abejita">
      <ellipse cx="78" cy="42" rx="22" ry="12" fill="#F7FBFF" opacity="0.9" transform="rotate(-18 78 42)" />
      <ellipse cx="86" cy="52" rx="18" ry="10" fill="#E8F4FF" opacity="0.85" transform="rotate(12 86 52)" />
      <ellipse cx="56" cy="68" rx="32" ry="28" fill={body} />
      <ellipse cx="56" cy="68" rx="32" ry="28" fill="none" stroke="#2B2118" strokeWidth="3" />
      <path d="M28 62h56" stroke="#2B2118" strokeWidth="7" strokeLinecap="round" />
      <path d="M30 76h52" stroke="#2B2118" strokeWidth="7" strokeLinecap="round" />
      <circle cx="44" cy="50" r="16" fill={body} stroke="#2B2118" strokeWidth="3" />
      <circle cx="39" cy="48" r="3.2" fill="#2B2118" />
      <circle cx="50" cy="48" r="3.2" fill="#2B2118" />
      <circle cx="38.2" cy="47" r="1" fill="#fff" />
      <circle cx="49.2" cy="47" r="1" fill="#fff" />
      <path d="M40 55c3 3 8 3 11 0" fill="none" stroke="#2B2118" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 36c-2-12 6-18 12-14" fill="none" stroke="#2B2118" strokeWidth="3" strokeLinecap="round" />
      <path d="M46 34c2-12 10-16 14-10" fill="none" stroke="#2B2118" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="22" r="4" fill={scarf} stroke="#2B2118" strokeWidth="2" />
      <circle cx="60" cy="20" r="4" fill={scarf} stroke="#2B2118" strokeWidth="2" />
      <path d="M86 74c10 4 14 14 8 20" fill="none" stroke="#2B2118" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="56" cy="88" rx="10" ry="5" fill={scarf} stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

export function SunArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Sol">
      <circle cx="60" cy="60" r="22" fill="#FFD56A" stroke="#2B2118" strokeWidth="3" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={60 + Math.cos(a) * 30}
            y1={60 + Math.sin(a) * 30}
            x2={60 + Math.cos(a) * 46}
            y2={60 + Math.sin(a) * 46}
            stroke="#EE9B0F"
            strokeWidth="6"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="52" cy="56" r="3.5" fill="#2B2118" />
      <circle cx="68" cy="56" r="3.5" fill="#2B2118" />
      <path d="M50 70c6 8 14 8 20 0" fill="none" stroke="#2B2118" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  );
}

export function StarArt({ className, fill = "#FFD56A" }: IconProps & { fill?: string }) {
  return (
    <Svg className={className} title="Estrella">
      <polygon
        points="60,10 72,44 108,46 80,70 90,104 60,84 30,104 40,70 12,46 48,44"
        fill={fill}
        stroke="#2B2118"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MangoArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Mango">
      <path d="M70 22c8-10 22-8 24 4" fill="none" stroke="#2BA86A" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="58" cy="70" rx="32" ry="38" fill="#EE9B0F" stroke="#2B2118" strokeWidth="3" />
      <ellipse cx="46" cy="62" rx="10" ry="16" fill="#FFD56A" opacity="0.7" />
      <path d="M78 20c-8 8-10 18-8 24" fill="#2BA86A" stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

export function AuyamaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Auyama">
      <ellipse cx="60" cy="70" rx="40" ry="32" fill="#EE9B0F" stroke="#2B2118" strokeWidth="3" />
      <path d="M40 46c0 28 4 48 4 48M60 40v56M80 46c0 28-4 48-4 48" fill="none" stroke="#C46A08" strokeWidth="3" />
      <rect x="54" y="24" width="12" height="18" rx="4" fill="#2BA86A" stroke="#2B2118" strokeWidth="2" />
      <path d="M66 28c10-2 14 6 10 12" fill="#2BA86A" stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

export function ArepaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Arepa">
      <ellipse cx="60" cy="64" rx="42" ry="30" fill="#F4C14A" stroke="#2B2118" strokeWidth="3" />
      <ellipse cx="60" cy="64" rx="28" ry="18" fill="#FFE08A" />
      <circle cx="48" cy="60" r="3" fill="#C46A08" />
      <circle cx="70" cy="70" r="2.5" fill="#C46A08" />
      <circle cx="62" cy="54" r="2" fill="#C46A08" />
    </Svg>
  );
}

export function UvaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Uva">
      <path d="M60 18c2 10 8 16 16 18" fill="none" stroke="#2BA86A" strokeWidth="4" strokeLinecap="round" />
      <circle cx="48" cy="54" r="14" fill="#7B4BB4" stroke="#2B2118" strokeWidth="2.5" />
      <circle cx="72" cy="54" r="14" fill="#8E5CC8" stroke="#2B2118" strokeWidth="2.5" />
      <circle cx="60" cy="72" r="14" fill="#6A3DA0" stroke="#2B2118" strokeWidth="2.5" />
      <circle cx="42" cy="76" r="12" fill="#7B4BB4" stroke="#2B2118" strokeWidth="2.5" />
      <circle cx="78" cy="76" r="12" fill="#8E5CC8" stroke="#2B2118" strokeWidth="2.5" />
    </Svg>
  );
}

export function FlorArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Flor">
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="60"
          cy="38"
          rx="12"
          ry="20"
          fill="#E85D4C"
          stroke="#2B2118"
          strokeWidth="2"
          transform={`rotate(${deg} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="14" fill="#FFD56A" stroke="#2B2118" strokeWidth="2.5" />
      <path d="M60 86v22" stroke="#2BA86A" strokeWidth="5" strokeLinecap="round" />
    </Svg>
  );
}

export function CotorraArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Cotorra">
      <ellipse cx="58" cy="70" rx="28" ry="32" fill="#2BA86A" stroke="#2B2118" strokeWidth="3" />
      <path d="M40 70c-16 4-22 22-10 30" fill="#148F8A" stroke="#2B2118" strokeWidth="3" />
      <circle cx="72" cy="48" r="20" fill="#3DCC8A" stroke="#2B2118" strokeWidth="3" />
      <circle cx="78" cy="44" r="4" fill="#2B2118" />
      <circle cx="79.5" cy="43" r="1.3" fill="#fff" />
      <path d="M90 50c12 2 14 12 4 16l-12-4z" fill="#EE9B0F" stroke="#2B2118" strokeWidth="2.5" />
      <path d="M44 36c-2-16 10-26 22-18" fill="#E85D4C" stroke="#2B2118" strokeWidth="3" />
    </Svg>
  );
}

export function AraraArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Arara">
      <ellipse cx="54" cy="72" rx="26" ry="30" fill="#4AADDC" stroke="#2B2118" strokeWidth="3" />
      <path d="M36 68c-18 10-16 32 2 34" fill="#E85D4C" stroke="#2B2118" strokeWidth="3" />
      <circle cx="74" cy="50" r="20" fill="#EE9B0F" stroke="#2B2118" strokeWidth="3" />
      <circle cx="80" cy="46" r="4" fill="#2B2118" />
      <path d="M92 52c14 0 16 12 4 16l-14-2z" fill="#2B2118" />
      <path d="M58 32c0-16 18-22 26-10" fill="#4AADDC" stroke="#2B2118" strokeWidth="3" />
    </Svg>
  );
}

export function AraguatoArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Araguato">
      <ellipse cx="60" cy="78" rx="30" ry="26" fill="#C46A08" stroke="#2B2118" strokeWidth="3" />
      <circle cx="60" cy="48" r="24" fill="#E08A3C" stroke="#2B2118" strokeWidth="3" />
      <circle cx="38" cy="46" r="12" fill="#E08A3C" stroke="#2B2118" strokeWidth="3" />
      <circle cx="82" cy="46" r="12" fill="#E08A3C" stroke="#2B2118" strokeWidth="3" />
      <ellipse cx="60" cy="58" rx="12" ry="10" fill="#F4C14A" />
      <circle cx="52" cy="44" r="3.2" fill="#2B2118" />
      <circle cx="68" cy="44" r="3.2" fill="#2B2118" />
      <path d="M84 86c16 8 22 2 24-8" fill="none" stroke="#C46A08" strokeWidth="6" strokeLinecap="round" />
    </Svg>
  );
}

export function LapaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Lapa">
      <ellipse cx="60" cy="78" rx="34" ry="22" fill="#8B6914" stroke="#2B2118" strokeWidth="3" />
      <ellipse cx="78" cy="54" rx="22" ry="18" fill="#C9A27A" stroke="#2B2118" strokeWidth="3" />
      <circle cx="86" cy="50" r="3" fill="#2B2118" />
      <path d="M98 56c8 2 8 8 2 10" fill="#2B2118" />
      <circle cx="42" cy="70" r="8" fill="#5C4310" />
      <circle cx="60" cy="66" r="8" fill="#5C4310" />
      <circle cx="54" cy="84" r="7" fill="#5C4310" />
    </Svg>
  );
}

export function LeaoArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Leão">
      <circle cx="60" cy="62" r="38" fill="#EE9B0F" stroke="#2B2118" strokeWidth="3" />
      <circle cx="60" cy="64" r="24" fill="#FFD56A" stroke="#2B2118" strokeWidth="3" />
      <circle cx="50" cy="60" r="3.4" fill="#2B2118" />
      <circle cx="70" cy="60" r="3.4" fill="#2B2118" />
      <ellipse cx="60" cy="72" rx="6" ry="4" fill="#E85D4C" />
      <path d="M54 78c4 4 8 4 12 0" fill="none" stroke="#2B2118" strokeWidth="2.5" />
    </Svg>
  );
}

export function GatoArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Gato">
      <path d="M32 44l10-24 12 20z" fill="#F4C14A" stroke="#2B2118" strokeWidth="3" />
      <path d="M66 40l12-24 10 24z" fill="#F4C14A" stroke="#2B2118" strokeWidth="3" />
      <ellipse cx="60" cy="70" rx="32" ry="28" fill="#FFD56A" stroke="#2B2118" strokeWidth="3" />
      <circle cx="48" cy="66" r="4" fill="#2B2118" />
      <circle cx="72" cy="66" r="4" fill="#2B2118" />
      <path d="M60 72v8" stroke="#2B2118" strokeWidth="3" />
      <path d="M48 84c8 8 16 8 24 0" fill="none" stroke="#2B2118" strokeWidth="3" />
      <path d="M22 70h20M78 70h20" stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

export function PerroArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Perro">
      <ellipse cx="60" cy="72" rx="34" ry="28" fill="#C9A27A" stroke="#2B2118" strokeWidth="3" />
      <ellipse cx="32" cy="58" rx="12" ry="18" fill="#8B6914" stroke="#2B2118" strokeWidth="3" />
      <ellipse cx="88" cy="58" rx="12" ry="18" fill="#8B6914" stroke="#2B2118" strokeWidth="3" />
      <circle cx="50" cy="70" r="3.4" fill="#2B2118" />
      <circle cx="70" cy="70" r="3.4" fill="#2B2118" />
      <ellipse cx="60" cy="82" rx="7" ry="5" fill="#2B2118" />
      <circle cx="92" cy="92" r="8" fill="#C9A27A" stroke="#2B2118" strokeWidth="3" />
    </Svg>
  );
}

export function PatoArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Pato">
      <ellipse cx="56" cy="74" rx="34" ry="24" fill="#FFD56A" stroke="#2B2118" strokeWidth="3" />
      <circle cx="84" cy="50" r="18" fill="#FFD56A" stroke="#2B2118" strokeWidth="3" />
      <circle cx="90" cy="46" r="3" fill="#2B2118" />
      <path d="M100 52c14 2 16 12 2 14l-16-4z" fill="#EE9B0F" stroke="#2B2118" strokeWidth="2.5" />
      <ellipse cx="40" cy="98" rx="12" ry="6" fill="#EE9B0F" stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

export function TucanArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Tucán">
      <ellipse cx="48" cy="70" rx="26" ry="30" fill="#2B2118" />
      <circle cx="70" cy="50" r="18" fill="#2B2118" />
      <circle cx="76" cy="46" r="4" fill="#FFD56A" />
      <circle cx="76" cy="46" r="2" fill="#2B2118" />
      <path d="M86 52c28-4 34 16 8 22l-22-6z" fill="#EE9B0F" stroke="#2B2118" strokeWidth="2.5" />
      <path d="M86 58h22" stroke="#E85D4C" strokeWidth="6" />
      <ellipse cx="40" cy="78" rx="10" ry="14" fill="#4AADDC" />
    </Svg>
  );
}

export function MonoArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Mono">
      <circle cx="38" cy="48" r="16" fill="#8B6914" stroke="#2B2118" strokeWidth="3" />
      <circle cx="82" cy="48" r="16" fill="#8B6914" stroke="#2B2118" strokeWidth="3" />
      <circle cx="60" cy="62" r="28" fill="#C9A27A" stroke="#2B2118" strokeWidth="3" />
      <ellipse cx="60" cy="70" rx="16" ry="14" fill="#F4C14A" />
      <circle cx="50" cy="56" r="3.2" fill="#2B2118" />
      <circle cx="70" cy="56" r="3.2" fill="#2B2118" />
      <path d="M52 78c6 6 12 6 16 0" fill="none" stroke="#2B2118" strokeWidth="3" />
    </Svg>
  );
}

export function OsoArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Oso">
      <circle cx="34" cy="40" r="16" fill="#8B6914" stroke="#2B2118" strokeWidth="3" />
      <circle cx="86" cy="40" r="16" fill="#8B6914" stroke="#2B2118" strokeWidth="3" />
      <circle cx="60" cy="66" r="34" fill="#A07038" stroke="#2B2118" strokeWidth="3" />
      <ellipse cx="60" cy="76" rx="16" ry="12" fill="#E8C99A" />
      <circle cx="48" cy="60" r="4" fill="#2B2118" />
      <circle cx="72" cy="60" r="4" fill="#2B2118" />
      <ellipse cx="60" cy="72" rx="6" ry="4" fill="#2B2118" />
    </Svg>
  );
}

export function OvelhaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Ovelha">
      <circle cx="40" cy="64" r="18" fill="#FFF6E8" stroke="#2B2118" strokeWidth="3" />
      <circle cx="80" cy="64" r="18" fill="#FFF6E8" stroke="#2B2118" strokeWidth="3" />
      <circle cx="60" cy="50" r="20" fill="#FFF6E8" stroke="#2B2118" strokeWidth="3" />
      <circle cx="60" cy="78" r="20" fill="#FFF6E8" stroke="#2B2118" strokeWidth="3" />
      <circle cx="92" cy="50" r="14" fill="#F4C14A" stroke="#2B2118" strokeWidth="3" />
      <circle cx="96" cy="46" r="2.4" fill="#2B2118" />
      <ellipse cx="108" cy="52" rx="8" ry="5" fill="#2B2118" />
    </Svg>
  );
}

export function SapoArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Sapo">
      <ellipse cx="60" cy="74" rx="38" ry="26" fill="#2BA86A" stroke="#2B2118" strokeWidth="3" />
      <circle cx="42" cy="50" r="14" fill="#3DCC8A" stroke="#2B2118" strokeWidth="3" />
      <circle cx="78" cy="50" r="14" fill="#3DCC8A" stroke="#2B2118" strokeWidth="3" />
      <circle cx="42" cy="50" r="5" fill="#2B2118" />
      <circle cx="78" cy="50" r="5" fill="#2B2118" />
      <path d="M48 82c8 8 16 8 24 0" fill="none" stroke="#2B2118" strokeWidth="3" />
    </Svg>
  );
}

export function VacaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Vaca">
      <ellipse cx="60" cy="72" rx="36" ry="28" fill="#FFF6E8" stroke="#2B2118" strokeWidth="3" />
      <circle cx="40" cy="62" r="12" fill="#2B2118" />
      <circle cx="78" cy="80" r="10" fill="#2B2118" />
      <circle cx="86" cy="48" r="16" fill="#FFF6E8" stroke="#2B2118" strokeWidth="3" />
      <path d="M76 36l-6-16 12 8M96 38l8-16 2 14" fill="#F4C14A" stroke="#2B2118" strokeWidth="2.5" />
      <circle cx="82" cy="46" r="2.6" fill="#2B2118" />
      <ellipse cx="98" cy="52" rx="8" ry="5" fill="#E85D4C" stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

export const ART: Record<string, (p: IconProps) => JSX.Element> = {
  bee: (p) => <BeeArt {...p} />,
  sol: (p) => <SunArt {...p} />,
  estrella: (p) => <StarArt {...p} />,
  mango: (p) => <MangoArt {...p} />,
  auyama: (p) => <AuyamaArt {...p} />,
  arepa: (p) => <ArepaArt {...p} />,
  uva: (p) => <UvaArt {...p} />,
  flor: (p) => <FlorArt {...p} />,
  cotorra: (p) => <CotorraArt {...p} />,
  arara: (p) => <AraraArt {...p} />,
  araguato: (p) => <AraguatoArt {...p} />,
  lapa: (p) => <LapaArt {...p} />,
  leao: (p) => <LeaoArt {...p} />,
  gato: (p) => <GatoArt {...p} />,
  perro: (p) => <PerroArt {...p} />,
  pato: (p) => <PatoArt {...p} />,
  tucan: (p) => <TucanArt {...p} />,
  mono: (p) => <MonoArt {...p} />,
  oso: (p) => <OsoArt {...p} />,
  ovelha: (p) => <OvelhaArt {...p} />,
  sapo: (p) => <SapoArt {...p} />,
  vaca: (p) => <VacaArt {...p} />,
};

export function ArtById({ id, className }: { id: string; className?: string }) {
  if (id.startsWith("letter-") || id.startsWith("num-")) {
    const text = id.split("-")[1] ?? id;
    return <GlyphArt text={text} className={className} />;
  }
  const Comp = EXTRA_ART[id] ?? ART[id] ?? StarArt;
  return <Comp className={className} />;
}

export function ShapeArt({ id, className }: { id: ShapeId; className?: string }) {
  const fill =
    id === "circle"
      ? "#E85D4C"
      : id === "square"
        ? "#148F8A"
        : id === "triangle"
          ? "#EE9B0F"
          : id === "rectangle"
            ? "#2BA86A"
            : "#4AADDC";
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={id}>
      {id === "circle" && <circle cx="60" cy="60" r="38" fill={fill} stroke="#2B2118" strokeWidth="4" />}
      {id === "square" && <rect x="24" y="24" width="72" height="72" rx="8" fill={fill} stroke="#2B2118" strokeWidth="4" />}
      {id === "triangle" && (
        <polygon points="60,18 106,98 14,98" fill={fill} stroke="#2B2118" strokeWidth="4" strokeLinejoin="round" />
      )}
      {id === "rectangle" && (
        <rect x="14" y="34" width="92" height="52" rx="10" fill={fill} stroke="#2B2118" strokeWidth="4" />
      )}
      {id === "star" && (
        <polygon
          points="60,12 72,44 108,46 80,70 90,104 60,84 30,104 40,70 12,46 48,44"
          fill={fill}
          stroke="#2B2118"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
