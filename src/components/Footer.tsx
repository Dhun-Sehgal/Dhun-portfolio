import { profile } from "../data/profile";
import { GithubIcon, KaggleIcon, LinkedinIcon } from "./BrandIcons";
import { Heart } from "./Doodles";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-dashed border-line px-5 py-10 text-sm text-muted sm:flex-row sm:px-8">
      <p className="flex items-center gap-1.5">
        © {new Date().getFullYear()} {profile.name} · made with <Heart className="size-4 text-pink" /> and a lot of lavender
      </p>
      <ul className="flex gap-2">
        {[
          { href: profile.links.github, label: "GitHub", Icon: GithubIcon },
          { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
          { href: profile.links.kaggle, label: "Kaggle", Icon: KaggleIcon },
        ].map(({ href, label, Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-btn !size-9">
              <Icon className="size-4" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
