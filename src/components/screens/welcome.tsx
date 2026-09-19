import { CalopsitaTrio, BrandMark } from "@/components/mascots";
import { Scene } from "@/components/shell";
import { KidButton } from "@/components/ui/kid-button";
import { t } from "@/lib/i18n";
import { useApp } from "@/lib/store";
import { sfx, speak, unlockAudio } from "@/lib/audio";

export function WelcomeScreen() {
  const lang = useApp((s) => s.lang);
  const setScreen = useApp((s) => s.setScreen);
  const profiles = useApp((s) => s.profiles);
  const muted = useApp((s) => s.muted);

  return (
    <Scene>
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col items-center px-5 pb-16 pt-10">
        <button
          type="button"
          className="anim-float"
          aria-label={t(lang, "listenAnimal")}
          onClick={() => {
            unlockAudio();
            sfx.animal("calopsita");
            speak(t(lang, "appName"), lang, muted);
          }}
        >
          <CalopsitaTrio className="h-40 w-56 sm:h-48 sm:w-64" />
        </button>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">{t(lang, "appName")}</h1>
        <p className="mt-2 text-center text-lg text-muted">{t(lang, "tagline")}</p>
        <KidButton
          className="mt-10 w-full"
          onClick={() => {
            unlockAudio();
            sfx.animal("calopsita");
            setScreen(profiles.length ? "profiles" : "onboarding");
          }}
        >
          {t(lang, "continue")}
        </KidButton>
        <button
          type="button"
          className="mt-4 min-h-12 text-base font-semibold text-muted underline-offset-4 hover:underline"
          onClick={() => {
            unlockAudio();
            setScreen("parental");
          }}
        >
          {t(lang, "parental")}
        </button>
        <BrandMark className="mt-auto pt-8 text-center text-sm font-semibold text-ink/50" />
      </div>
    </Scene>
  );
}
