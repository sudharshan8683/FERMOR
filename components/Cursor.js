"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ring = useRef(null), bar = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      bar.current.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    if (matchMedia("(pointer: coarse)").matches) return () => window.removeEventListener("scroll", onScroll);
    let x = 0, y = 0, tx = 0, ty = 0, big = false, raf;
    const move = (e) => {
      tx = e.clientX; ty = e.clientY; ring.current.style.opacity = 1;
      big = !!e.target.closest("a,button,input,label");
    };
    const loop = () => {
      x += (tx - x) * 0.18; y += (ty - y) * 0.18;
      ring.current.style.transform = `translate(${x - 18}px, ${y - 18}px) scale(${big ? 1.8 : 1})`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={bar} className="fixed left-0 top-0 z-[70] h-[3px] bg-lime" style={{ width: 0 }} />
      <div ref={ring} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-9 w-9 rounded-full border border-lime opacity-0 mix-blend-difference transition-[opacity] md:block" />
    </>
  );
}
