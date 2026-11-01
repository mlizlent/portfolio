export default function PathMarker({ progress = 0 }) {
  return (
    <div className="path-marker" style={{ top: `${progress * 100}%`, left: "50%", transform: "translate(-50%, -50%)" }} aria-hidden="true">
      <svg width={28} height={28} viewBox="0 0 28 28">
        <circle cx={14} cy={14} r={12} fill="var(--accent)" stroke="#fff" strokeWidth={1.5} />
        <circle cx={19} cy={10} r={3} fill="#fff" />
        <circle cx={20} cy={10} r={1.2} fill="#111" />
        <path d="M 24 14 L 14 10 L 14 18 Z" fill="#111" />
      </svg>
    </div>
  );
}
