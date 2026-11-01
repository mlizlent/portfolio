import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function ConversationBlock({ chunk, columnStart, theme }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 160,
                damping: 18,
                mass: 0.8,
              },
            }
          : { opacity: 0, scale: 0 }
      }
      className={`col-span-4 md:col-span-5 ${columnStart}`}
      style={{
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: theme.surface,
          border: `1px solid ${theme.border}`,
          borderRadius: 14,
          padding: 20,
          boxShadow:
            "0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.03)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Node marker */}
        <div
          style={{
            position: "absolute",
            top: 12,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: isInView ? theme.accent : theme.border,
            border: `2px solid ${theme.border}`,
            boxShadow: isInView ? `0 0 0 6px ${theme.accent}22` : "none",
            zIndex: 3,
          }}
        />

        <h3
          style={{
            margin: "0 0 8px 0",
            color: theme.ink,
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {chunk.title}
        </h3>
        <p
          style={{
            margin: "0 0 12px 0",
            color: theme.inkSoft,
            fontSize: 13,
            lineHeight: 1.55,
          }}
        >
          {chunk.body}
        </p>
        {chunk.tags && chunk.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {chunk.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "3px 10px",
                  borderRadius: 6,
                  background: theme.accent + "0a",
                  border: `1px solid ${theme.accent}44`,
                  color: theme.accent,
                  fontSize: 10.5,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ConversationSCurve({ chunks, theme }) {
  const defaultTheme = {
    accent: "var(--accent)",
    surface: "var(--surface)",
    border: "var(--border)",
    ink: "var(--ink)",
    inkSoft: "var(--ink-soft)",
    muted: "var(--muted)",
  };
  const t = theme ? { ...defaultTheme, ...theme } : defaultTheme;

  // S-shape serpentine column-start positions across a 12-col grid
  // Row 1: cols 1-4 (left), Row 2: cols 9-6 (right), Row 3: cols 1-4 (left), etc.
  const serpentineStarts = chunks.map((_, i) => {
    const row = Math.floor(i / 2);
    const posInRow = i % 2;
    if (row % 2 === 0) {
      return posInRow === 0 ? "col-start-1" : "col-start-4";
    }
    return posInRow === 0 ? "col-start-9" : "col-start-6";
  });

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        padding: "80px 24px",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "24px 32px",
          maxWidth: 960,
          margin: "0 auto",
          zIndex: 2,
        }}
      >
        {/* Dotted winding path line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            background: `repeating-linear-gradient(180deg, ${t.border}, ${t.border} 6px, transparent 6px, transparent 12px)`,
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        />

        {chunks.map((chunk, i) => (
          <ConversationBlock
            key={chunk.id || i}
            chunk={chunk}
            columnStart={serpentineStarts[i]}
            theme={t}
          />
        ))}
      </div>
    </section>
  );
}
