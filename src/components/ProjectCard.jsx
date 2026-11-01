import { ArrowUpRight, ExternalLink, Code, Palette, Layout, Globe, Shield, ShoppingCart, Users, BarChart3 } from "lucide-react";

const ICON_MAP = {
  "UI/UX": Palette,
  Figma: Palette,
  Design: Palette,
  Nextjs: Code,
  "Next.js": Code,
  React: Code,
  "Node.js": Code,
  Express: Code,
  Python: Code,
  SEO: BarChart3,
  QA: Shield,
  Ecommerce: ShoppingCart,
  Web: Globe,
  Fullstack: Layout,
  "Full-Stack": Layout,
  Django: Code,
  Flask: Code,
  Tailwind: Palette,
  PostgreSQL: Globe,
  SQLite: Globe,
  MongoDB: Globe,
  Go: Code,
  Svelte: Code,
  Docker: Code,
  GitHub: Code,
  LLM: Users,
  AI: Users,
  "AI/ML": Users,
  Machine: Users,
};

function tagIcon(tag) {
  const Comp = ICON_MAP[tag];
  return Comp ? <Comp size={12} /> : null;
}

export default function ProjectCard({ project, onViewProject }) {
  const primaryTag = project.tags[0] || "";
  const Icon = tagIcon(primaryTag);

  return (
    <button
      onClick={() => onViewProject(project.slug)}
      className="card card-text"
      style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%', display: 'block' }}
    >
      <div className="card-head" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        {Icon && <span style={{ color: 'var(--accent)' }}>{Icon}</span>}
        <h3 style={{ margin: 0 }}>{project.name}</h3>
      </div>
      <p className="card-desc">{project.tagline}</p>
      <div className="tag-row">
        {project.tags.map((t) => (
          <span className="tag" key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            {tagIcon(t)}
            {t}
          </span>
        ))}
      </div>
      <div className="card-footer">
        <span className="card-cta">
          Read case study <ArrowUpRight size={13} />
        </span>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-link">
            Live site <ExternalLink size={13} />
          </a>
        )}
      </div>
    </button>
  );
}
