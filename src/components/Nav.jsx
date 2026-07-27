import { NavLink } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
          Meroline Lizlent
        </NavLink>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://github.com/mlizlent"
          target="_blank"
          rel="noreferrer"
          className="nav-github"
        >
          <Code2 size={16} />
          <span>GitHub</span>
        </a>

        <ThemeToggle />

        <button
          className="nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                "nav-mobile-link" + (isActive ? " nav-link-active" : "")
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="https://github.com/mlizlent"
            target="_blank"
            rel="noreferrer"
            className="nav-mobile-link"
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}
