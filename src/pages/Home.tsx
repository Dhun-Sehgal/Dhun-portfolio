import { BackToTop } from "../components/BackToTop";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { About } from "../sections/About";
import { Achievements } from "../sections/Achievements";
import { Beyond } from "../sections/Beyond";
import { Contact } from "../sections/Contact";
import { Experience } from "../sections/Experience";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";

export function Home() {
  return (
    <>
      <a href="#main" className="sr-only z-[70] rounded-full bg-plum px-4 py-2 text-on-plum focus:not-sr-only focus:fixed focus:top-4 focus:left-4">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Beyond />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
