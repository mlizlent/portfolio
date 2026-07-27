import { Code2, Link2, ExternalLink, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-copy">
          © {new Date().getFullYear()} Meroline Lizlent. All rights reserved.
        </span>
        <div className="footer-links">
          <a href="mailto:lizwasonga36@gmail.com" aria-label="Email">
            <Mail size={17} />
          </a>
          <a
            href="https://github.com/mlizlent"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/meroline-lizlent-83a07034b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Link2 size={17} />
          </a>
          <a
            href="https://dev.to/meroline_lizlent"
            target="_blank"
            rel="noreferrer"
            aria-label="dev.to"
          >
            <ExternalLink size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
