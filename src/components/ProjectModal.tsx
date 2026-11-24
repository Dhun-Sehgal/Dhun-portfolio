import { AnimatePresence, motion } from "framer-motion";
import { Check, ExternalLink, ImageOff, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import { profile } from "../data/profile";
import { GithubIcon } from "./BrandIcons";
import { Sparkle } from "./Doodles";
import { ProjectCover } from "./ProjectCover";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // keep Tab focus inside the dialog
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-[#292431]/50 backdrop-blur-sm" onClick={onClose} aria-hidden />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] border-2 border-lav/60 bg-surface sm:rounded-[2rem]"
          >
            <div className="relative bg-lav-soft">
              <ProjectCover kind={project.cover} className="mx-auto aspect-[2/1] w-full max-w-xl" />
              <button ref={closeRef} type="button" onClick={onClose} className="icon-btn absolute top-4 right-4" aria-label="Close project details">
                <X className="size-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10">
              <span className="sticker">
                <Sparkle className="size-3" /> {project.tag}
              </span>
              <h3 id="project-title" className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">{project.description}</p>

              {project.metrics.length > 0 && (
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl bg-pink-soft p-4">
                      <p className="font-display text-2xl font-bold text-plum tabular-nums">{m.value}</p>
                      <p className="text-sm text-ink/75">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <h4 className="mt-8 text-lg font-semibold text-ink">What went into it</h4>
              <ul className="mt-3 space-y-2.5">
                {project.details.map((d) => (
                  <li key={d} className="flex gap-3 text-ink/85">
                    <Check className="mt-1 size-4 shrink-0 text-plum" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 text-lg font-semibold text-ink">Built with</h4>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 text-lg font-semibold text-ink">Screenshots</h4>
              {project.screenshots?.length ? (
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {project.screenshots.map((s) => (
                    <img key={s.src} src={s.src} alt={s.alt} loading="lazy" className="rounded-2xl border border-line" />
                  ))}
                </div>
              ) : (
                <div className="mt-3 flex items-center gap-3 rounded-2xl border-2 border-dashed border-line p-5 text-sm text-muted">
                  <ImageOff className="size-5 shrink-0 text-lav" />
                  Screenshot placeholder: images for this project haven&rsquo;t been added yet.
                </div>
              )}

              <div className="mt-9 flex flex-wrap gap-3">
                <a href={project.repo ?? profile.links.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <GithubIcon className="size-4" />
                  {project.repo ? "View repository" : "Repository coming soon · GitHub profile"}
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <ExternalLink className="size-4" />
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
