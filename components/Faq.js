"use client";
import { useState } from "react";

const items = [
  ["Who is Fermor for?", "Anyone who wants to feel in control of their money without becoming a finance expert: first-time earners, busy professionals and families."],
  ["Do I need to know about investing?", "No. Fermor explains every suggestion in plain words, so you learn as you go and stay in charge of each decision."],
  ["Is my data safe?", "Privacy comes first. Your data is encrypted, never sold, and you choose what to connect and what to remove."],
  ["Does Fermor give financial advice?", "Fermor offers guidance and education to help you decide. It is not a replacement for a licensed adviser."],
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map(([q, a], i) => (
        <div key={q}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-medium">
            {q}<span className={`text-2xl text-mint transition ${open === i ? "rotate-45" : ""}`}>+</span>
          </button>
          {open === i && <p className="max-w-2xl pb-6 text-ink/70">{a}</p>}
        </div>
      ))}
    </div>
  );
}
