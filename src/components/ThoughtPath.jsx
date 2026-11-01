import { useRef } from "react";

export default function ThoughtPath({ height = 1000, progress = 0 }) {
  const w = 400;
  const h = height;
  const cx = w / 2;
  const d = `M ${cx} 0 C ${cx + 120} ${h * 0.08}, ${cx + 120} ${h * 0.18}, ${cx} ${h * 0.25} C ${cx - 120} ${h * 0.32}, ${cx - 120} ${h * 0.42}, ${cx} ${h * 0.5} C ${cx + 120} ${h * 0.58}, ${cx + 120} ${h * 0.68}, ${cx} ${h * 0.75} C ${cx - 120} ${h * 0.82}, ${cx - 120} ${h * 0.92}, ${cx} ${h}`;
  const maskH = (progress * h).toFixed(1);
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="thought-path" aria-hidden="true">
      <path d={d} fill="none" stroke="var(--accent-soft)" strokeWidth={4.5} strokeLinecap="round" strokeDasharray="0 14" />
      <mask id="thought-path-mask">
        <rect x={0} y={0} width={w} height={reduced ? h : maskH} fill="white" />
      </mask>
      <path d={d} fill="none" stroke="var(--accent)" strokeWidth={4.5} strokeLinecap="round" strokeDasharray="0 14" mask="url(#thought-path-mask)" />
    </svg>
  );
}
