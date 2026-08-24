import { ArrowUpRight } from "lucide-react";
import projects from "../data/projects";

export default function Projects({ onViewProject }) {
  return (
    <section className="section page-top">
      <h1>Projects</h1>
      <p className="muted">
        Everything here has been built end to end, frontend, backend, and
        the infrastructure to ship it.
      </p>

      <div className="grid">
        {projects.map((p) => (
          <button onClick={() => onViewProject(p.slug)} key={p.slug} className="card" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}>
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
          </button>
        ))}
      </div>
    </section>
  );
}
