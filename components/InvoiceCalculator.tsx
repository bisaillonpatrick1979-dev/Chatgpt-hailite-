"use client";

import { useState } from "react";
import { calculateInvoice } from "@/lib/invoiceMath";

export function InvoiceCalculator() {
  const [subtotal, setSubtotal] = useState("0");
  const [discount, setDiscount] = useState("0");
  const [advance, setAdvance] = useState("0");
  const [taxRate, setTaxRate] = useState("5");
  const result = calculateInvoice({ subtotal: Number(subtotal), discount: Number(discount), advance: Number(advance), taxRate: Number(taxRate) });

  return (
    <section className="pro-panel mt-6 p-6">
      <h2 className="text-2xl font-black text-orange-400">Calcul facture CAD</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <input value={subtotal} onChange={(e) => setSubtotal(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Sous-total" />
        <input value={discount} onChange={(e) => setDiscount(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Rabais" />
        <input value={advance} onChange={(e) => setAdvance(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Avance" />
        <input value={taxRate} onChange={(e) => setTaxRate(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Taxe %" />
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-950 p-4"><p className="text-sm font-black text-slate-500">Base taxable</p><p className="text-3xl font-black text-white">{result.taxableBase.toFixed(2)}$</p></div>
        <div className="rounded-2xl bg-slate-950 p-4"><p className="text-sm font-black text-slate-500">Taxes</p><p className="text-3xl font-black text-orange-400">{result.tax.toFixed(2)}$</p></div>
        <div className="rounded-2xl bg-green-950 p-4"><p className="text-sm font-black text-green-300">Total</p><p className="text-3xl font-black text-green-400">{result.total.toFixed(2)}$</p></div>
      </div>
    </section>
  );
}
