import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function SkillChips({ skills }) {
  const [revealed, setRevealed] = useState(new Set());

  const chips = Object.entries(skills).flatMap(([cat, items]) =>
    items.map((skill) => ({ cat, skill }))
  );

  return (
    <section className="about-skills" aria-label="Skills">
      <div className="about-skills-grid">
        <AnimatePresence mode="wait">
          {chips.map(({ cat, skill }, i) => {
            const key = `${cat}-${skill}`;
            const isRevealed = revealed.has(key);
            return (
              <motion.div
                key={key}
                ref={(el) => {
                  if (el && !isRevealed && i < 6) setRevealed((s) => new Set([...s, key]));
                }}
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={isRevealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.95 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 140, damping: 16 }}
                className="about-chip"
                style={{
                  backgroundColor: catColor(cat),
                  color: catColor(cat, true),
                }}
              >
                {skill}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}

function catColor(cat, inverse = false) {
  const map = {
    Backend: ["#3b82f6", "#ffffff"],
    Frontend: ["#10b981", "#ffffff"],
    "AI/ML": ["#8b5cf6", "#ffffff"],
    Design: ["#f59e0b", "#ffffff"],
  };
  const [bg, fg] = map[cat] || ["#6b7280", "#ffffff"];
  return inverse ? fg : bg;
}
