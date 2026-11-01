import Hero from "../components/Hero.jsx";
import AboutChunks from "../components/AboutChunks.jsx";
import SkillChips from "../components/SkillChips.jsx";
import { ABOUT_CHUNKS, SKILLS, LINKS } from "../data/about.js";

export default function About() {
  return (
    <section className="about-page" aria-labelledby="about-heading">
      <Hero />
      <AboutChunks chunks={ABOUT_CHUNKS} />
      <SkillChips skills={SKILLS} />
      <nav className="about-links" aria-label="Links">
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="about-link">
          GitHub
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="about-link">
          LinkedIn
        </a>
        <a href={LINKS.devto} target="_blank" rel="noopener noreferrer" className="about-link">
          dev.to
        </a>
      </nav>
    </section>
  );
}
