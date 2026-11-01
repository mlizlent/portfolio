import ProjectViewer from "../components/ProjectViewer.jsx";
import projects from "../data/projects.js";

export default function Projects() {
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

      <div style={{ marginTop: 32, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
        <ProjectViewer projects={projects} />
      </div>
    </section>
  );
}
