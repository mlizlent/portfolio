import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import MLDemo from "./MLDemo.jsx";

export default function ChunkCard({ chunk }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });
  const [open, setOpen] = useState(false);

  const handleView = () => {
    setOpen(true);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      className={`about-card ${chunk.id === "computer-vision-nlp" && "about-card-demo"}`}
      onClick={handleView}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleView()}
      tabIndex={0}
      role="button"
      aria-label={`Read more about ${chunk.title}`}
      aria-expanded={open}
    >
      <div className="about-card-header">
        <h3 className="about-card-title">{chunk.title}</h3>
        <span className="about-card-tagline">{chunk.tagline}</span>
      </div>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="about-card-body"
        >
          <p className="about-card-text">{chunk.body}</p>
          {chunk.demo && <MLDemo />}
        </motion.div>
      )}
    </motion.div>
  );
}
