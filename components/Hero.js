"use client";
import { useEffect, useRef, useState } from "react";
import Magnetic from "./Magnetic";

const TARGET = 842300;

export default function Hero() {
  const box = useRef(null);
  const [n, setN] = useState(0);
  const [t, setT] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf, start;
    const tick = (ts) => {
      start ??= ts;
      const p = Math.min((ts - start) / 1800, 1);
      setN(Math.round(TARGET * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const move = (e) => {
    const r = box.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    setT({ x, y });
    box.current.style.setProperty("--mx", e.clientX - r.left + "px");
    box.current.style.setProperty("--my", e.clientY - r.top + "px");
  };

  return (
    <section ref={box} onMouseMove={move} id="top" className="grain relative overflow-hidden bg-night text-paper"
      style={{ backgroundImage: "radial-gradient(500px circle at var(--mx,70%) var(--my,20%), rgba(200,241,105,.14), transparent 60%), radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px)", backgroundSize: "auto, 22px 22px" }}>
      <div aria-hidden className="pointer-events-none absolute -right-24 top-6 hidden h-[26rem] w-[26rem] rounded-full border border-lime/20 lg:block" style={{ transform: `translate(${t.x * -80}px, ${t.y * -80}px)`, transition: "transform .2s" }} />
      <div aria-hidden className="pointer-events-none absolute bottom-10 left-[42%] hidden h-24 w-24 rounded-full bg-lime/10 blur-xl lg:block" style={{ transform: `translate(${t.x * 120}px, ${t.y * 120}px)`, transition: "transform .2s" }} />
      <div className="wrap relative grid items-center gap-14 pb-28 pt-16 lg:grid-cols-[1.1fr_1fr] lg:pt-28">
        <div>
          <p className="reveal in mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-widest text-lime">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime" /> Understand · Act · Grow
          </p>
          <h1 className="font-serif text-[2.9rem] leading-[1.02] sm:text-7xl lg:text-[5.5rem]">
            Your money,<br /><em className="text-lime">finally</em> in focus.
          </h1>
          <p className="mt-7 max-w-lg text-lg text-paper/65">Fermor turns scattered accounts and confusing numbers into one clear picture and the next right step.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Magnetic><a href="#start" className="btn bg-lime text-ink hover:brightness-110">Get started free</a></Magnetic>
            <Magnetic><a href="#balance" className="btn border border-white/20 hover:bg-white/10">Try the money balancer</a></Magnetic>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md" style={{ transform: `perspective(900px) rotateY(${t.x * 8}deg) rotateX(${-t.y * 8}deg)`, transition: "transform .2s" }}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur">
            <p className="text-sm text-paper/60">Net worth</p>
            <p className="font-serif text-5xl tabular-nums">₹{n.toLocaleString("en-IN")}</p>
            <p className="mt-1 text-sm text-lime">▲ 4.2% this quarter</p>
            <svg viewBox="0 0 240 80" className="mt-5 w-full" aria-hidden>
              <polyline points="0,66 30,58 60,62 90,44 120,50 150,30 180,36 210,14 240,20" fill="none" stroke="#c8f169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" style={{ animation: "draw 2s ease forwards" }} />
            </svg>
            <style>{`@keyframes draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`}</style>
          </div>
          <div className="absolute -right-3 -top-6 sm:-right-8" style={{ transform: `translate(${t.x * 50}px, ${t.y * 50}px)`, transition: "transform .15s" }}><div className="floaty rounded-2xl bg-lime px-4 py-3 text-sm font-medium text-ink shadow-xl">Emergency fund 68%</div></div>
          <div className="absolute -bottom-6 -left-3 sm:-left-8" style={{ transform: `translate(${t.x * -50}px, ${t.y * -50}px)`, transition: "transform .15s" }}><div className="floaty rounded-2xl bg-paper px-4 py-3 text-sm text-ink shadow-xl" style={{ animationDelay: "-3s" }}><b>Next move:</b> pay card by the 14th</div></div>
        </div>
      </div>
    </section>
  );
}
