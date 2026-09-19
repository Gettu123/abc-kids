import { BeeArt } from "@/components/art";
import { KidButton } from "@/components/ui/kid-button";
import { t } from "@/lib/i18n";
import { useApp } from "@/lib/store";

export function TimeUpOverlay() {
  const lang = useApp((s) => s.lang);
  const setScreen = useApp((s) => s.setScreen);
  const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/55 px-5">
      <div className="kid-card w-full max-w-md p-6 text-center">
        <BeeArt className="mx-auto size-24 anim-float" variant={profile?.gender === "girl" ? "luna" : "sol"} />
        <h2 className="mt-3 font-display text-3xl font-semibold">{t(lang, "restEyes")}</h2>
        <p className="mt-2 text-muted">{t(lang, "timeToRest")}</p>
        <KidButton className="mt-6 w-full" onClick={() => setScreen("parental")}>
          {t(lang, "okParent")}
        </KidButton>
      </div>
    </div>
  );
}
