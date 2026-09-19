import type { ReactNode } from "react";
import type { Gender } from "@/lib/types";

type IconProps = { className?: string; title?: string };

function Svg({ className, title, children, viewBox = "0 0 120 120" }: IconProps & { children: ReactNode; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} className={className} role={title ? "img" : "presentation"} aria-label={title}>
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function CalopsitaArt({
  className,
  color = "white",
}: IconProps & { color?: "white" | "grey" | "blue" | "crest" }) {
  const pal =
    color === "grey"
      ? { body: "#9AA3AB", wing: "#B7BEC4", crest: "#F5D76E", cheek: "#F4A07A", tail: "#8A9299" }
      : color === "blue"
        ? { body: "#8FA6BA", wing: "#F4F7FB", crest: "#8FA6BA", cheek: "#EFA48A", tail: "#C9D5E0" }
        : color === "crest"
          ? { body: "#C4C8CC", wing: "#D9DDE0", crest: "#FFE066", cheek: "#F4A07A", tail: "#A8AEB4" }
          : { body: "#FFF8F0", wing: "#F3E6D8", crest: "#FFF8F0", cheek: "#F7B7A8", tail: "#F0E4D6" };
  return (
    <Svg className={className} title="Calopsita">
      <ellipse cx="62" cy="78" rx="28" ry="24" fill={pal.body} stroke="#2B2118" strokeWidth="3" />
      <ellipse cx="78" cy="70" rx="16" ry="14" fill={pal.wing} stroke="#2B2118" strokeWidth="2.5" />
      <circle cx="48" cy="52" r="22" fill={pal.body} stroke="#2B2118" strokeWidth="3" />
      <path d="M40 36c-2-16 8-24 18-16" fill={pal.crest} stroke="#2B2118" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="42" cy="50" r="4" fill="#2B2118" />
      <circle cx="43.4" cy="48.8" r="1.2" fill="#fff" />
      <ellipse cx="38" cy="56" rx="7" ry="5" fill={pal.cheek} />
      <path d="M26 54c-10 2-12 10-2 12l12-4z" fill="#F08A4B" stroke="#2B2118" strokeWidth="2" />
      <path d="M82 86c18 10 16 18 4 22" fill="none" stroke={pal.tail} strokeWidth="8" strokeLinecap="round" />
      <path d="M82 90c14 8 12 16 2 18" fill="none" stroke="#2B2118" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="54" cy="100" rx="7" ry="4" fill="#F08A4B" stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

export function CalopsitaTrio({ className }: IconProps) {
  return (
    <Svg className={className} title="Calopsitas" viewBox="0 0 180 140">
      <rect x="30" y="88" width="120" height="12" rx="4" fill="#C48A4A" stroke="#2B2118" strokeWidth="3" />
      <rect x="78" y="100" width="24" height="28" fill="#D7A05C" stroke="#2B2118" strokeWidth="3" />
      <g transform="translate(8,18) scale(0.72)">
        <CalopsitaArt color="grey" />
      </g>
      <g transform="translate(48,4) scale(0.82)">
        <CalopsitaArt color="white" />
      </g>
      <g transform="translate(92,22) scale(0.72)">
        <CalopsitaArt color="blue" />
      </g>
    </Svg>
  );
}

/** Stylized clay-girl companion (purple look), not a likeness. */
export function NinaArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Niña">
      <ellipse cx="60" cy="108" rx="28" ry="8" fill="#2B2118" opacity="0.12" />
      <path d="M42 86c0 18 36 18 36 0V70H42z" fill="#7B3AA3" stroke="#2B2118" strokeWidth="3" />
      <path d="M38 86h44c2 16-8 24-22 24S36 102 38 86z" fill="#F4F1F8" stroke="#2B2118" strokeWidth="3" />
      <circle cx="60" cy="46" r="26" fill="#E8B898" stroke="#2B2118" strokeWidth="3" />
      <path d="M34 44c-2-22 16-34 28-28 8-10 28-8 30 12 10 4 8 22-2 24-4 14-50 16-56-8z" fill="#4A3428" />
      <circle cx="50" cy="48" r="4" fill="#2B2118" />
      <circle cx="70" cy="48" r="4" fill="#2B2118" />
      <circle cx="51.4" cy="46.8" r="1.2" fill="#fff" />
      <path d="M54 60c4 4 8 4 12 0" fill="none" stroke="#2B2118" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="44" cy="56" rx="5" ry="3" fill="#F2A090" opacity="0.8" />
      <path d="M86 62l18-10 4 8-16 14z" fill="#E8B898" stroke="#2B2118" strokeWidth="2.5" />
      <path d="M96 48l8-14 6 4-4 14z" fill="#E8B898" stroke="#2B2118" strokeWidth="2.5" />
    </Svg>
  );
}

/** Stylized clay-boy companion (green look), not a likeness. */
export function NinoArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Niño">
      <ellipse cx="60" cy="108" rx="28" ry="8" fill="#2B2118" opacity="0.12" />
      <path d="M40 70h40v18H40z" fill="#3DCC6A" stroke="#2B2118" strokeWidth="3" />
      <path d="M44 88h32v18c0 6-32 6-32 0z" fill="#4A74B8" stroke="#2B2118" strokeWidth="3" />
      <path d="M40 74h40" stroke="#F4F1F8" strokeWidth="6" />
      <circle cx="60" cy="46" r="26" fill="#E0A878" stroke="#2B2118" strokeWidth="3" />
      <path d="M36 42c0-20 14-28 24-22 10-8 26-4 26 16v8H36z" fill="#3A2A22" />
      <circle cx="50" cy="48" r="4" fill="#2B2118" />
      <circle cx="70" cy="48" r="4" fill="#2B2118" />
      <circle cx="51.4" cy="46.8" r="1.2" fill="#fff" />
      <path d="M50 60c6 8 14 8 20 0" fill="none" stroke="#2B2118" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="48" y="104" width="10" height="8" rx="2" fill="#7A7A7A" stroke="#2B2118" strokeWidth="2" />
      <rect x="62" y="104" width="10" height="8" rx="2" fill="#7A7A7A" stroke="#2B2118" strokeWidth="2" />
    </Svg>
  );
}

