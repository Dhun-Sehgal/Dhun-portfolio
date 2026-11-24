import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { GithubIcon, KaggleIcon, LinkedinIcon } from "../components/BrandIcons";
import { CurlyArrow, Heart, Sparkle } from "../components/Doodles";
import { Reveal } from "../components/Reveal";
import { profile } from "../data/profile";

const links = [
  { href: profile.links.linkedin, label: "LinkedIn", handle: "dhun-sehgal", Icon: LinkedinIcon },
  { href: profile.links.github, label: "GitHub", handle: "Dhun-Sehgal", Icon: GithubIcon },
  { href: profile.links.kaggle, label: "Kaggle", handle: "My Kaggle work", Icon: KaggleIcon },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Fallback for browsers without clipboard permission
      const t = document.createElement("textarea");
      t.value = profile.email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // No backend: the form composes an email in the visitor's own mail app.
  const send = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(name ? `Hello from ${name}` : "Hello from your portfolio");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <Reveal className="relative overflow-hidden rounded-[2.25rem] border-2 border-lav/60 bg-surface">
        {/* banner header, echoing the resume's purple title bar */}
        <div className="relative bg-banner px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <Sparkle className="animate-twinkle absolute top-6 left-[8%] size-8" />
          <Sparkle className="animate-twinkle absolute top-10 right-[10%] size-12 [animation-delay:.8s]" />
          <Sparkle className="animate-twinkle absolute bottom-6 left-[22%] size-5 [animation-delay:1.6s]" />
          <p className="text-sm font-semibold tracking-[0.2em] uppercase opacity-90">07 · Contact</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-6xl">Let&rsquo;s talk!</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-95">
            Internships, ML projects, a Kaggle team-up, or just a question about something on this page. My inbox is open.
          </p>
        </div>

        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:p-12">
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">Email me at</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="font-display text-2xl font-semibold break-all text-plum hover:underline sm:text-3xl">
                {profile.email}
              </a>
              <button type="button" onClick={copy} className="icon-btn relative" aria-label="Copy email address">
                {copied ? <Check className="size-4 text-plum" /> : <Copy className="size-4" />}
              </button>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    role="status"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-full bg-pink-soft px-3 py-1 text-xs font-semibold text-plum"
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <a href={`mailto:${profile.email}`} className="btn-primary mt-6">
              <Mail className="size-4" /> Say hello
            </a>

            <ul className="mt-10 space-y-3">
              {links.map(({ href, label, handle, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-line p-3 pr-5 transition-colors hover:border-lav hover:bg-lav-soft"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-lav-soft text-plum group-hover:bg-surface">
                      <Icon className="size-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold text-ink">{label}</span>
                      <span className="text-sm text-muted">{handle}</span>
                    </span>
                    <span aria-hidden className="text-plum transition-transform group-hover:translate-x-1">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={send} className="relative rounded-[1.75rem] bg-pink-soft p-6 sm:p-8">
            <CurlyArrow className="absolute -top-10 -left-6 hidden w-16 -scale-x-100 text-lav lg:block" />
            <h3 className="text-2xl font-semibold text-ink">Write a quick note</h3>
            <p className="mt-1 text-sm text-muted">This opens your email app with the message ready to send.</p>
            <label className="mt-6 block text-sm font-medium text-ink" htmlFor="c-name">
              Your name
            </label>
            <input
              id="c-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="mt-1.5 w-full rounded-xl border-2 border-line bg-surface px-4 py-3 text-ink outline-none placeholder:text-muted/70 focus:border-lav"
              placeholder="Ada Lovelace"
            />
            <label className="mt-4 block text-sm font-medium text-ink" htmlFor="c-msg">
              Message
            </label>
            <textarea
              id="c-msg"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1.5 w-full resize-y rounded-xl border-2 border-line bg-surface px-4 py-3 text-ink outline-none placeholder:text-muted/70 focus:border-lav"
              placeholder="Hi Dhun, I saw your Smart MCQ Solver and…"
            />
            <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
              <Send className="size-4" /> Open in my email app
            </button>
            <Heart className="animate-wiggle absolute right-6 bottom-6 size-7 text-plum/60" />
          </form>
        </div>
      </Reveal>
    </section>
  );
}
