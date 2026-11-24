# Dhun Sehgal · Portfolio

Personal portfolio for Dhun Sehgal, a Data Science student at IIT Madras.
Built with **React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lucide**, ready for **Vercel**.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run typecheck  # optional strict TypeScript check
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, choose **Add New → Project**, import the repo. Vercel detects Vite automatically (`vercel.json` is included).
3. After the first deploy, put your real URL in **three places** (they currently say `your-domain.vercel.app`):
   - `.env` → `VITE_SITE_URL` (or set it as an Environment Variable in Vercel), used for canonical + social-sharing tags
   - `public/robots.txt`
   - `public/sitemap.xml`
4. Redeploy. Unknown paths show the custom 404 page (`src/pages/NotFound.tsx`).

## Where to edit content

All content lives in `src/data/`, so you rarely need to touch components:

| File | What's in it |
| --- | --- |
| `profile.ts` | Name, email, social links, resume path, **avatar**, education, certifications |
| `experience.ts` | Internship timeline + metrics |
| `projects.ts` | Project cards: add a new object to add a project |
| `achievements.ts` | Kaggle metric cards (scores only, no ranks) |
| `skills.ts` | Skill groups + aliases used by the "tap a skill" feature |
| `navigation.ts` | Nav links |

## Placeholders to fill in

These are marked `PLACEHOLDER` in the code and shown as clearly labelled placeholders on the site:

- **Avatar**: drop an image in `public/` (e.g. `avatar.webp`, ~840×840) and set `avatar: "/avatar.webp"` in `profile.ts`.
- **Data Detective AI repo**: add `repo: "https://github.com/..."` in `projects.ts` (it currently links to your GitHub profile).
- **Project screenshots**: add `screenshots: [{ src: "/shots/mcq-1.webp", alt: "..." }]` to any project.
- **Live demos**: add `demo: "https://..."` only once a real deployment exists (e.g. the Streamlit MCQ app); the button appears automatically.
- **Outside tech**: fill `outsideTech` in `src/sections/Beyond.tsx`, or delete that card.
- **Resume**: replace `public/Dhun_Sehgal_Resume.pdf` to update the download.

## Structure

```
src/
  components/   Navbar, Avatar, ProjectCard, ProjectModal, ProjectCover, Doodles, BrandIcons, Reveal, ...
  sections/     Hero, About, Experience, Projects, Achievements, Skills, Beyond, Contact
  pages/        Home, NotFound (404)
  data/         all site content
  hooks/        useTheme, useActiveSection, useScrolled
  styles/       index.css (design tokens, light/dark palette, components)
```

## Design system

- Palette: lavender `#B69ACF`, deep purple `#76558F`, soft pink `#EAC5D5`, cream `#FFFDF7`, ink `#292431`.
  Secondary text is `#6C6672` (one step darker than `#77717D`) so it passes WCAG AA on the lavender/pink tints too.
- Type: Fraunces (headings) and DM Sans (body), loaded from Google Fonts.
- Signature details: double-outlined "framed" cards, sticker labels, hand-drawn doodles (sparkles, squiggles, a peeking cat), illustrated project covers.
- Dark mode follows the OS by default; the toggle remembers the visitor's choice.
- All motion respects `prefers-reduced-motion` (Framer's `MotionConfig reducedMotion="user"` plus a CSS fallback).
