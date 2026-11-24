import { motion } from "framer-motion";
import { Briefcase, Check, GraduationCap } from "lucide-react";
import { Sparkle } from "../components/Doodles";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { experience } from "../data/experience";
import { education } from "../data/profile";

function CompareBars({ label, model, baseline }: { label: string; model: number; baseline: number }) {
  const rows = [
    { name: "My model", value: model, cls: "bg-plum" },
    { name: "Baseline", value: baseline, cls: "bg-line" },
  ];
  return (
    <figure className="self-start rounded-2xl border border-line bg-bg/60 p-5">
      <figcaption className="text-xs font-semibold tracking-widest text-muted uppercase">{label}</figcaption>
      <div className="mt-4 space-y-3">
        {rows.map((r) => (
          <div key={r.name} className="grid grid-cols-[5.5rem_1fr_3rem] items-center gap-3 text-sm">
            <span className="text-muted">{r.name}</span>
            <div className="h-3 overflow-hidden rounded-full bg-lav-soft">
              <motion.div
                className={`h-full rounded-full ${r.cls}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${r.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              />
            </div>
            <span className="text-right font-semibold text-ink tabular-nums">{r.value}%</span>
          </div>
        ))}
      </div>
    </figure>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        number="02"
        eyebrow="Experience"
        title={<>Where I&rsquo;ve put models to work</>}
        intro="One internship so far, and the degree that keeps it all going."
      />

      <ol className="relative ml-3 border-l-2 border-dashed border-lav/60 sm:ml-5">
        {experience.map((job) => (
          <li key={job.org} className="relative pb-14 pl-8 sm:pl-12">
            <span className="absolute top-1 -left-[19px] grid size-9 place-items-center rounded-full border-2 border-lav bg-surface text-plum">
              <Briefcase className="size-4" />
            </span>

            <Reveal className="frame p-6 sm:p-9">
              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="sticker">{job.kind}</span>
                    <h3 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                      {job.role} <span className="text-plum">· {job.org}</span>
                    </h3>
                  </div>
                  <p className="rounded-full bg-pink-soft px-3 py-1 text-sm font-medium text-ink/80">{job.period}</p>
                </div>
                <p className="mt-3 max-w-2xl text-muted">{job.summary}</p>

                <ul className="mt-7 grid gap-4 sm:grid-cols-3">
                  {job.metrics.map((m, i) => (
                    <Reveal as="li" key={m.label} delay={0.08 * i} className="rounded-2xl bg-lav-soft p-5">
                      <p className="font-display text-3xl font-bold text-plum sm:text-4xl">{m.value}</p>
                      <p className="mt-1 text-sm font-semibold text-ink">{m.label}</p>
                      {m.note && <p className="text-xs text-muted">{m.note}</p>}
                    </Reveal>
                  ))}
                </ul>

                <div className="mt-7 grid gap-7 lg:grid-cols-[1.4fr_1fr]">
                  <ul className="space-y-3">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-ink/85">
                        <Check className="mt-1 size-4 shrink-0 text-plum" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  {job.comparison && <CompareBars {...job.comparison} />}
                </div>
              </div>
            </Reveal>
          </li>
        ))}

        <li className="relative pl-8 sm:pl-12">
          <span className="absolute top-1 -left-[19px] grid size-9 place-items-center rounded-full border-2 border-lav bg-surface text-plum">
            <GraduationCap className="size-4" />
          </span>
          <Reveal className="rounded-[1.75rem] border-2 border-dashed border-lav/60 bg-surface/60 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="sticker">Education</span>
                <h3 className="mt-3 text-2xl font-semibold text-ink">{education.degree}</h3>
                <p className="text-muted">{education.school}</p>
              </div>
              <p className="rounded-full bg-pink-soft px-3 py-1 text-sm font-medium text-ink/80">{education.period}</p>
            </div>
            <Sparkle className="mt-4 size-4 text-lav" />
          </Reveal>
        </li>
      </ol>
    </section>
  );
}
