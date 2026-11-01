import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONTROL_COLORS = ["var(--accent)", "var(--accent-soft)", "var(--muted)"];

export default function ProjectViewer({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex % projects.length];
  const cycleNext = () => setActiveIndex((i) => (i + 1) % projects.length);

  const windowControls = CONTROL_COLORS.map((color, i) => (
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
  ));

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
      className="project-viewer"
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
        <div
          style={{
            display: "flex",
            gap: 6,
            marginLeft: 10,
          }}
        >
          {windowControls}
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
          {project.name}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -24, scale: 0.97 }}
          transition={{
            type: "spring",
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
            padding: 32,
            color: "var(--ink-soft)",
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
            Project {activeIndex + 1} of {projects.length}
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
            {project.name}
          </h3>
          <p
            style={{
              margin: "0 0 20px 0",
              color: "var(--ink-soft)",
              fontSize: 15,
              lineHeight: 1.6,
              textAlign: "center",
              maxWidth: 420,
            }}
          >
            {project.tagline}
          </p>
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {project.tags.map((tag) => (
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
          <p
            style={{
              marginTop: 24,
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Click anywhere to view next project
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
