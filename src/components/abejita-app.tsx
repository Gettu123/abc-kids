import { useEffect } from "react";
import { WelcomeScreen } from "@/components/screens/welcome";
import { OnboardingScreen } from "@/components/screens/onboarding";
import { ProfilesScreen } from "@/components/screens/profiles";
import { HomeScreen } from "@/components/screens/home";
import { MemoryScreen } from "@/components/screens/memory";
import { CountingScreen } from "@/components/screens/counting";
import { LettersScreen } from "@/components/screens/letters";
import { ShapesScreen } from "@/components/screens/shapes";
import { AnimalsScreen } from "@/components/screens/animals";
import { ParentalScreen } from "@/components/screens/parental";
import { TimeUpOverlay } from "@/components/screens/time-up";
import { useApp } from "@/lib/store";
import { setMuted, unlockAudio } from "@/lib/audio";

export function AbejitaApp() {
  const hydrate = useApp((s) => s.hydrate);
  const hydrated = useApp((s) => s.hydrated);
  const screen = useApp((s) => s.screen);
  const timeLocked = useApp((s) => s.timeLocked);
  const tickSecond = useApp((s) => s.tickSecond);
  const persist = useApp((s) => s.persist);
  const muted = useApp((s) => s.muted);
  const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    setMuted(muted);
  }, [muted]);

  useEffect(() => {
    const theme = profile?.gender === "girl" ? "luna" : "sol";
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = useApp.getState().lang === "pt" ? "pt" : "es";
  }, [profile?.gender, screen]);

  useEffect(() => {
    const id = window.setInterval(() => tickSecond(), 1000);
    const onHide = () => {
      if (document.visibilityState === "hidden") persist();
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", persist);
    const unlock = () => unlockAudio();
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", persist);
    };
  }, [tickSecond, persist]);

  const view = !hydrated ? "welcome" : screen;

  return (
    <>
      {view === "welcome" && <WelcomeScreen />}
      {view === "profiles" && <ProfilesScreen />}
      {view === "onboarding" && <OnboardingScreen />}
      {view === "home" && <HomeScreen />}
      {view === "memory" && <MemoryScreen />}
      {view === "counting" && <CountingScreen />}
      {view === "letters" && <LettersScreen />}
      {view === "shapes" && <ShapesScreen />}
      {view === "animals" && <AnimalsScreen />}
      {view === "parental" && <ParentalScreen />}
      {timeLocked && view !== "parental" ? <TimeUpOverlay /> : null}
    </>
  );
}
