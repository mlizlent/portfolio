import { Code2, Link2, ExternalLink, Mail, ArrowUpRight } from "lucide-react";

const CHANNELS = [
  { label: "lizwasonga36@gmail.com", href: "mailto:lizwasonga36@gmail.com", icon: Mail },
  { label: "github.com/mlizlent", href: "https://github.com/mlizlent", icon: Code2 },
  { label: "linkedin.com/in/meroline-lizlent", href: "https://www.linkedin.com/in/meroline-lizlent-83a07034b/", icon: Link2 },
  { label: "dev.to/meroline_lizlent", href: "https://dev.to/meroline_lizlent", icon: ExternalLink },
];

export default function Contact() {
  return (
    <section className="section page-top">
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <h1>Let's build something great together</h1>
        <p className="muted lede">
          I'm open to freelance projects, collaborations, and full-time opportunities in software and ML/AI engineering. The fastest way to reach me is one of these:
        </p>
        <a
          href="mailto:lizwasonga36@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 24px",
            borderRadius: 999,
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 14,
            marginTop: 16,
          }}
        >
          <Mail size={16} /> Send an email
        </a>
      </div>

      <div className="contact-list" style={{ maxWidth: 720, margin: "40px auto 0" }}>
        {CHANNELS.map((c) => (
          <a
            href={c.href}
            key={c.label}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="contact-row"
          >
            <c.icon size={18} />
            <span>{c.label}</span>
            <ArrowUpRight size={15} className="muted" />
          </a>
        ))}
      </div>
    </section>
  );
}
