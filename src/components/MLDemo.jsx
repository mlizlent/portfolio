import { useEffect, useRef, useState } from "react";

const DETECTIONS = [
  { label: "person", conf: 0.94, x: 0.22, y: 0.30, w: 0.28, h: 0.55 },
  { label: "laptop", conf: 0.87, x: 0.55, y: 0.40, w: 0.22, h: 0.30 },
  { label: "cup", conf: 0.72, x: 0.70, y: 0.62, w: 0.09, h: 0.12 },
  { label: "book", conf: 0.65, x: 0.10, y: 0.65, w: 0.16, h: 0.10 },
];

const COLORS = ["#ef4444", "#f59e0b", "#3b82f6", "#10b981", "#8b5cf6"];

export default function MLDemo() {
  const canvasRef = useRef(null);
  const [mode, setMode] = useState("detect");
  const [count, setCount] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    return () => mq.removeEventListener("change", () => setReduced(mq.matches));
  }, []);

  const W = 340;
  const H = 200;

  useEffect(() => {
    if (reduced) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    const points = Array.from({ length: 40 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      group: Math.floor(Math.random() * 3),
      targetX: 0,
      targetY: 0,
    }));

    const anchors = [
      { x: W * 0.25, y: H * 0.3 },
      { x: W * 0.5, y: H * 0.7 },
      { x: W * 0.75, y: H * 0.45 },
    ];

    points.forEach((p, i) => {
      p.targetX = anchors[p.group].x + (Math.sin(i * 0.3) * 12);
      p.targetY = anchors[p.group].y + (Math.cos(i * 0.3) * 12);
    });

    function draw() {
      ctx.clearRect(0, 0, W, H);

      if (mode === "detect") {
        ctx.fillStyle = "#f3f4f6";
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = "#e5e7eb";
        ctx.lineWidth = 1;
        ctx.strokeRect(4, 4, W - 8, H - 8);
        ctx.fillStyle = "#6b7280";
        ctx.font = "12px system-ui";
        ctx.textAlign = "center";
        ctx.fillText("Image placeholder", W / 2, H / 2);

        const progress = Math.min(frame / 60, 1);
        const showCount = Math.floor(DETECTIONS.length * progress);
        setCount(showCount);

        for (let i = 0; i < showCount; i++) {
          const d = DETECTIONS[i];
          const cx = d.x * W;
          const cy = d.y * H;
          const cw = d.w * W;
          const ch = d.h * H;
          const color = COLORS[i % COLORS.length];

          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          ctx.strokeRect(cx - cw / 2, cy - ch / 2, cw, ch);

          ctx.fillStyle = color;
          ctx.font = "bold 11px system-ui";
          ctx.textAlign = "left";
          ctx.fillText(`${d.label} ${d.conf.toFixed(2)}`, cx - cw / 2 + 4, cy - ch / 2 - 6);
        }
      } else {
        ctx.fillStyle = "#f3f4f6";
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = "#e5e7eb";
        ctx.lineWidth = 1;
        ctx.strokeRect(4, 4, W - 8, H - 8);
        ctx.fillStyle = "#6b7280";
        ctx.font = "12px system-ui";
        ctx.textAlign = "center";
        ctx.fillText("Clustering visual", W / 2, H / 2);

        const t = frame * 0.02;
        points.forEach((p) => {
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          p.x += dx * 0.08 + Math.sin(t + p.group) * 0.6;
          p.y += dy * 0.08 + Math.cos(t + p.group) * 0.6;

          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = COLORS[p.group % COLORS.length];
          ctx.fill();
        });
      }

      frame++;
      if (frame < 400) requestAnimationFrame(draw);
    }

    draw();
  }, [mode, reduced]);

  return (
    <div className="about-ml-demo">
      <div className="about-ml-header">
        <span className="about-ml-count">Detections: {count}</span>
        <div className="about-ml-toggle">
          <button
            className={`about-mode-btn ${mode === "detect" ? "active" : ""}`}
            onClick={() => setMode("detect")}
            aria-pressed={mode === "detect"}
          >
            Detection
          </button>
          <button
            className={`about-mode-btn ${mode === "cluster" ? "active" : ""}`}
            onClick={() => setMode("cluster")}
            aria-pressed={mode === "cluster"}
          >
            Clustering
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        className="about-ml-canvas"
        role="img"
        aria-label={`ML demo: ${mode} visual with ${count} detections`}
      />
    </div>
  );
}
