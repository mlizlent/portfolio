import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectViewer from "../components/ProjectViewer.jsx";
import projects from "../data/projects.js";

export default function Projects() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  return (
    <section className="section page-top">
      <div className="projects-hero">
        <div className="hero-kicker" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ width: 8, height: 24, background: 'linear-gradient(180deg, var(--accent), #8b7bbd)', borderRadius: 2 }} />
          <span style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>Featured Work</span>
        </div>
        <h1>Projects</h1>
        <p className="muted">
          Everything here has been built end to end, frontend, backend, and
          the infrastructure to ship it.
        </p>
        <div className="stat-row">
          <span className="stat"><b>{projects.length}</b> projects</span>
          <span className="divider" style={{ margin: '0 8px', color: 'var(--border)' }}>·</span>
          <span className="stat"><b>{projects.filter(p => p.live).length}</b> live</span>
        </div>
      </div>

      {selectedSlug ? (
        <div style={{ maxWidth: 720, margin: "32px auto 0 auto" }}>
          <ProjectViewer projects={projects} startSlug={selectedSlug} />
          <button
            onClick={() => setSelectedSlug(null)}
            style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--accent)', fontWeight: 500, cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
          >
            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Back to listing
          </button>
        </div>
      ) : (
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} onViewProject={() => setSelectedSlug(p.slug)} />
          ))}
        </div>
      )}
    </section>
  );
}
