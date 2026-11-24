import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Avatar } from "../components/Avatar";
import { GithubIcon, KaggleIcon, LinkedinIcon } from "../components/BrandIcons";
import { CurlyArrow, Sparkle, Swirl, Underline } from "../components/Doodles";
import { profile } from "../data/profile";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const socials = [
  { href: profile.links.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: profile.links.kaggle, label: "Kaggle", Icon: KaggleIcon },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft colour washes */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 size-[520px] rounded-full bg-pink/35 blur-3xl dark:bg-pink/10" />
      <div aria-hidden className="pointer-events-none absolute top-40 -left-40 size-[420px] rounded-full bg-lav/25 blur-3xl dark:bg-lav/10" />

      <div className="section grid items-center gap-14 pt-32 pb-8 md:grid-cols-[1.15fr_1fr] md:pt-40 md:pb-12 lg:gap-20">
        <div className="relative">
          <motion.p {...rise(0)} className="sticker">
            <Sparkle className="size-3" /> Data Science @ IIT Madras
          </motion.p>

          <motion.h1 {...rise(0.08)} className="mt-6 text-5xl leading-[0.98] font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Hey, I&rsquo;m{" "}
            <span className="relative inline-block text-plum">
              Dhun!
              <Underline className="absolute -bottom-2 left-0 h-4 w-full text-pink" />
            </span>
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-7 font-display text-xl text-ink/90 italic sm:text-2xl">
            {profile.role} <span className="text-lav not-italic">|</span> {profile.aspiration}
          </motion.p>

          <motion.p {...rise(0.24)} className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            I build machine learning models and the small apps around them, from NLP classifiers and a fine-tuned
            transformer to Flask dashboards with background jobs. Most of what I know, I learned by building a project
            and then digging into why it worked.
          </motion.p>

          <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group">
              View my projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={profile.resume} download className="btn-ghost">
              <Download className="size-4" />
              Download resume
            </a>
          </motion.div>

          <motion.div {...rise(0.4)} className="mt-8 flex flex-wrap items-center gap-4">
            <ul className="flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`${label} (opens in a new tab)`}>
                    <Icon className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="size-4 text-lav" /> {profile.location}
            </span>
          </motion.div>

          <CurlyArrow className="absolute -right-4 bottom-24 hidden w-20 text-lav/80 lg:block" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative"
        >
          <Avatar />

          {/* floating fact chips */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            className="absolute top-[8%] -left-2 sm:-left-6"
          >
            <div className="animate-float rounded-2xl border border-line bg-surface px-4 py-2.5 shadow-lg shadow-plum/10 [--r:-3deg]">
              <p className="font-display text-xl font-bold text-plum">62%</p>
              <p className="text-xs text-muted">Precision@50 at FlyRank</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease }}
            className="absolute -right-1 bottom-[6%] sm:-right-4"
          >
            <div className="animate-float rounded-2xl border border-line bg-surface px-4 py-2.5 shadow-lg shadow-plum/10 [animation-delay:1.2s] [--r:3deg]">
              <p className="font-display text-xl font-bold text-plum">8+</p>
              <p className="text-xs text-muted">Kaggle competitions</p>
            </div>
          </motion.div>
          <Swirl className="absolute -bottom-6 left-[10%] w-16 text-pink" />
        </motion.div>
      </div>
    </section>
  );
}
