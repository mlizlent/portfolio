import { Download, Code2, Layers, Zap, Brain } from "lucide-react";
import ConversationSCurve from "../components/ConversationSCurve.jsx";

const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Go", "Bash"],
    icon: <Code2 size={16} />,
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Figma", "UI/UX Design"],
    icon: <Layers size={16} />,
  },
  {
    title: "Backend & Infra",
    items: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "Docker", "CI/CD"],
    icon: <Zap size={16} />,
  },
  {
    title: "ML / AI",
    items: ["TensorFlow", "LLM integration", "Inference"],
    icon: <Brain size={16} />,
  },
];

const CHUNKS = [
  {
    id: "introduction",
    title: "Meroline Lizlent — Full-Stack & ML/AI Engineer",
    body:
      "I'm Meroline Lizlent, a full-stack software developer based in Kenya, specializing in ML/AI engineering. I build software end to end — frontend, backend, UI/UX design, and the infrastructure that ships it — with a deep focus on machine learning and AI-powered products.",
    tags: ["Full-Stack", "ML/AI", "Kenya"],
  },
  {
    id: "educational-context",
    title: "Zone01 Kisumu — Software Engineering Track",
    body:
      "I'm currently working through the Software Engineering track at Zone01 Kisumu, a peer-to-peer programming school focused on peer learning and project-based curriculum, where collaboration replaces traditional instruction.",
    tags: ["Zone01", "Peer-to-Peer", "Kisumu"],
  },
  {
    id: "independent-building",
    title: "Independent Building Focus",
    body:
      "Alongside my studies I build independent projects aimed at solving real problems with clean, performant software infrastructure.",
    tags: ["Independent Projects", "Software Engineering"],
  },
  {
    id: "project-domains",
    title: "Project Domains",
    body:
      "I've built repository analyzers that surface codebase insights, data-driven result systems, ecommerce platforms connecting buyers with local vendors, and civic voting companion apps that help citizens make informed choices.",
    tags: ["Repo Analysis", "Data Systems", "Ecommerce", "Civic Tech"],
  },
  {
    id: "technical-writing",
    title: "Technical Writing & Portability",
    body:
      "I write technical deep-dives on dev.to covering Go and Python internals, and I containerize what I ship with Docker so everything runs identically across development, staging, and production.",
    tags: ["dev.to", "Go", "Python", "Docker"],
  },
  {
    id: "core-technologies",
    title: "Core Technologies",
    body:
      "My toolkit spans Languages (JavaScript, TypeScript, Python, Go, Bash), Frontend (React, Next.js, Tailwind CSS, Figma), Backend & Infra (Node.js, Express.js, FastAPI, PostgreSQL, Docker, CI/CD), and ML/AI (TensorFlow, LLM integration).",
    tags: ["JavaScript", "TypeScript", "Python", "Go", "React", "Next.js"],
  },
];

export default function About() {
  return (
    <section className="section page-top">
      <div className="about-header">
        <h1>About me</h1>
        <p className="about-lede">
          I'm Meroline Lizlent, a full-stack software developer based in
          Kenya, specializing in ML/AI engineering. I build software end to
          end — frontend, backend, UI/UX design, and the infrastructure that
          ships it — with a deep focus on machine learning and AI-powered
          products.
        </p>
      </div>

      <div className="about-body">
        <div className="about-text">
          <h2>Background</h2>
          <p>
            I'm currently based in Kenya, working through the Software
            Engineering track at <strong>Zone01 Kisumu</strong>, a peer-to-peer
            programming school focused on peer learning and project-based
            curriculum.
          </p>
          <p>
            Alongside my studies I build independent projects aimed at solving
            real problems with clean, performant software infrastructure.
          </p>
          <p>
            A lot of my work sits at the intersection of full-stack
            development and machine learning. I've built repository
            analyzers, data-driven systems, ecommerce platforms, and voters
            companion apps — always thinking about how the technology serves
            the people using it.
          </p>
          <p>
            I also write technical deep-dives on
            <strong>dev.to</strong>, mostly covering Go, Python, and
            containerization so everything runs the same way everywhere.
          </p>
        </div>

        <div className="about-skills">
          <h2>Technologies</h2>
          <div className="skill-grid">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="skill-group">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  {group.icon}
                  <span style={{ fontWeight: 600 }}>{group.title}</span>
                </div>
                <div className="tag-row">
                  {group.items.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ConversationSCurve chunks={CHUNKS} />

      <div className="about-footer">
        <div className="about-stats">
          <div className="stat">
            <span className="stat-value">
              {SKILL_GROUPS.reduce((acc, g) => acc + g.items.length, 0)}+
            </span>
            <span className="stat-label">technologies</span>
          </div>
          <div className="stat">
            <span className="stat-value">Kenya</span>
            <span className="stat-label">based</span>
          </div>
          <div className="stat">
            <span className="stat-value">Zone01</span>
            <span className="stat-label">Kisumu</span>
          </div>
        </div>
        <a
          href="/Mlizlent_CV%20.pdf"
          download
          className="btn btn-primary case-study-cta"
        >
          <Download size={15} /> Download CV
        </a>
      </div>
    </section>
  );
}
