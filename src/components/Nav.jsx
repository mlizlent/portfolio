import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "moments", label: "Moments" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ currentTab, onChangeTab }) {
  const [open, setOpen] = useState(false);

  const handleTabClick = (id) => {
    onChangeTab(id);
    setOpen(false); // Close mobile drawer if open
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <button 
          onClick={() => handleTabClick("home")} 
          className="nav-brand"
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        >
          <img src="/icon/Screenshot%20From%202026-11-01%2015-29-37.png" alt="Meroline Lizlent" style={{ height: 40, width: 40, borderRadius: "50%", objectFit: "cover" }} />
        </button>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleTabClick(l.id)}
              className={
                "nav-link" + (currentTab === l.id ? " nav-link-active" : "")
              }
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {l.label}
            </button>
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

        <button
          className="nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {open && (
        <nav className="nav-mobile">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleTabClick(l.id)}
              className={
                "nav-mobile-link" + (currentTab === l.id ? " nav-link-active" : "")
              }
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block', width: '100%', textAlign: 'left' }}
            >
              {l.label}
            </button>
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
