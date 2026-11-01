import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Typewriter from "./Typewriter.jsx";
import ScrollProgress from "./ScrollProgress.jsx";

export default function Hero() {
  const nameRef = useRef(null);
  const [nameVisible, setNameVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setNameVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about-hero" aria-labelledby="about-hero-heading">
      <ScrollProgress />
      <div className="about-hero-inner">
        <motion.div
          ref={nameRef}
          initial={{ opacity: 0, y: 12 }}
          animate={nameVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="about-hero-name"
        >
          <h1 id="about-hero-heading">Meroline Lizlent Wasonga</h1>
          <p className="about-hero-sub">
            Full-stack software developer and ML/AI engineer based in Kenya.
          </p>
        </motion.div>
        <div className="about-hero-roles">
          <span className="about-role-label">Currently:</span>
          <Typewriter />
        </div>
      </div>
    </section>
  );
}
