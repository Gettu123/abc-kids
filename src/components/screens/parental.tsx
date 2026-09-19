import { useMemo, useState } from "react";
import { Scene, TopBar, ProgressBar } from "@/components/shell";
import { KidButton } from "@/components/ui/kid-button";
import { MEDAL_LABEL, MODULE_LABEL, t } from "@/lib/i18n";
import { useApp } from "@/lib/store";
import { formatMinutes } from "@/lib/utils";
import { MODULES } from "@/lib/types";
import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/types";

function newSum() {
  const a = 1 + Math.floor(Math.random() * 8);
  const b = 1 + Math.floor(Math.random() * 8);
  return { a, b, ans: a + b };
}

export function ParentalScreen() {
  const lang = useApp((s) => s.lang);
  const setLang = useApp((s) => s.setLang);
  const setScreen = useApp((s) => s.setScreen);
  const setScreenLimit = useApp((s) => s.setScreenLimit);
  const screenLimitMin = useApp((s) => s.screenLimitMin);
  const dayUsedSec = useApp((s) => s.dayUsedSec);
  const profiles = useApp((s) => s.profiles);
  const activeId = useApp((s) => s.activeId);
  const deleteProfile = useApp((s) => s.deleteProfile);
  const unlockTime = useApp((s) => s.unlockTime);
  const [gate, setGate] = useState(newSum);
  const [guess, setGuess] = useState("");
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(false);
  const profile = profiles.find((p) => p.id === activeId);
  const avg = useMemo(() => {
    if (!profile) return 0;
    return Math.round(MODULES.reduce((a, m) => a + profile.progress[m], 0) / MODULES.length);
  }, [profile]);

  const submit = () => {
    if (Number(guess) === gate.ans) {
      setOpen(true);
      setErr(false);
    } else {
      setErr(true);
      setGate(newSum());
      setGuess("");
    }
  };

  return (
    <Scene>
      <TopBar
        title={t(lang, "parentalTitle")}
        onBack={() => setScreen(activeId ? "home" : profiles.length ? "profiles" : "welcome")}
        showParent={false}
      />
      <div className="mx-auto max-w-lg px-4 pb-16">
        {!open ? (
          <div className="kid-card mt-4 p-5">
            <p className="text-center text-muted">{t(lang, "unlockHint")}</p>
            <p className="mt-3 text-center font-display text-3xl font-semibold">{t(lang, "unlockQ", { a: gate.a, b: gate.b })}</p>
            <input
              inputMode="numeric"
              value={guess}
              onChange={(e) => setGuess(e.target.value.replace(/\D/g, "").slice(0, 2))}
              className="mt-4 h-16 w-full rounded-[22px] bg-cream px-4 text-center font-display text-3xl font-semibold outline-none ring-4 ring-transparent focus:ring-primary"
              aria-label={t(lang, "unlockHint")}
            />
            {err ? <p className="mt-2 text-center text-coral">{t(lang, "wrongSum")}</p> : null}
            <KidButton className="mt-4 w-full" onClick={submit}>
              {t(lang, "continue")}
            </KidButton>
          </div>
        ) : (
          <div className="mt-3 grid gap-4">
            <section className="kid-card p-5">
              <h2 className="font-display text-xl font-semibold">{t(lang, "language")}</h2>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <KidButton tone={lang === "es-VE" ? "primary" : "cream"} onClick={() => setLang("es-VE" satisfies Lang)}>
                  ES
                </KidButton>
                <KidButton tone={lang === "pt" ? "primary" : "cream"} onClick={() => setLang("pt")}>
                  PT
                </KidButton>
              </div>
            </section>

            <section className="kid-card p-5">
              <h2 className="font-display text-xl font-semibold">{t(lang, "screenTime")}</h2>
              <p className="mt-1 text-sm text-muted">
                {t(lang, "dailyTime")}: {formatMinutes(dayUsedSec)}
              </p>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {[0, 10, 20, 30].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setScreenLimit(m)}
                    className={cn(
                      "min-h-12 rounded-[16px] font-display text-sm font-semibold",
                      screenLimitMin === m ? "bg-primary text-foam" : "bg-cream text-ink",
                    )}
                  >
                    {m === 0 ? t(lang, "unlimited") : t(lang, "minutes", { n: m })}
                  </button>
                ))}
              </div>
              <KidButton tone="accent" className="mt-3 w-full" onClick={unlockTime}>
                {t(lang, "resetToday")}
              </KidButton>
            </section>

            {profile ? (
              <section className="kid-card p-5">
                <h2 className="font-display text-xl font-semibold">{t(lang, "progressTitle", { name: profile.name })}</h2>
                <p className="mt-1 text-muted">
                  {t(lang, "average")} {avg}% · {t(lang, "playTime")} {formatMinutes(profile.playTimeSec)}
                </p>
                <ul className="mt-3 grid gap-2">
                  {MODULES.map((m) => (
                    <li key={m}>
                      <div className="mb-1 flex justify-between font-display text-sm">
                        <span>{t(lang, MODULE_LABEL[m])}</span>
                        <span className="tabular-nums">{profile.progress[m]}%</span>
                      </div>
                      <ProgressBar value={profile.progress[m]} />
                    </li>
                  ))}
                </ul>
                <h3 className="mt-4 font-display text-lg font-semibold">{t(lang, "medals")}</h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {profile.medals.length === 0 ? (
                    <li className="text-sm text-muted">—</li>
                  ) : (
                    profile.medals.map((m) => (
                      <li key={m} className="rounded-full bg-sun px-3 py-1 font-display text-sm font-semibold">
                        {t(lang, MEDAL_LABEL[m])}
                      </li>
                    ))
                  )}
                </ul>
                <h3 className="mt-4 font-display text-lg font-semibold">{t(lang, "sessions")}</h3>
                <ul className="mt-2 max-h-40 space-y-1 overflow-auto text-sm text-muted">
                  {profile.sessions.slice(0, 8).map((s) => (
                    <li key={s.at}>
                      {new Date(s.at).toLocaleString(lang === "pt" ? "pt-BR" : "es-VE")} · {t(lang, MODULE_LABEL[s.module])} ·{" "}
                      {formatMinutes(s.durationSec)}
                    </li>
                  ))}
                </ul>
                <KidButton tone="coral" className="mt-4 w-full" onClick={() => deleteProfile(profile.id)}>
                  {t(lang, "deleteProfile")}
                </KidButton>
              </section>
            ) : null}

            <KidButton tone="cream" onClick={() => setScreen(profiles.length ? "profiles" : "welcome")}>
              {t(lang, "switchChild")}
            </KidButton>
          </div>
        )}
      </div>
    </Scene>
  );
}
