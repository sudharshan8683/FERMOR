"use client";
import { useState } from "react";

const steps = [
  { key: "Understand", title: "One honest picture of your money", body: "Accounts, spending, debts and goals in a single view, with plain-language explanations instead of jargon.",
    rows: [["Net worth", "₹8,42,300"], ["Spent this month", "₹38,120"], ["Left after bills", "₹21,450"]] },
  { key: "Act", title: "The next best move, not a hundred charts", body: "Fermor points to the few actions that matter most right now and tells you why, so you can decide quickly.",
    rows: [["Move ₹10,000 to emergency fund", "Covers 2 more weeks"], ["Pay card before the 14th", "Avoids ~₹640 interest"], ["Review 3 unused subscriptions", "Frees ₹1,150/mo"]] },
  { key: "Grow", title: "Goals that stay on track", body: "Set what you are saving for. Watch progress, adjust the plan, and see what small changes do over time.",
    rows: [["Emergency fund", "68%"], ["Trip to Kerala", "41%"], ["Retirement habit", "On track"]] },
];

export default function Journey() {
  const [i, setI] = useState(0);
  const s = steps[i];
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div role="tablist" className="flex gap-2">
          {steps.map((x, n) => (
            <button key={x.key} role="tab" aria-selected={n === i} onClick={() => setI(n)}
              className={`rounded-full px-4 py-2 text-sm transition ${n === i ? "bg-brand text-paper" : "border border-line text-ink/70 hover:border-brand"}`}>
              {n + 1}. {x.key}
            </button>
          ))}
        </div>
        <h3 className="mt-8 font-serif text-3xl leading-tight">{s.title}</h3>
        <p className="mt-4 text-ink/70">{s.body}</p>
      </div>
      <div className="lg:col-span-3 rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8" aria-live="polite">
        <p className="text-xs uppercase tracking-widest text-brand">{s.key}</p>
        <ul className="mt-4 divide-y divide-line">
          {s.rows.map(([a, b]) => (
            <li key={a} className="flex items-center justify-between gap-4 py-4">
              <span className="font-medium">{a}</span><span className="text-right text-ink/60">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
