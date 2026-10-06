"use client";
import { useRef } from "react";

export default function Magnetic({ children }) {
  const r = useRef(null);
  const move = (e) => {
    const b = r.current.getBoundingClientRect();
    r.current.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.35}px, ${(e.clientY - b.top - b.height / 2) * 0.5}px)`;
  };
  return (
    <span ref={r} onMouseMove={move} onMouseLeave={() => (r.current.style.transform = "")} className="inline-block transition-transform duration-200 ease-out">
      {children}
    </span>
  );
}
