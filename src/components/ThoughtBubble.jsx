export default function ThoughtBubble({ side = "right", index = 0, title, tagline, body, children }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <li className={`thought-bubble thought-bubble--${side}`} style={{ listStyle: "none" }}>
      <span className="thought-badge">{num}</span>
      <h3 className="thought-title">{title}</h3>
      <p className="thought-tagline">{tagline}</p>
      <p className="thought-body">{body}</p>
      {children && <div className="thought-children">{children}</div>}
    </li>
  );
}
