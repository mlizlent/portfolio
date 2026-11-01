import { useState } from "react";

export default function MacOSWindowSwitcher({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const item = items[activeIndex % items.length];
  const cycleNext = () => setActiveIndex((i) => (i + 1) % items.length);

  const controlColors = ["var(--accent)", "var(--accent-soft)", "var(--muted)"];

  return (
    <div
      style={{
        background: "var(--bg)",
        border: `1px solid var(--accent)`,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow:
          "0 40px 100px -24px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(223, 115, 255, 0.15)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 700,
        height: 520,
      }}
    >
      <div
        style={{
          background: "var(--surface)",
          height: 44,
          display: "flex",
          alignItems: "center",
          position: "relative",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        <div style={{ display: "flex", gap: 6, marginLeft: 10 }}>
          {controlColors.map((color, i) => (
            <div
              key={i}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: color,
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            color: "var(--ink)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            fontFamily: '"IBM Plex Mono", monospace',
          }}
        >
          {item.title || item.name}
        </div>
      </div>

      <div
        key={activeIndex}
          transition={{
            stiffness: 140,
            damping: 15,
          }}
          onClick={cycleNext}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            color: "var(--ink-soft)",
            overflowY: "auto",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
              padding: "6px 14px",
              borderRadius: 9999,
              background: "var(--accent-soft)",
              border: `1px solid var(--border)`,
              color: "var(--accent)",
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Item {activeIndex + 1} of {items.length}
          </div>
          <h3
            style={{
              margin: "0 0 12px 0",
              color: "var(--ink)",
              fontSize: 28,
              letterSpacing: "-0.03em",
              fontWeight: 600,
            }}
          >
            {item.title || item.name}
          </h3>
          {item.tagline && (
            <p
              style={{
                margin: "0 0 16px 0",
                color: "var(--ink-soft)",
                fontSize: 14,
                lineHeight: 1.55,
                textAlign: "center",
                maxWidth: 460,
              }}
            >
              {item.tagline}
            </p>
          )}
          {item.body && Array.isArray(item.body) && item.body.length > 0 && (
            <div
              style={{
                textAlign: "left",
                marginBottom: 20,
                maxWidth: 460,
              }}
            >
              <p
                style={{
                  margin: "0 0 12px 0",
                  color: "var(--ink-soft)",
                  fontSize: 13,
                  lineHeight: 1.65,
                }}
              >
                {item.body.join(" ").split(/\s+/).slice(0, 40).join(" ")}
              </p>
            </div>
          )}
          {item.tags && Array.isArray(item.tags) && item.tags.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 10px",
                    borderRadius: 6,
                    background: "var(--surface)",
                    border: `1px solid var(--border)`,
                    color: "var(--ink-soft)",
                    fontSize: 11,
                    fontWeight: 500,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      boxShadow: "0 0 0 2px rgba(255,255,255,0.06)",
                    }}
                  />
                  {tag}
                </span>
              ))}
            </div>
          )}
          {item.live && (
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 16px",
                borderRadius: 8,
                background: "var(--accent)",
                color: "#131118",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Live site
              <svg
                width="10"
                height="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
              </svg>
            </a>
          )}
        </div>
    </div>
  );
}
