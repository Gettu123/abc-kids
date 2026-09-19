import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Tone = "primary" | "accent" | "cream" | "coral" | "leaf" | "sky" | "ink";

const tones: Record<Tone, string> = {
  primary: "bg-primary text-foam",
  accent: "bg-accent text-ink",
  cream: "bg-foam text-ink",
  coral: "bg-coral text-foam",
  leaf: "bg-leaf text-foam",
  sky: "bg-sky text-ink",
  ink: "bg-ink text-foam",
};

export function KidButton({
  tone = "primary",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: Tone }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex min-h-14 items-center justify-center gap-2 rounded-[22px] px-6",
        "font-display text-xl font-semibold tracking-tight",
        "shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_18%,transparent)]",
        "transition-transform duration-150 ease-out",
        "active:not-disabled:translate-y-[3px] active:not-disabled:scale-[0.98] active:not-disabled:shadow-none",
        "disabled:opacity-50",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
