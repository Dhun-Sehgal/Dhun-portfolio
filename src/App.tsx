import { MotionConfig } from "framer-motion";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

/**
 * One-page site, so routing is just "home or 404".
 * vercel.json rewrites unknown paths to index.html, and this decides what to show.
 */
const isHome = ["/", "/index.html"].includes(window.location.pathname.replace(/\/+$/, "") || "/");

export default function App() {
  return (
    // "user" respects the OS-level reduced-motion setting for every animation.
    <MotionConfig reducedMotion="user">{isHome ? <Home /> : <NotFound />}</MotionConfig>
  );
}
