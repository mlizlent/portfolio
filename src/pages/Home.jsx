const SKILLS = [
  "Full-Stack Development",
  "Frontend Engineering",
  "Backend Engineering",
  "UI/UX Design",
  "Machine Learning",
  "AI Engineering",
  "Docker",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Tailwind CSS",
  "Figma",
  "JavaScript",
  "Go",
  "Next.js",
  "Svelte",
  "CLI",
  "CI/CD",
  "Pipeline Automation",
  "Linux",
];

export default function Home({ onNavigate }) {

  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <span className="badge">Available for opportunities</span>
          <h1>
            Meroline Lizlent, full-stack developer specializing in <em>ML/AI engineering.</em>
          </h1>
          <p className="hero-lede">
            I'm Meroline Lizlent. I build end-to-end software across
            frontend, backend, UI/UX design, and Docker, with a deep focus
            on machine learning and AI-powered products.
          </p>
          <div className="hero-actions" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate("projects")} className="btn btn-primary">
              View my work
            </button>
            <button onClick={() => onNavigate("contact")} className="btn btn-ghost">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Skills &amp; tools</h2>
        <p className="muted">
          I work across the full stack and bring ML/AI expertise to every
          layer of the product, from interface to infrastructure.
        </p>
        <div className="skill-cloud">
          {SKILLS.map((s) => (
            <span className="skill-chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <h2>Let's build something great together</h2>
        <p className="muted">
          I'm open to freelance projects, collaborations, and full-time
          opportunities in software and ML/AI engineering.
        </p>
          <button onClick={() => onNavigate("contact")} className="btn btn-primary">
            Start a conversation
          </button>
      </section>
    </>
  );
}
