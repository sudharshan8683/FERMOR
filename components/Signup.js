"use client";
import { useState } from "react";

export default function Signup() {
  const [done, setDone] = useState(false);
  if (done) return <p className="mt-8 font-serif text-3xl text-sky">Thanks, you're on the list. ✦</p>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
      <input type="email" required placeholder="you@email.com" aria-label="Email" className="flex-1 rounded-full bg-paper px-5 py-3 text-ink outline-none focus:ring-2 focus:ring-sky" />
      <button className="btn bg-brand text-white hover:brightness-110">Join early access</button>
    </form>
  );
}
