import { motion } from "framer-motion";

export default function ThoughtBubble({ side = "right", index = 0, title, tagline, body, children }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.li
      className={`thought-bubble thought-bubble--${side}`}
      initial={{ opacity: 1, scale: 1 }}
      style={{ listStyle: "none" }}
    >
      <span className="thought-badge">{num}</span>
      <h3 className="thought-title">{title}</h3>
      <p className="thought-tagline">{tagline}</p>
      <p className="thought-body">{body}</p>
      {children && <div className="thought-children">{children}</div>}
    </motion.li>
  );
}
