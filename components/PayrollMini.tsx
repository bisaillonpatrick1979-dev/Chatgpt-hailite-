"use client";

import { useState } from "react";

export function PayrollMini() {
  const [hours, setHours] = useState("0");
  const [rate, setRate] = useState("0");
  const [advance, setAdvance] = useState("0");
  const total = Math.max(Number(hours) * Number(rate) - Number(advance), 0);

  return (
    <section className="pro-panel mt-6 p-6">
      <h2 className="text-2xl font-black text-orange-400">Paie rapide</h2>
      <p className="large-readable mt-2 text-slate-300">Calcul local pour employes salaries ou sous-traitants.</p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <input value={hours} onChange={(e) => setHours(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Heures" />
        <input value={rate} onChange={(e) => setRate(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Taux CAD" />
        <input value={advance} onChange={(e) => setAdvance(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Avance" />
      </div>
      <div className="mt-5 rounded-2xl border border-green-900 bg-green-950/30 p-5">
        <p className="text-sm font-black uppercase tracking-widest text-green-300">Total a payer</p>
        <p className="mt-2 text-5xl font-black text-green-400">{total.toFixed(2)}$</p>
      </div>
    </section>
  );
}
