"use client";
import { useState } from "react";

const links = [["How it works", "#how"], ["Plan ahead", "#plan"], ["Principles", "#principles"], ["FAQ", "#faq"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-night/80 text-paper backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="font-serif text-2xl font-semibold tracking-tight">Fermor<span className="text-clay">.</span></a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="text-paper/70 hover:text-paper">{l}</a>)}
          <a href="#start" className="btn bg-lime text-ink hover:brightness-110">Get started</a>
        </nav>
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="md:hidden rounded-full border border-white/20 p-2.5">
          <span className="block h-0.5 w-5 bg-paper" /><span className="mt-1.5 block h-0.5 w-5 bg-paper" />
        </button>
      </div>
      {open && (
        <div className="wrap flex flex-col gap-4 pb-6 pt-2 md:hidden">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="text-lg">{l}</a>)}
          <a href="#start" onClick={() => setOpen(false)} className="btn bg-moss text-paper">Get started</a>
        </div>
      )}
    </header>
  );
}
