"use client";

import { useState } from "react";

export function SignatureBox() {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState("");

  return (
    <section className="pro-panel mt-6 p-6">
      <h2 className="text-2xl font-black text-orange-400">Signature tactile</h2>
      <p className="large-readable mt-2 text-slate-300">Utilise pour devis, contrats, factures, invoices sous-traitants et approbations de journee.</p>
      <div className="mt-4 rounded-2xl border-2 border-dashed border-slate-700 bg-slate-950 p-6 text-center">
        <p className="text-xl font-black text-slate-300">Zone signature</p>
        <p className="mt-2 text-base text-slate-500">Signature canvas avancee a brancher ensuite.</p>
      </div>
      <input value={name} onChange={(e) => setName(e.target.value)} className="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Nom du signataire" />
      <button onClick={() => setSigned(true)} className="mt-4 rounded-2xl bg-green-600 p-4 text-xl font-black text-white">Signer et approuver</button>
      {signed ? <p className="mt-4 rounded-2xl bg-green-950 p-4 text-xl font-black text-green-300">Signe par {name || "signataire"}</p> : null}
    </section>
  );
}
