import { useRef, useState, useEffect } from "react";
import ThoughtPath from "./ThoughtPath.jsx";
import PathMarker from "./PathMarker.jsx";
import ThoughtBubble from "./ThoughtBubble.jsx";
import { ABOUT_CHUNKS } from "../data/about.js";
import MLDemo from "./MLDemo.jsx";

export default function AboutChunks() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [height, setHeight] = useState(1200);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const scrolled = -rect.top;
      const p = Math.min(1, Math.max(0, total > 0 ? scrolled / total : 0));
      setProgress(p);
      setHeight(el.offsetHeight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sides = ["right", "left", "right", "left", "right", "left"];

  return (
    <section ref={ref} className="about-chunks" aria-label="About chunks">
      <div className="about-chunks-inner">
        <ThoughtPath height={height} progress={progress} />
        <PathMarker progress={progress} height={height} />
        <ol className="about-chunks-list">
          {ABOUT_CHUNKS.map((c, i) => (
            <li key={c.id} className={`about-chunk about-chunk--${sides[i]}`}>
              <ThoughtBubble side={sides[i]} index={i} title={c.title} tagline={c.tagline} body={c.body}>
                {c.demo ? <MLDemo /> : null}
              </ThoughtBubble>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
