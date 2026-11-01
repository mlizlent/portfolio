export default function Hero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-heading" style={{ textAlign: "left" }}>
      <div className="about-hero-inner" style={{ alignItems: "flex-start", textAlign: "left" }}>
        <div className="about-hero-name">
          <h1 id="about-hero-heading" style={{ color: "var(--accent)" }}>Thinking in systems, building for people.</h1>
          <p className="about-hero-sub">Meroline Lizlent Wasonga, full-stack and ML/AI engineer.</p>
        </div>
      </div>
    </section>
  );
}
