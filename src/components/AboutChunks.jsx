import { motion, AnimatePresence } from "framer-motion";
import ChunkCard from "./ChunkCard.jsx";

export default function AboutChunks({ chunks }) {
  return (
    <section className="about-chunks" aria-label="About sections">
      <div className="about-chunks-grid">
        <AnimatePresence mode="popLayout">
          {chunks.map((chunk) => (
            <motion.div key={chunk.id} layout id={chunk.id}>
              <ChunkCard chunk={chunk} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
