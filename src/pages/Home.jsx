import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import projects from "../data/projects";

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
];

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <span className="badge">Available for opportunities</span>
          <h1>
            Full-stack developer specializing in <em>ML/AI engineering.</em>
          </h1>
          <p className="hero-lede">
            I'm Meroline Lizlent. I build end-to-end software across
            frontend, backend, UI/UX design, and Docker — with a deep focus
            on machine learning and AI-powered products.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View my work
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <h2>Featured work</h2>
            <p className="muted">A selection of projects I've built across the stack.</p>
          </div>
          <Link to="/projects" className="link-arrow">
            See all projects <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid">
          {featured.map((p) => (
            <Link to={`/projects/${p.slug}`} key={p.slug} className="card">
              <h3>{p.name}</h3>
              <p>{p.tagline}</p>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="card-cta">
                Read case study <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Skills &amp; tools</h2>
        <p className="muted">
          I work across the full stack and bring ML/AI expertise to every
          layer of the product — from interface to infrastructure.
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
        <Link to="/contact" className="btn btn-primary">
          Start a conversation
        </Link>
      </section>
    </>
  );
}
