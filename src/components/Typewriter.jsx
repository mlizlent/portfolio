import { useEffect, useState, useRef } from "react";

const ROLES = ["Full-stack Developer", "ML/AI Engineer", "UI/UX Designer"];

export default function Typewriter({ text = ROLES }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [forward, setForward] = useState(true);
  const [paused, setPaused] = useState(false);
  const wordRef = useRef(text[index]);

  useEffect(() => {
    if (paused) return;
    const word = wordRef.current;

    if (forward && display.length < word.length) {
      const timer = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 60);
      return () => clearTimeout(timer);
    }
    if (forward && display.length >= word.length) {
      setPaused(true);
      const timer = setTimeout(() => setPaused(false), 1400);
      return () => clearTimeout(timer);
    }
    if (!forward && display.length > 0) {
      const timer = setTimeout(() => setDisplay(word.slice(0, display.length - 1)), 40);
      return () => clearTimeout(timer);
    }
    if (!forward && display.length === 0) {
      setForward(true);
      setIndex((i) => (i + 1) % text.length);
    }
  }, [display, forward, paused, text]);

  useEffect(() => {
    setForward(false);
    wordRef.current = text[index];
    setDisplay("");
  }, [index, text]);

  return <span className="about-typewriter">{display}</span>;
}
