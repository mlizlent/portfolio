import { HOME_SKILLS } from "../data/home.js";

export default function SkillsGrid() {
  return (
    <section className="section">
      <h2>Skills &amp; tools</h2>
      <p className="muted">I work across the full stack and bring ML/AI expertise to every layer of the product, from interface to infrastructure.</p>
      <div className="skills-grid">
        {Object.entries(HOME_SKILLS).map(([cat, items]) => (
          <div key={cat} className="skill-group">
            <h3 className="skill-cat">{cat}</h3>
            <div className="skill-chips">
              {items.map((s) => (
                <span className="skill-chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
