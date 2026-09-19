import { BeeArt } from "@/components/art";
import { ProgressBar, Scene, SpeechBubble, TopBar } from "@/components/shell";
import { hiName, t } from "@/lib/i18n";
import { useApp } from "@/lib/store";
import { unlockAudio, speak } from "@/lib/audio";
import { MODULES, type ModuleId } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const AREAS: { id: ModuleId; tone: "primary" | "accent" | "coral" | "leaf" | "sky"; hint: "memoryHint" | "countingHint" | "lettersHint" | "shapesHint" | "animalsHint" }[] = [
  { id: "memory", tone: "primary", hint: "memoryHint" },
  { id: "counting", tone: "accent", hint: "countingHint" },
  { id: "letters", tone: "coral", hint: "lettersHint" },
  { id: "shapes", tone: "leaf", hint: "shapesHint" },
  { id: "animals", tone: "sky", hint: "animalsHint" },
];

export function HomeScreen() {
  const lang = useApp((s) => s.lang);
  const setScreen = useApp((s) => s.setScreen);
  const muted = useApp((s) => s.muted);
  const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));

  useEffect(() => {
    if (!profile) return;
    speak(hiName(profile.lang, profile.gender, profile.name), profile.lang, muted);
    // only on mount for this profile
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.id]);

  if (!profile) return null;
  const avg = Math.round(MODULES.reduce((a, m) => a + profile.progress[m], 0) / MODULES.length);

  return (
    <Scene>
      <TopBar />
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-2">
        <div className="flex items-center gap-3">
          <BeeArt className="size-20 anim-float" variant={profile.gender === "girl" ? "luna" : "sol"} />
          <div>
            <h1 className="font-display text-3xl font-semibold leading-tight">
              {hiName(lang, profile.gender, profile.name)}
            </h1>
            <p className="text-muted">
              {t(lang, "average")} {avg}% · {profile.medals.length} {t(lang, "medals").toLowerCase()}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <SpeechBubble text={t(lang, "pickGame")} />
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {AREAS.map((area, i) => (
            <button
              key={area.id}
              type="button"
              onClick={() => {
                unlockAudio();
                setScreen(area.id);
              }}
              className={cn(
                "anim-pop kid-card min-h-32 p-4 text-left transition-transform duration-150 active:scale-[0.98]",
                i === 0 && "sm:col-span-2",
              )}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <p className="font-display text-2xl font-semibold">{t(lang, area.id)}</p>
              <p className="mt-1 text-muted">{t(lang, area.hint)}</p>
              <div className="mt-3">
                <ProgressBar value={profile.progress[area.id]} tone={area.tone} />
              </div>
              <p className="mt-1 text-right font-display text-sm tabular-nums text-muted">{profile.progress[area.id]}%</p>
            </button>
          ))}
        </div>
      </div>
    </Scene>
  );
}
