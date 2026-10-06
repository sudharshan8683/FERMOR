"use client";
import { useState } from "react";

const links = [["How it works", "#how"], ["Money balancer", "#balance"], ["Planner", "#plan"], ["FAQ", "#faq"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/85 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-sky to-brand text-sm text-white">F</span>Fermor
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="text-ink/65 transition hover:text-brand">{l}</a>)}
          <a href="#start" className="btn bg-brand text-white shadow-lg shadow-brand/25 hover:bg-ink">Get started</a>
        </nav>
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-full border border-line p-2.5 md:hidden">
          <span className="block h-0.5 w-5 bg-ink" /><span className="mt-1.5 block h-0.5 w-5 bg-ink" />
        </button>
      </div>
      {open && (
        <div className="wrap flex flex-col gap-4 pb-6 pt-2 md:hidden">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="text-lg font-medium">{l}</a>)}
          <a href="#start" onClick={() => setOpen(false)} className="btn bg-brand text-white">Get started</a>
        </div>
      )}
    </header>
  );
}
