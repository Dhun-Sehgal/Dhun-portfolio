import { BookOpen, GraduationCap } from "lucide-react";
import { Heart, PeekCat, Sparkle } from "../components/Doodles";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { education } from "../data/profile";

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeading number="01" eyebrow="About me" title={<>The person behind the notebooks</>} />

      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
        {/* speech-bubble card, like the "Hey there!" box on the illustrated resume */}
        <Reveal className="relative pt-14">
          <div className="absolute top-0 right-10 z-10 flex items-end gap-2">
            <span className="mb-10 -rotate-6 font-display text-lg font-bold text-plum italic">hi!?</span>
            <PeekCat className="w-28" />
          </div>
          <div className="relative rounded-[2rem] bg-pink-soft p-8 ring-2 ring-pink sm:p-10">
            {/* bubble tail */}
            <svg aria-hidden viewBox="0 0 40 30" className="absolute -bottom-[28px] left-14 w-10">
              <path d="M4 0 10 28 34 0Z" fill="var(--c-pink-soft)" />
              <path d="M4 1.5 10 28 34 1.5" fill="none" stroke="var(--c-pink)" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <h3 className="text-3xl font-bold tracking-tight text-plum uppercase sm:text-4xl">Hey there!</h3>
            <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-ink/85">
              <p>
                I&rsquo;m Dhun, and I study for a <strong className="text-ink">BS in Data Science and Applications at IIT Madras</strong>. Most of what I
                know about machine learning I picked up by building things: a model, an app around it, a Kaggle notebook I kept
                coming back to.
              </p>
              <p>
                I&rsquo;m most drawn to <strong className="text-ink">machine learning, deep learning and NLP</strong>, and to the question of why a model
                works, or why it&rsquo;s confidently wrong. I like experimenting: trying a from-scratch baseline, a recurrent model and a
                fine-tuned transformer on the same problem, and seeing what actually moves the score.
              </p>
              <p>
                I also like taking a model past the notebook and into something people can click on, like a Streamlit app or a
                Flask dashboard. Kaggle competitions, my internship at FlyRank and personal projects are where I learn the most.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid content-start gap-6 lg:pt-14">
          <Reveal delay={0.1} className="frame p-7">
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-lav-soft text-plum">
                  <GraduationCap className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-muted uppercase">Education</p>
                  <h3 className="text-xl font-semibold text-ink">{education.short}</h3>
                </div>
              </div>
              <p className="mt-4 font-medium text-ink">{education.degree}</p>
              <p className="text-sm text-muted">{education.school}</p>
              <p className="mt-1 text-sm font-medium text-plum">{education.period}</p>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="frame p-7">
            <div className="relative">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-muted uppercase">
                <BookOpen className="size-4 text-lav" /> Coursework
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <li key={c} className="rounded-full bg-lav-soft px-3 py-1 text-sm font-medium text-plum">
                    {c}
                  </li>
                ))}
              </ul>
              <Sparkle className="absolute -top-2 -right-1 size-5 text-pink" />
              <Heart className="absolute -right-1 -bottom-2 size-5 text-lav" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
