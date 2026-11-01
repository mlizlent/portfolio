import { Download, Code2, Layers, Zap, Brain } from "lucide-react";
import SGrowthGrid from "../components/SGrowthGrid.jsx";

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
    items: ["TensorFlow", "LLM integration", "ML pipelines", "Inference"],
    icon: <Brain size={16} />,
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
            Alongside my studies I build independent projects, many of which
            center on <strong>Bitcoin and Lightning Network</strong> systems
            aimed at solving real problems in African contexts.
          </p>
          <p>
            A lot of my work sits at the intersection of full-stack
            development and machine learning. I've built repository
            analyzers, ML inference pipelines, ecommerce platforms, and
            voters companion apps — always thinking about how the technology
            serves the people using it.
          </p>
          <p>
            I also write technical deep-dives on
            <strong>dev.to</strong>, mostly covering Bitcoin protocol
            internals, Go, and Python, and I containerize what I ship with
            Docker so it runs the same way everywhere.
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

      <SGrowthGrid
        milestones={[
          {
            id: "zero-knowledge",
            title: "Zero Knowledge Developer",
            description:
              "Started with no formal coding background — curious, self-taught, and eager to learn how software works.",
            tags: ["Beginner", "Self-taught"],
          },
          {
            id: "first-lines-of-code",
            title: "First Lines of Code",
            description:
              "Wrote my first scripts in Python and Bash, automating small tasks and discovering the joy of building.",
            tags: ["Python", "Bash"],
          },
          {
            id: "zone01-enrollment",
            title: "Zone01 Kisumu Enrollment",
            description:
              "Joined Zone01 Kisumu, a peer-to-peer programming school, where I learned through peer collaboration and real projects.",
            tags: ["Zone01", "Peer Learning"],
          },
          {
            id: "bitcoin-lightning",
            title: "Bitcoin & Lightning Network",
            description:
              "Built independent projects centered on Bitcoin and Lightning Network systems for real problems in African contexts.",
            tags: ["Bitcoin", "Lightning Network"],
          },
          {
            id: "full-stack-ml",
            title: "Full-Stack + ML/AI",
            description:
              "Combined full-stack development with machine learning — repository analyzers, inference pipelines, ecommerce platforms, and voters companion apps.",
            tags: ["Full-Stack", "ML/AI"],
          },
          {
            id: "current",
            title: "Today",
            description:
              "Software engineer focused on ML/AI engineering, shipping end-to-end products that serve real users and solve real problems.",
            tags: ["ML Engineer", "Full-Stack"],
          },
        ]}
      />

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
