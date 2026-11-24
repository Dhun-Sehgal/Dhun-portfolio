import { Award, Trophy } from "lucide-react";
import { KaggleIcon } from "../components/BrandIcons";
import { Sparkle, Star } from "../components/Doodles";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { achievements } from "../data/achievements";
import { certifications, profile } from "../data/profile";

const accent = {
  plum: "bg-plum text-on-plum",
  pink: "bg-pink-soft text-ink ring-2 ring-pink",
  lav: "bg-lav-soft text-ink ring-2 ring-lav/50",
} as const;

export function Achievements() {
  return (
    <section id="kaggle" className="section">
      <SectionHeading
        number="04"
        eyebrow="Kaggle & achievements"
        title={<>Scores I&rsquo;m proud of</>}
        intro="Results from Kaggle competitions, where a hidden test set keeps everyone honest. Public and private scores shown side by side where I have both."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => {
          const dark = a.accent === "plum";
          return (
            <Reveal key={a.title} delay={i * 0.07} className={`relative overflow-hidden rounded-[1.75rem] p-6 ${accent[a.accent]} ${i === 0 ? "sm:col-span-2 lg:row-span-2 lg:p-8" : ""} ${i === achievements.length - 1 ? "sm:col-span-2" : ""}`}>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold tracking-widest uppercase ${dark ? "opacity-80" : "text-muted"}`}>{a.context}</span>
                <KaggleIcon className={`size-4 ${dark ? "opacity-80" : "text-plum"}`} />
              </div>
              <p className={`mt-6 font-display font-bold tabular-nums ${i === 0 ? "text-6xl sm:text-7xl" : "text-4xl"} ${dark ? "" : "text-plum"}`}>{a.value}</p>
              <p className={`mt-1 text-sm font-medium ${dark ? "opacity-85" : "text-ink/75"}`}>{a.valueLabel}</p>
              {a.secondary && (
                <p className="mt-4 inline-flex items-baseline gap-2 rounded-full bg-surface/15 px-3 py-1 text-sm ring-1 ring-current/25">
                  <span className="font-display text-lg font-bold">{a.secondary.value}</span>
                  <span className="opacity-85">{a.secondary.label}</span>
                </p>
              )}
              <h3 className={`mt-6 font-semibold ${i === 0 ? "font-display text-2xl" : "font-sans text-base"}`}>{a.title}</h3>
              {i === 0 && (
                <>
                  <Sparkle className="animate-twinkle absolute top-16 right-8 size-10 opacity-60" />
                  <Star className="animate-float absolute right-20 bottom-10 size-6 opacity-40" />
                  {/* doodled ECG trace */}
                  <svg aria-hidden viewBox="0 0 300 60" className="mt-8 w-full opacity-70">
                    <path
                      d="M0 34h60l8-16 10 34 10-50 10 40 8-8h56l8-16 10 34 10-50 10 40 8-8h82"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-draw"
                    />
                  </svg>
                </>
              )}
            </Reveal>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-[1fr_auto]">
        <Reveal className="frame p-6">
          <div className="relative">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-muted uppercase">
              <Award className="size-4 text-lav" /> Certifications
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {certifications.map((c) => (
                <li key={c.title} className="rounded-2xl bg-bg/70 p-4 ring-1 ring-line">
                  <p className="font-semibold text-ink">{c.title}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex">
          <a
            href={profile.links.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-banner p-6 text-white transition-transform hover:-rotate-1 md:w-60"
          >
            <Trophy className="size-7" />
            <span>
              <span className="block font-display text-xl font-semibold">My Kaggle work</span>
              <span className="text-sm opacity-90 group-hover:underline">Open on Kaggle ↗</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
