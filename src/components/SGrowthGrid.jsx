import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function GrowthNode({ milestone, columnStart }) {
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
      className={`col-span-3 md:col-span-4 ${columnStart}`}
    >
      <div
        style={{
          position: "relative",
          paddingLeft: 36,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 4,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: isInView ? "var(--accent)" : "var(--surface)",
            border: `2px solid ${isInView ? "var(--accent)" : "var(--border)"}`,
            zIndex: 2,
          }}
        />
        <h3
          style={{
            margin: "0 0 6px 0",
            color: "var(--ink)",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {milestone.title}
        </h3>
        <p
          style={{
            margin: 0,
            color: "var(--ink-soft)",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function SGrowthGrid({ milestones }) {
  return (
    <section className="my-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2
          style={{
            fontSize: "2rem",
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            margin: "0 0 10px 0",
          }}
        >
          My journey
        </h2>
        <p
          style={{
            color: "var(--ink-soft)",
            fontSize: 15,
            lineHeight: 1.6,
            margin: "0 0 32px 0",
            maxWidth: 560,
          }}
        >
          From zero knowledge to where I am today.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 24 }}>
          {milestones.map((m, i) => {
            // S-shape pattern using column-start positions
            // Row 1: cols 1-4 (left to right)
            // Row 2: cols 6-3 (right to left)
            // Row 3: cols 1-4 (left to right)
            const row = Math.floor(i / 4);
            const posInRow = i % 4;

            let colStart;
            if (row % 2 === 0) {
              colStart = posInRow + 1; // cols 1, 2, 3, 4
            } else {
              colStart = 6 - posInRow; // cols 6, 5, 4, 3
            }

            return (
              <GrowthNode
                key={m.id || i}
                milestone={m}
                columnStart={`col-start-${colStart}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
