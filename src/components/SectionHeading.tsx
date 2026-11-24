import type { ReactNode } from "react";
import { Sparkle, Squiggle } from "./Doodles";
import { Reveal } from "./Reveal";

interface Props {
  number: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ number, eyebrow, title, intro, align = "left" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="sticker">
        <Sparkle className="size-3" />
        <span>
          {number} · {eyebrow}
        </span>
      </span>
      <h2 className="mt-4 text-4xl leading-[1.05] font-semibold text-ink sm:text-5xl">{title}</h2>
      <Squiggle className={`mt-3 h-3 w-28 text-lav ${center ? "mx-auto" : ""}`} />
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
