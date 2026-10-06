"use client";
import { useRef } from "react";

export default function Tilt({ children, className = "" }) {
  const r = useRef(null);
  const move = (e) => {
    const b = r.current.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width, y = (e.clientY - b.top) / b.height;
    r.current.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 10}deg) translateY(-6px)`;
    r.current.style.setProperty("--sx", x * 100 + "%");
    r.current.style.setProperty("--sy", y * 100 + "%");
  };
  return (
    <div ref={r} onMouseMove={move} onMouseLeave={() => (r.current.style.transform = "")} className={`group relative overflow-hidden transition-transform duration-200 ease-out ${className}`}>
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
        style={{ background: "radial-gradient(260px circle at var(--sx) var(--sy), rgba(200,241,105,.35), transparent 70%)" }} />
      <div className="relative">{children}</div>
    </div>
  );
}
