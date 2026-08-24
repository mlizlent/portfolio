import { Download } from "lucide-react";

export default function About() {
  return (
    <section className="section page-top">
      <h1>About</h1>
      <div className="prose">
        <p>
          I'm Meroline Lizlent, a full-stack software developer specializing
          in ML/AI engineering. I build end to end, frontend, backend,
          UI/UX design, and the Docker-based infrastructure that ships it,
          with a deep focus on machine learning and AI-powered products.
        </p>
        <p>
          I'm currently based in Kenya, working through the Software
          Engineering track at Zone01 Kisumu, and building independent
          projects alongside it. A lot of that work centers on Bitcoin and
          Lightning Network systems, often aimed at real problems in African
          contexts.
        </p>
        <p>
          I also write technical deep-dives on dev.to, mostly on Bitcoin
          protocol internals, Go, and Python, and I containerize what I ship
          with Docker so it runs the same way everywhere.
        </p>
        <p>
          I'm open to freelance projects, collaborations, and full-time
          opportunities in software and ML/AI engineering.
        </p>
        <a href="/Mlizlent_CV%20.pdf" download className="btn btn-primary case-study-cta">
          <Download size={15} /> Download CV
        </a>
      </div>
    </section>
  );
}