/** Original pop idol-warrior (not Huntrix / any film character). */
export function LiraArt({ className }: IconProps) {
  return (
    <Svg className={className} title="Lira">
      <ellipse cx="60" cy="110" rx="26" ry="7" fill="#2B2118" opacity="0.12" />
      <path d="M44 78h32v16l-6 16h-20l-6-16z" fill="#1A1A22" stroke="#2B2118" strokeWidth="3" />
      <path d="M38 62h44l-4 18H42z" fill="#E85D8A" stroke="#2B2118" strokeWidth="3" />
      <path d="M38 62l-10 8 6 10 8-6M82 62l10 8-6 10-8-6" fill="#148F8A" stroke="#2B2118" strokeWidth="2.5" />
      <circle cx="60" cy="40" r="24" fill="#E8B898" stroke="#2B2118" strokeWidth="3" />
      <path d="M40 28c8-18 40-16 42 6 8 2 6 16-4 16H40c-8 0-10-12-0-22z" fill="#C5B4E8" />
      <path d="M78 38c10 18 6 40-2 48" fill="none" stroke="#C5B4E8" strokeWidth="8" strokeLinecap="round" />
      <circle cx="50" cy="42" r="3.6" fill="#2B2118" />
      <circle cx="68" cy="42" r="3.6" fill="#2B2118" />
      <circle cx="51.2" cy="40.8" r="1.1" fill="#fff" />
      <path d="M54 52c4 5 8 5 12 0" fill="none" stroke="#2B2118" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="86" y="70" width="10" height="28" rx="4" fill="#FFD56A" stroke="#2B2118" strokeWidth="2.5" />
      <circle cx="91" cy="68" r="7" fill="#E85D4C" stroke="#2B2118" strokeWidth="2.5" />
    </Svg>
  );
}

export function Mascot({ gender, className }: { gender?: Gender; className?: string }) {
  if (gender === "girl") return <NinaArt className={className} />;
  if (gender === "boy") return <NinoArt className={className} />;
  return <CalopsitaArt className={className} color="white" />;
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <p className={className ?? "pointer-events-none select-none text-center text-xs font-semibold tracking-wide text-ink/45"}>
      by 𝕾𝖆𝖓𝖉𝖊𝖗Verse
    </p>
  );
}
