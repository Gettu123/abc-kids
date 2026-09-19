import type { ReactNode } from "react";
import { ArrowLeft, Settings2, Volume2, VolumeX } from "lucide-react";
import { BeeArt } from "@/components/art";
import { KidButton } from "@/components/ui/kid-button";
import { t as tr } from "@/lib/i18n";
import { useApp } from "@/lib/store";
import { setMuted as setAudioMuted, unlockAudio } from "@/lib/audio";
import { cn } from "@/lib/utils";

export function Scene({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("scene-bg relative min-h-dvh overflow-x-hidden", className)}>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 hill-band" />
      {children}
    </div>
  );
}

export function TopBar({
  title,
  onBack,
  showParent = true,
}: {
  title?: string;
  onBack?: () => void;
  showParent?: boolean;
}) {
  const lang = useApp((s) => s.lang);
  const muted = useApp((s) => s.muted);
  const setMuted = useApp((s) => s.setMuted);
  const setScreen = useApp((s) => s.setScreen);
  const active = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
  const variant = active?.gender === "girl" ? "luna" : "sol";

  return (
    <header className="flex items-center gap-2 px-3 pt-3 pb-1 sm:px-5">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="grid size-12 shrink-0 place-items-center rounded-full bg-foam text-ink shadow-[0_4px_0_color-mix(in_oklab,var(--color-ink)_14%,transparent)] active:translate-y-0.5"
          aria-label={tr(lang, "back")}
        >
          <ArrowLeft className="size-6" />
        </button>
      ) : (
        <BeeArt className="size-12 anim-float" variant={variant} />
      )}
      <div className="min-w-0 flex-1">
        {title ? <h1 className="truncate font-display text-2xl font-semibold leading-tight">{title}</h1> : null}
      </div>
      <button
        type="button"
        className="grid size-12 place-items-center rounded-full bg-foam text-ink shadow-[0_4px_0_color-mix(in_oklab,var(--color-ink)_14%,transparent)]"
        aria-label={muted ? tr(lang, "unmute") : tr(lang, "mute")}
        onClick={() => {
          unlockAudio();
          setMuted(!muted);
          setAudioMuted(!muted);
        }}
      >
        {muted ? <VolumeX className="size-6" /> : <Volume2 className="size-6" />}
      </button>
      {showParent ? (
        <button
          type="button"
          className="grid size-12 place-items-center rounded-full bg-foam text-ink shadow-[0_4px_0_color-mix(in_oklab,var(--color-ink)_14%,transparent)]"
          aria-label={tr(lang, "parental")}
          onClick={() => {
            unlockAudio();
            setScreen("parental");
          }}
        >
          <Settings2 className="size-6" />
        </button>
      ) : null}
    </header>
  );
}

export function ProgressBar({
  value,
  tone = "primary",
}: {
  value: number;
  tone?: "primary" | "accent" | "coral" | "leaf" | "sky";
}) {
  const map = {
    primary: "bg-primary",
    accent: "bg-accent",
    coral: "bg-coral",
    leaf: "bg-leaf",
    sky: "bg-sky",
  };
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-ink/10">
      <div
        className={cn("h-full rounded-full transition-[width] duration-500 ease-out", map[tone])}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export function BigLetter({ letter, active, onClick }: { letter: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "grid size-16 place-items-center rounded-[18px] font-display text-3xl font-semibold sm:size-20 sm:text-4xl",
        "shadow-[0_5px_0_color-mix(in_oklab,var(--color-ink)_16%,transparent)]",
        "transition-transform duration-150 active:scale-[0.96]",
        active ? "bg-accent text-ink" : "bg-foam text-ink",
      )}
    >
      {letter}
    </button>
  );
}

export function SpeechBubble({ text }: { text: string }) {
  return (
    <div className="relative mx-auto max-w-md rounded-[24px] bg-foam px-5 py-3 text-center font-display text-lg font-medium text-ink shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_10%,transparent)]">
      {text}
    </div>
  );
}

export function WinBanner({
  title,
  onAgain,
  onHome,
  againLabel,
  homeLabel,
}: {
  title: string;
  onAgain: () => void;
  onHome: () => void;
  againLabel: string;
  homeLabel: string;
}) {
  return (
    <div className="anim-pop kid-card mx-auto mt-4 max-w-md p-6 text-center">
      <p className="font-display text-3xl font-semibold">{title}</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <KidButton className="flex-1" onClick={onAgain}>
          {againLabel}
        </KidButton>
        <KidButton tone="cream" className="flex-1" onClick={onHome}>
          {homeLabel}
        </KidButton>
      </div>
    </div>
  );
}
