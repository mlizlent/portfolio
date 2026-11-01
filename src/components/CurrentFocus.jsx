import { CURRENT_FOCUS } from "../data/home.js";

export default function CurrentFocus() {
  return (
    <section className="section">
      <h2>What I'm focused on now</h2>
      <p className="muted">{CURRENT_FOCUS}</p>
    </section>
  );
}
