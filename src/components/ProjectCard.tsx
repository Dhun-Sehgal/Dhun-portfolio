import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { profile } from "../data/profile";
import { GithubIcon } from "./BrandIcons";
import { ProjectCover } from "./ProjectCover";

const coverBg = ["bg-lav-soft", "bg-pink-soft"];

interface Props {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}

export function ProjectCard({ project, index, onOpen }: Props) {
  return (
    <article
      className="group frame flex h-full flex-col p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-lav hover:shadow-[0_24px_50px_-24px_rgba(118,85,143,0.55)]"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className={`relative overflow-hidden rounded-[1.4rem] ${coverBg[index % 2]} text-left`}
        aria-label={`View details for ${project.title}`}
      >
        <ProjectCover
          kind={project.cover}
          className="aspect-[2/1] w-full transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </button>

      <div className="relative flex flex-1 flex-col px-4 pt-5 pb-3">
        <p className="text-xs font-semibold tracking-widest text-plum uppercase">{project.tag}</p>
        <h3 className="mt-1.5 text-2xl leading-tight font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-muted">{project.blurb}</p>

        {project.metrics.length > 0 ? (
          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="font-display text-2xl font-bold text-plum tabular-nums">{m.value}</dd>
                <dd className="text-xs text-muted" aria-hidden>
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        ) : (
          project.features && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.features.map((f) => (
                <li key={f} className="rounded-full bg-pink-soft px-3 py-1 text-sm font-medium text-ink/80">
                  {f}
                </li>
              ))}
            </ul>
          )
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <button type="button" onClick={() => onOpen(project)} className="btn-primary !px-4 !py-2">
            View details
            <ArrowUpRight className="size-4" />
          </button>
          <a
            href={project.repo ?? profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !px-4 !py-2"
          >
            <GithubIcon className="size-4" />
            {project.repo ? "Code" : "GitHub"}
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2">
              <ExternalLink className="size-4" />
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
