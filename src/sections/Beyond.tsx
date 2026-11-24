import { BookOpen, PenLine, Telescope } from "lucide-react";
import { Heart, Sparkle, Star, Swirl } from "../components/Doodles";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { education } from "../data/profile";

/**
 * "Beyond the code": kept deliberately small.
 * Curiosities are drawn from the work on this page. The "outside tech" card is a
 * PLACEHOLDER: replace `outsideTech` with your own interests, or delete the card.
 */
const curiosities = [
  "Why a model that looks great in validation falls apart on data it hasn’t seen (client-level splits taught me a lot).",
  "How transformers like RoBERTa pick up meaning a bag of words can’t.",
  "Turning a notebook into something people can actually click on.",
];

const outsideTech: string[] = []; // PLACEHOLDER: e.g. ["…", "…"]

function DoodleWall() {
  // tiny ML-flavoured doodles, the "personal illustrations" corner
  return (
    <div className="grid grid-cols-3 gap-3" aria-hidden>
      {/* neural net */}
      <svg viewBox="0 0 80 60" className="rounded-2xl bg-lav-soft p-2 text-plum">
        {[12, 30, 48].map((y) => <circle key={`a${y}`} cx="12" cy={y} r="5" fill="var(--c-surface)" stroke="currentColor" strokeWidth="2" />)}
        {[20, 40].map((y) => <circle key={`b${y}`} cx="40" cy={y} r="5" fill="var(--c-pink)" stroke="currentColor" strokeWidth="2" />)}
        <circle cx="68" cy="30" r="5" fill="var(--c-lav)" stroke="currentColor" strokeWidth="2" />
        {[12, 30, 48].flatMap((y) => [20, 40].map((y2) => <path key={`${y}${y2}`} d={`M17 ${y}L35 ${y2}`} stroke="currentColor" strokeWidth="1" opacity=".5" />))}
        <path d="M45 20L63 30M45 40L63 30" stroke="currentColor" strokeWidth="1" opacity=".5" />
      </svg>
      {/* a cute confusion matrix */}
      <svg viewBox="0 0 80 60" className="rounded-2xl bg-pink-soft p-2 text-plum">
        {[0, 1].map((r) => [0, 1].map((c) => (
          <rect key={`${r}${c}`} x={18 + c * 22} y={8 + r * 22} width="20" height="20" rx="5" fill={r === c ? "var(--c-plum)" : "var(--c-surface)"} stroke="currentColor" strokeWidth="1.5" />
        )))}
        <path d="M26 16c-1.5-2.2-5-.6-3 2l3 2.6 3-2.6c2-2.6-1.5-4.2-3-2Z" fill="var(--c-pink)" />
      </svg>
      {/* loss curve going down */}
      <svg viewBox="0 0 80 60" className="rounded-2xl bg-lav-soft p-2 text-plum">
        <path d="M10 8v42h62" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 14c8 20 16 26 28 28s18 2 26 2" fill="none" stroke="var(--c-plum)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="68" cy="44" r="3" fill="var(--c-pink)" />
      </svg>
    </div>
  );
}

export function Beyond() {
  return (
    <section id="beyond" className="section">
      <SectionHeading number="06" eyebrow="Beyond the code" title={<>A little more of me</>} />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Reveal className="frame p-6">
          <div className="relative">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-muted uppercase">
              <BookOpen className="size-4 text-lav" /> What I&rsquo;m studying
            </p>
            <ul className="mt-4 space-y-2">
              {education.coursework.map((c) => (
                <li key={c} className="flex items-center gap-2 text-ink/85">
                  <Sparkle className="size-3 shrink-0 text-lav" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="frame p-6">
          <div className="relative">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-muted uppercase">
              <Telescope className="size-4 text-lav" /> Things I&rsquo;m curious about
            </p>
            <ul className="mt-4 space-y-3">
              {curiosities.map((c) => (
                <li key={c} className="flex gap-2 text-ink/85">
                  <Heart className="mt-1 size-4 shrink-0 text-pink" /> <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="grid gap-5 md:col-span-2 lg:col-span-1">
          <div className="relative rounded-[1.75rem] border-2 border-dashed border-lav/70 p-6">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-muted uppercase">
              <PenLine className="size-4 text-lav" /> Outside tech
            </p>
            {outsideTech.length ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {outsideTech.map((o) => (
                  <li key={o} className="rounded-full bg-pink-soft px-3 py-1 text-sm">{o}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-muted">
                <span className="font-semibold text-plum">Placeholder</span>: hobbies and interests outside tech will go here.
              </p>
            )}
            <Swirl className="absolute -top-4 right-6 w-12 text-pink" />
          </div>
          <div className="relative">
            <DoodleWall />
            <Star className="animate-twinkle absolute -top-2 -right-2 size-5 text-pink" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
