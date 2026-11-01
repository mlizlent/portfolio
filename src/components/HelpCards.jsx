import { HELP_CARDS } from "../data/home.js";

export default function HelpCards() {
  return (
    <section className="section">
      <h2>How I can help</h2>
      <div className="help-grid">
        {HELP_CARDS.map((c) => (
          <div className="help-card" key={c.title}>
            <h3>{c.title}</h3>
            <p className="muted">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
