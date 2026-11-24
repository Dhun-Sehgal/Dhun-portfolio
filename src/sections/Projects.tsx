import { useCallback, useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { projects, type Project } from "../data/projects";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => {
    setSelected(null);
    if (window.location.hash.startsWith("#project/")) history.replaceState(null, "", "#projects");
  }, []);

  const open = useCallback((p: Project) => {
    setSelected(p);
    history.replaceState(null, "", `#project/${p.slug}`);
  }, []);

  // Deep links: /#project/smart-mcq-solver opens that project's details
  // (on load, and when a link elsewhere on the page changes the hash).
  useEffect(() => {
    const fromHash = () => {
      const m = window.location.hash.match(/^#project\/(.+)$/);
      const p = m && projects.find((x) => x.slug === m[1]);
      if (p) {
        document.getElementById("projects")?.scrollIntoView();
        setSelected(p);
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  return (
    <section id="projects" className="section">
      <SectionHeading
        number="03"
        eyebrow="Featured projects"
        title={<>Things I&rsquo;ve built</>}
        intro="Two Kaggle-scored ML projects up front, then the hackathon tool and full-stack apps. Open any card for the details."
      />

      <div className="grid gap-7 lg:grid-cols-6">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.08} className={p.featured ? "lg:col-span-3" : "lg:col-span-2"}>
            <ProjectCard project={p} index={i} onOpen={open} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selected} onClose={close} />
    </section>
  );
}
