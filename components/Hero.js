"use client";
import { useEffect, useRef, useState } from "react";
import Magnetic from "./Magnetic";

const TARGET = 842300;
const line = "0,70 40,62 80,66 120,48 160,52 200,32 240,38 300,12";

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
    setT({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
    box.current.style.setProperty("--mx", e.clientX - r.left + "px");
    box.current.style.setProperty("--my", e.clientY - r.top + "px");
  };

  return (
    <section ref={box} onMouseMove={move} id="top" className="relative overflow-hidden bg-white"
      style={{ backgroundImage: "radial-gradient(620px circle at var(--mx,75%) var(--my,10%), rgba(99,102,241,.16), transparent 60%), radial-gradient(rgba(11,27,58,.08) 1px, transparent 1px)", backgroundSize: "auto, 26px 26px" }}>
      <div aria-hidden className="pointer-events-none absolute -right-20 top-10 hidden h-[28rem] w-[28rem] rounded-full border border-brand/15 lg:block" style={{ transform: `translate(${t.x * -70}px, ${t.y * -70}px)`, transition: "transform .2s" }} />
      <div className="wrap relative grid items-center gap-16 pb-28 pt-14 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-brand shadow-sm">
            <span className="h-2 w-2 rounded-full bg-mint" /> Personal finance, made simple
          </p>
          <h1 className="font-serif text-[2.7rem] leading-[1.06] sm:text-6xl lg:text-[4.3rem]">
            Understand your money. <span className="bg-gradient-to-r from-brand to-sky bg-clip-text text-transparent">Act</span> with confidence.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/65">Fermor brings your accounts, spending and goals into one clear view, then shows the next step worth taking. No jargon, no guesswork.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Magnetic><a href="#start" className="btn bg-brand px-7 text-white shadow-lg shadow-brand/30 hover:bg-ink">Get started free</a></Magnetic>
            <Magnetic><a href="#balance" className="btn border border-line bg-white px-7 hover:border-brand hover:text-brand">Try the balancer</a></Magnetic>
          </div>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/55"><span>✓ Plain language</span><span>✓ You stay in control</span><span>✓ Private by default</span></p>
        </div>

        <div className="relative mx-auto w-full max-w-md" style={{ transform: `perspective(900px) rotateY(${t.x * 7}deg) rotateX(${-t.y * 7}deg)`, transition: "transform .2s" }}>
          <div className="rounded-3xl border border-line bg-white p-6 shadow-2xl shadow-brand/15 sm:p-7">
            <div className="flex items-start justify-between">
              <div><p className="text-sm text-ink/55">Net worth</p><p className="text-4xl font-extrabold tabular-nums tracking-tight">₹{n.toLocaleString("en-IN")}</p></div>
              <span className="rounded-full bg-mint/10 px-3 py-1 text-xs font-bold text-mint">▲ 4.2%</span>
            </div>
            <svg viewBox="0 0 300 90" className="mt-4 w-full" aria-hidden>
              <defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#6366f1" stopOpacity=".25" /><stop offset="1" stopColor="#6366f1" stopOpacity="0" /></linearGradient></defs>
              <polygon points={`${line} 300,90 0,90`} fill="url(#g)" />
              <polyline points={line} fill="none" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" style={{ animation: "draw 2s ease forwards" }} />
            </svg>
            <style>{`@keyframes draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`}</style>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
              {[["Spent", "₹38,120"], ["Left", "₹21,450"], ["Saved", "34%"]].map(([a, b]) => (
                <div key={a} className="rounded-xl bg-mist p-3"><p className="text-ink/50">{a}</p><p className="mt-1 text-sm font-bold">{b}</p></div>
              ))}
            </div>
          </div>
          <div className="absolute -right-3 -top-7 sm:-right-8" style={{ transform: `translate(${t.x * 50}px, ${t.y * 50}px)`, transition: "transform .15s" }}>
            <div className="floaty w-44 rounded-2xl border border-line bg-white p-3 text-xs shadow-xl">
              <p className="font-semibold">Emergency fund</p>
              <div className="mt-2 h-1.5 rounded-full bg-mist"><div className="h-full w-[68%] rounded-full bg-brand" /></div>
              <p className="mt-1 text-ink/50">68% of goal</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-3 sm:-left-9" style={{ transform: `translate(${t.x * -50}px, ${t.y * -50}px)`, transition: "transform .15s" }}>
            <div className="floaty rounded-2xl bg-ink px-4 py-3 text-sm text-white shadow-xl" style={{ animationDelay: "-3s" }}><b>Next move:</b> pay card by the 14th</div>
          </div>
        </div>
      </div>
    </section>
  );
}
