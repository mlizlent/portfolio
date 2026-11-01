import MacOSWindowSwitcher from "../components/macOSWindowSwitcher.jsx";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section className="section page-top">
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <MacOSWindowSwitcher items={projects} />
      </div>
    </section>
  );
}
