import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section page-top">
        <h1>Project not found</h1>
        <Link to="/projects" className="link-arrow">
          <ArrowLeft size={15} /> Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="section page-top">
      <Link to="/projects" className="link-arrow back-link">
        <ArrowLeft size={15} /> Back to projects
      </Link>

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
