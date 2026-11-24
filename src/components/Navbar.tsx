import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../data/navigation";
import { profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import { useTheme } from "../hooks/useTheme";
import { Sparkle } from "./Doodles";

// "top" (the hero) is observed too, so no nav item is highlighted while it is in view.
const ids = ["top", ...navItems.map((n) => n.id)];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const scrolled = useScrolled();
  const { theme, toggle } = useTheme();

  // Close the mobile menu on Escape or when resizing up to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border px-3 py-2 pl-5 backdrop-blur-md transition-all duration-300 ${
          scrolled || open
            ? "border-line bg-surface/85 shadow-[0_8px_30px_-12px_rgba(118,85,143,0.35)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-1.5 font-display text-xl font-bold text-ink" onClick={() => setOpen(false)}>
          dhun
          <Sparkle className="size-3.5 text-lav transition-transform duration-500 group-hover:rotate-90" />
          <span className="sr-only">Dhun Sehgal, back to top</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === item.id ? "text-plum" : "text-muted hover:text-ink"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-lav-soft"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="icon-btn"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <ThemeIcon className="size-[18px]" />
          </button>
          <a href={profile.resume} download className="btn-primary hidden !px-4 !py-2 sm:inline-flex">
            <Download className="size-4" />
            Resume
          </a>
          <button
            type="button"
            className="icon-btn md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="frame mx-auto mt-2 max-w-6xl p-3 md:hidden"
          >
            <ul className="relative grid gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 font-medium ${
                      active === item.id ? "bg-lav-soft text-plum" : "text-ink hover:bg-lav-soft"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-1 sm:hidden">
                <a href={profile.resume} download className="btn-primary w-full" onClick={() => setOpen(false)}>
                  <Download className="size-4" />
                  Download resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
