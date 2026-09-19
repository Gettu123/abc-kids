import { useState } from "react";
import { Mascot, CalopsitaArt } from "@/components/mascots";
import { Scene, TopBar } from "@/components/shell";
import { KidButton } from "@/components/ui/kid-button";
import { t } from "@/lib/i18n";
import { useApp } from "@/lib/store";
import { speak, unlockAudio } from "@/lib/audio";
import { cn } from "@/lib/utils";
import type { Gender } from "@/lib/types";

export function OnboardingScreen() {
  const lang = useApp((s) => s.lang);
  const setScreen = useApp((s) => s.setScreen);
  const createProfile = useApp((s) => s.createProfile);
  const muted = useApp((s) => s.muted);
  const profiles = useApp((s) => s.profiles);
  const [name, setName] = useState("");
  const [gender, setGender] = useState<Gender>("boy");

  const canGo = name.trim().length >= 2;

  const start = () => {
    if (!canGo) return;
    unlockAudio();
    const p = createProfile(name, gender, lang);
    speak(t(lang, gender === "boy" ? "hiNameBoy" : "hiNameGirl", { name: p.name }), lang, muted);
  };

  return (
    <Scene>
      <TopBar
        title={t(lang, "newChild")}
        onBack={() => setScreen(profiles.length ? "profiles" : "welcome")}
        showParent={false}
      />
      <div className="mx-auto max-w-lg px-5 pb-16 pt-4">
        <CalopsitaArt className="mx-auto size-24 anim-float" color={gender === "girl" ? "blue" : "grey"} />
        <label className="mt-4 block font-display text-2xl font-semibold" htmlFor="kid-name">
          {t(lang, "whatsYourName")}
        </label>
        <input
          id="kid-name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value.slice(0, 18))}
          placeholder={t(lang, "namePlaceholder")}
          className="mt-3 h-16 w-full rounded-[22px] border-0 bg-foam px-5 font-display text-2xl font-semibold text-ink shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)] outline-none placeholder:text-muted focus:ring-4 focus:ring-primary"
        />

        <p className="mt-7 font-display text-2xl font-semibold">{t(lang, "iAm")}</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <GenderCard label={t(lang, "boy")} active={gender === "boy"} gender="boy" onClick={() => setGender("boy")} />
          <GenderCard label={t(lang, "girl")} active={gender === "girl"} gender="girl" onClick={() => setGender("girl")} />
        </div>

        <KidButton className="mt-8 w-full" disabled={!canGo} onClick={start}>
          {t(lang, "startPlaying")}
        </KidButton>
      </div>
    </Scene>
  );
}

function GenderCard({
  label,
  active,
  gender,
  onClick,
}: {
  label: string;
  active: boolean;
  gender: Gender;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex min-h-32 flex-col items-center justify-center gap-1 rounded-[24px] bg-foam p-3",
        "shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)]",
        "transition-transform duration-150 active:scale-[0.98]",
        active && "ring-4 ring-primary",
      )}
    >
      <Mascot gender={gender} className="size-20" />
      <span className="font-display text-xl font-semibold">{label}</span>
    </button>
  );
}
