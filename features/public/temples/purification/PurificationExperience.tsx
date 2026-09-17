"use client";
import { useEffect, useRef, useState } from "react";

export default function PurificationExperience() {
  const [entered, setEntered] = useState(true);
  const ripple = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      document.documentElement.style.setProperty(
        "--pour",
        String(Math.max(0, Math.min(1, (y - vh * 0.45) / (vh * 0.7))))
      );
    };

    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const move = (e: React.PointerEvent) => {
    if (!entered) {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      document.documentElement.style.setProperty("--mx", `${x * 18}px`);
      document.documentElement.style.setProperty("--my", `${y * 10}px`);
    }
  };

  return (
    <div onPointerMove={move}>
      <button
        className={"purity-veil " + (entered ? "purity-parted" : "")}
        onClick={() => setEntered(true)}
        aria-label="Enter Temple of Purification"
      >
        <span className="purity-veilLeft" />
        <span className="purity-veilRight" />
        <span className="purity-veilText">
          <small>TEMPLE III</small>
          <b>PURIFICATION</b>
          <em>TOUCH TO ENTER</em>
        </span>
      </button>
      <div ref={ripple} className="purity-globalRipple" />
    </div>
  );
}
