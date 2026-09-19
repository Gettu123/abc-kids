import { Plus } from "lucide-react";
import { BeeArt } from "@/components/art";
import { Scene, TopBar } from "@/components/shell";
import { KidButton } from "@/components/ui/kid-button";
import { t } from "@/lib/i18n";
import { useApp } from "@/lib/store";
import { unlockAudio } from "@/lib/audio";
import { MODULES } from "@/lib/types";

export function ProfilesScreen() {
  const lang = useApp((s) => s.lang);
  const profiles = useApp((s) => s.profiles);
  const selectProfile = useApp((s) => s.selectProfile);
  const setScreen = useApp((s) => s.setScreen);

  return (
    <Scene>
      <TopBar title={t(lang, "whoPlays")} onBack={() => setScreen("welcome")} />
      <div className="mx-auto max-w-lg px-5 pb-12 pt-4">
        {profiles.length === 0 ? (
          <p className="text-center text-lg text-muted">{t(lang, "noProfiles")}</p>
        ) : (
          <ul className="grid gap-3">
            {profiles.map((p) => {
              const avg = Math.round(MODULES.reduce((a, m) => a + p.progress[m], 0) / MODULES.length);
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => {
                      unlockAudio();
                      selectProfile(p.id);
                    }}
                    className="flex w-full min-h-20 items-center gap-4 rounded-[24px] bg-foam px-4 text-left shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)] transition-transform duration-150 active:scale-[0.98]"
                  >
                    <BeeArt className="size-14" variant={p.gender === "girl" ? "luna" : "sol"} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-display text-2xl font-semibold">{p.name}</span>
                      <span className="text-sm text-muted">
                        {t(p.lang, "average")} {avg}%
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <KidButton
          tone="accent"
          className="mt-6 w-full"
          onClick={() => {
            unlockAudio();
            setScreen("onboarding");
          }}
        >
          <Plus className="size-6" />
          {t(lang, "newChild")}
        </KidButton>
      </div>
    </Scene>
  );
}
