import Typewriter from "../components/Typewriter.jsx";
import HelpCards from "../components/HelpCards.jsx";
import SkillsGrid from "../components/SkillsGrid.jsx";
import WorkProcess from "../components/WorkProcess.jsx";
import CurrentFocus from "../components/CurrentFocus.jsx";

export default function Home({ onNavigate }) {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <span className="badge">Available for opportunities</span>
          <h1>Meroline Lizlent Wasonga, <span style={{ color: "var(--accent)" }}>full-stack developer specializing in ML/AI engineering.</span></h1>
          <p className="hero-lede"><Typewriter /></p>
          <p className="hero-lede">I turn ideas into working, AI-powered products. I design and build them end to end, from the interface people use to the backend and the Docker setup that ships them.</p>
          <div className="hero-actions" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate("projects")} className="btn btn-primary">View my work</button>
            <a href="/cv.pdf" className="btn btn-ghost">Download CV</a>
          </div>
        </div>
      </section>

      <HelpCards />
      <WorkProcess />
      <CurrentFocus />

      <section className="section cta-section">
        <h2>Let's build something great together</h2>
        <p className="muted">I'm open to freelance projects, collaborations, and full-time opportunities in software and ML/AI engineering.</p>
        <button onClick={() => onNavigate("contact")} className="btn btn-primary">Start a conversation</button>
      </section>
    </div>
  );
}
