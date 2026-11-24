import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { PeekCat, Sparkle, Star } from "../components/Doodles";

export function NotFound() {
  useEffect(() => {
    document.title = "Page not found · Dhun Sehgal";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden px-6 py-20 text-center">
      <div aria-hidden className="absolute -top-24 left-1/2 size-[480px] -translate-x-1/2 rounded-full bg-pink/30 blur-3xl dark:bg-pink/10" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative max-w-lg">
        <Sparkle className="animate-twinkle absolute -top-6 -left-10 size-8 text-lav" />
        <Star className="animate-float absolute top-10 -right-8 size-6 text-pink" />
        <p className="font-display text-[7rem] leading-none font-bold text-plum sm:text-[9rem]">
          4<span className="text-lav">0</span>4
        </p>
        <PeekCat className="mx-auto -mt-2 w-36" />
        <h1 className="mt-6 text-3xl font-semibold text-ink">This page wandered off</h1>
        <p className="mt-3 text-muted">
          Even the best models misclassify sometimes. The page you&rsquo;re looking for doesn&rsquo;t exist, or it moved.
        </p>
        <a href="/" className="btn-primary mt-8">
          <ArrowLeft className="size-4" /> Back to the homepage
        </a>
      </motion.div>
    </main>
  );
}
