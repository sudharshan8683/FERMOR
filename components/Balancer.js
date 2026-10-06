"use client";
import { useState } from "react";

const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function Balancer() {
  const [income, setIncome] = useState(60000);
  const [needs, setNeeds] = useState(60);
  const [wants, setWants] = useState(30);
  const save = 100 - needs - wants;
  const score = Math.max(0, Math.round(100 - (Math.abs(needs - 50) + Math.abs(wants - 30) + Math.abs(save - 20)) * 0.9));
  const msg = score >= 85 ? "Beautifully balanced." : score >= 60 ? "Solid. A small shift in wants lifts your savings." : "Tight. Try trimming wants to build a buffer.";
  const C = 2 * Math.PI * 52;

  const Row = ({ label, pct, color }) => (
    <div className="flex items-center justify-between border-b border-white/10 py-3 text-sm last:border-0">
      <span className="flex items-center gap-3"><i className="h-3 w-3 rounded-full" style={{ background: color }} />{label}</span>
      <span><b>{inr((income * pct) / 100)}</b> <span className="text-paper/50">· {pct}%</span></span>
    </div>
  );

  return (
    <div className="grid gap-10 rounded-[2rem] bg-night p-6 text-paper sm:p-10 lg:grid-cols-2">
      <div className="space-y-7">
        <label className="block"><span className="flex justify-between text-sm"><span>Monthly income</span><b>{inr(income)}</b></span>
          <input type="range" min="15000" max="300000" step="5000" value={income} onChange={(e) => setIncome(+e.target.value)} className="mt-3 w-full" /></label>
        <label className="block"><span className="flex justify-between text-sm"><span>Needs (rent, bills, food)</span><b>{needs}%</b></span>
          <input type="range" min="20" max="80" value={needs} onChange={(e) => { const v = +e.target.value; setNeeds(v); if (v + wants > 100) setWants(100 - v); }} className="mt-3 w-full" /></label>
        <label className="block"><span className="flex justify-between text-sm"><span>Wants (fun, travel)</span><b>{wants}%</b></span>
          <input type="range" min="0" max={100 - needs} value={wants} onChange={(e) => setWants(+e.target.value)} className="mt-3 w-full" /></label>
        <div><Row label="Needs" pct={needs} color="#c8f169" /><Row label="Wants" pct={wants} color="#d9692e" /><Row label="Savings" pct={save} color="#f6f1e7" /></div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <svg viewBox="0 0 120 120" className="w-56">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="9" />
          <circle cx="60" cy="60" r="52" fill="none" stroke="#c8f169" strokeWidth="9" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - score / 100)} transform="rotate(-90 60 60)" style={{ transition: "stroke-dashoffset .5s" }} />
          <text x="60" y="58" textAnchor="middle" fill="#fbf8f2" fontSize="28" fontWeight="600">{score}</text>
          <text x="60" y="76" textAnchor="middle" fill="#fbf8f2" opacity=".55" fontSize="8">MONEY HEALTH</text>
        </svg>
        <p className="mt-4 font-serif text-2xl">{msg}</p>
        <p className="mt-2 text-xs text-paper/50">Illustrative score based on a 50/30/20 guideline. Not financial advice.</p>
      </div>
    </div>
  );
}
