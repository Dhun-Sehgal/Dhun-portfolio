import { Brain, Code, Database, Layers, Sigma, Terminal, Wrench, type LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";
import { skillAliases, skillGroups, type SkillIcon } from "../data/skills";

const icons: Record<SkillIcon, LucideIcon> = {
  code: Code,
  chart: Sigma,
  brain: Brain,
  layers: Layers,
  terminal: Terminal,
  database: Database,
  wrench: Wrench,
};

function projectsUsing(skill: string) {
  const names = [skill, ...(skillAliases[skill] ?? [])].map((s) => s.toLowerCase());
  return projects.filter((p) => p.tech.some((t) => names.includes(t.toLowerCase())));
}

export function Skills() {
  const [selected, setSelected] = useState<string | null>(null);
  const used = useMemo(() => (selected ? projectsUsing(selected) : []), [selected]);

  return (
    <section id="skills" className="section">
      <SectionHeading
        number="05"
        eyebrow="Technical skills"
        title={<>My toolbox</>}
        intro="Grouped by what I use them for. Tap a skill to see which projects on this page use it."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal
              key={g.title}
              delay={(i % 3) * 0.06}
              className={`frame p-6 ${i === skillGroups.length - 1 && skillGroups.length % 3 === 1 ? "sm:col-span-2 lg:col-span-3" : ""}`}
            >
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className={`grid size-10 place-items-center rounded-xl ${i % 2 ? "bg-pink-soft" : "bg-lav-soft"} text-plum`}>
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => {
                    const on = selected === s;
                    return (
                      <li key={s}>
                        <button
                          type="button"
                          aria-pressed={on}
                          onClick={() => setSelected(on ? null : s)}
                          className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${
                            on
                              ? "border-plum bg-plum text-on-plum"
                              : "border-line bg-surface text-ink/85 hover:-translate-y-0.5 hover:border-lav hover:bg-lav-soft"
                          }`}
                        >
                          {s}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div aria-live="polite" className="mt-6 min-h-14">
        {selected && (
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-lav-soft px-5 py-4 text-sm">
            <span className="font-semibold text-plum">{selected}</span>
            {used.length ? (
              <>
                <span className="text-muted">shows up in</span>
                {used.map((p) => (
                  <a key={p.slug} href={`#project/${p.slug}`} className="chip hover:border-lav hover:text-plum">
                    {p.title}
                  </a>
                ))}
              </>
            ) : (
              <span className="text-muted">isn’t tagged on any of the projects above.</span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
