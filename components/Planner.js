"use client";
import { useState } from "react";

const rates = { Cautious: 0.06, Balanced: 0.09, Ambitious: 0.12 };
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function Planner() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(15);
  const [mode, setMode] = useState("Balanced");
  const r = rates[mode] / 12, n = years * 12;
  const total = monthly * ((Math.pow(1 + r, n) - 1) / r);
  const put = monthly * n;
  const pct = Math.max(8, Math.min(92, (put / total) * 100));

  return (
    <div className="grid gap-8 rounded-3xl bg-gradient-to-br from-ink via-[#14306b] to-brand p-6 text-paper sm:p-10 lg:grid-cols-2">
      <div className="space-y-7">
        <label className="block">
          <span className="flex justify-between text-sm"><span>Save each month</span><b>{inr(monthly)}</b></span>
          <input type="range" min="1000" max="100000" step="1000" value={monthly} onChange={(e) => setMonthly(+e.target.value)} className="mt-3 w-full" />
        </label>
        <label className="block">
          <span className="flex justify-between text-sm"><span>For how long</span><b>{years} years</b></span>
          <input type="range" min="1" max="30" value={years} onChange={(e) => setYears(+e.target.value)} className="mt-3 w-full" />
        </label>
        <div>
          <span className="text-sm">Growth assumption</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {Object.keys(rates).map((k) => (
              <button key={k} onClick={() => setMode(k)} className={`rounded-full px-4 py-2 text-sm ${mode === k ? "bg-paper text-brand" : "border border-paper/30"}`}>
                {k} · {rates[k] * 100}%
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-sm text-paper/70">You could have about</p>
        <p className="font-serif text-5xl sm:text-6xl">{inr(total)}</p>
        <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-paper/15" aria-hidden>
          <div className="bg-paper/80" style={{ width: pct + "%" }} /><div className="bg-mint flex-1" />
        </div>
        <div className="mt-3 flex justify-between text-sm"><span>You put in {inr(put)}</span><span className="text-mint">Growth {inr(total - put)}</span></div>
        <p className="mt-6 text-xs text-paper/60">An illustration with steady returns, not a forecast or financial advice. Real returns vary.</p>
      </div>
    </div>
  );
}
