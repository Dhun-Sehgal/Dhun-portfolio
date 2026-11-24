import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";

export function BackToTop() {
  const show = useScrolled(700);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          className="fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full bg-plum text-on-plum shadow-lg shadow-plum/30 transition-transform hover:-translate-y-1 sm:right-8 sm:bottom-8"
        >
          <ArrowUp className="size-5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
