import Hero from "../components/Hero.jsx";
import AboutChunks from "../components/AboutChunks.jsx";

export default function About() {
  return (
    <section className="about-page" aria-labelledby="about-heading">
      <Hero />
      <AboutChunks />
    </section>
  );
}
