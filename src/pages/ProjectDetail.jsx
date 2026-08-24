import { ArrowLeft, ArrowUpRight } from "lucide-react";
import projects from "../data/projects";

export default function ProjectDetail({ slug, onBack }) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section page-top">
        <h1>Project not found</h1>
        <button onClick={onBack} className="link-arrow" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
          <ArrowLeft size={15} /> Back to projects
        </button>
      </section>
    );
  }

  return (
    <section className="section page-top">
      <button onClick={onBack} className="link-arrow back-link" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
        <ArrowLeft size={15} /> Back to projects
      </button>

      <h1>{project.name}</h1>
      <p className="muted lede">{project.tagline}</p>

      <div className="tag-row">
        {project.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary case-study-cta"
        >
          View live project <ArrowUpRight size={15} />
        </a>
      )}

      <div className="prose">
        {project.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}
