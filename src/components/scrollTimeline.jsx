import { useRef } from "react";
import { motion, useInView, useTransform, useMotionValue } from "framer-motion";

function MilestoneItem({ milestone, isLeft }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 15 } }
          : { opacity: 0, y: 16 }
      }
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        width: "100%",
        zIndex: 2,
      }}
    >
      {/* Left-side content */}
      {isLeft && (
        <div
          style={{
            width: "48%",
            textAlign: "right",
            paddingRight: 12,
          }}
        >
          <h3
            style={{
              margin: "0 0 8px 0",
              color: "var(--ink)",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            {milestone.title}
          </h3>
          <p
            style={{
              margin: "0 0 12px 0",
              color: "var(--ink-soft)",
              fontSize: 14,
              lineHeight: 1.55,
            }}
          >
            {milestone.description}
          </p>
          {milestone.tags && Array.isArray(milestone.tags) && milestone.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "flex-end", marginBottom: 12 }}>
              {milestone.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "3px 10px",
                    borderRadius: 6,
                    background: "var(--accent-soft)",
                    border: `1px solid var(--border)`,
                    color: "var(--accent)",
                    fontSize: 11,
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
          {milestone.link && (
            <a
              href={milestone.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                color: "var(--accent)",
                fontSize: 12,
                fontWeight: 500,
                textDecoration: "none",
                transition: "transform 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.color = "var(--accent)";
              }}
            >
              {milestone.linkText || "Learn more"}
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
      )}

      {/* Marker node */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: isInView ? "var(--accent)" : "var(--surface)",
          border: `2px solid ${isInView ? "var(--accent)" : "var(--border)"}`,
          boxShadow: isInView ? "0 0 0 4px rgba(223, 115, 255, 0.2)" : "none",
          zIndex: 3,
        }}
      />

      {/* Right-side content */}
      {!isLeft && (
        <div
          style={{
            width: "48%",
            paddingLeft: 12,
          }}
        >
          <h3
            style={{
              margin: "0 0 8px 0",
              color: "var(--ink)",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            {milestone.title}
          </h3>
          <p
            style={{
              margin: "0 0 12px 0",
              color: "var(--ink-soft)",
              fontSize: 14,
              lineHeight: 1.55,
            }}
          >
            {milestone.description}
          </p>
          {milestone.tags && Array.isArray(milestone.tags) && milestone.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
              {milestone.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "3px 10px",
                    borderRadius: 6,
                    background: "var(--accent-soft)",
                    border: `1px solid var(--border)`,
                    color: "var(--accent)",
                    fontSize: 11,
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
          {milestone.link && (
            <a
              href={milestone.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                color: "var(--accent)",
                fontSize: 12,
                fontWeight: 500,
                textDecoration: "none",
                transition: "transform 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.color = "var(--accent)";
              }}
            >
              {milestone.linkText || "Learn more"}
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
      )}
    </motion.div>
  );
}

export default function ScrollTimeline({ milestones }) {
  const sectionRef = useRef(null);
  const scrollY = useMotionValue();

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        padding: "80px 24px",
        overflowY: "auto",
      }}
      onScroll={(e) => scrollY.set(e.target.scrollTop)}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 80,
          maxWidth: 640,
          margin: "0 auto",
          minHeight: "100%",
        }}
      >
        {/* Static background path line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            background: "var(--border)",
            transform: "translateX(-50%)",
          }}
        />

        {/* Scroll-driven foreground progress line */}
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            height: useTransform(scrollY, [0, 1200], ["0%", "100%"]),
            width: 1,
            background: "var(--accent)",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        />

        {milestones.map((milestone, i) => (
          <MilestoneItem
            key={milestone.id || i}
            milestone={milestone}
            isLeft={i % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
