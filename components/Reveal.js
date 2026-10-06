"use client";
import { useEffect, useRef } from "react";

export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ "--d": delay + "s" }} className={`reveal ${className}`}>{children}</div>;
}
