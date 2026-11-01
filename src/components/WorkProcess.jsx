import { WORK_STEPS } from "../data/home.js";

export default function WorkProcess() {
  return (
    <section className="section">
      <h2>How I work</h2>
      <div className="work-steps">
        {WORK_STEPS.map((s) => (
          <div className="work-step" key={s.n}>
            <span className="work-badge">{s.n}</span>
            <h3>{s.title}</h3>
            <p className="muted">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
