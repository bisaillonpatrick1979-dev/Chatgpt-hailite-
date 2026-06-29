export function InvoiceWorkflowPanel() {
  return (
    <section className="pro-panel mt-6 p-6">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Flux documents</p>
      <h2 className="text-4xl font-black text-white">Devis → Contrat → Facture</h2>
      <p className="large-readable mt-3 text-slate-300">Flux simplifie pour tester les documents sans PDF final.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl bg-slate-950 p-5"><p className="text-xl font-black text-white">1. Devis</p><p className="mt-2 text-slate-400">DEV-2026-0001</p></div>
        <div className="rounded-2xl bg-slate-950 p-5"><p className="text-xl font-black text-white">2. Contrat</p><p className="mt-2 text-slate-400">Signature client</p></div>
        <div className="rounded-2xl bg-slate-950 p-5"><p className="text-xl font-black text-white">3. Facture</p><p className="mt-2 text-slate-400">FAC-2026-0001</p></div>
        <div className="rounded-2xl bg-slate-950 p-5"><p className="text-xl font-black text-white">4. Paiement</p><p className="mt-2 text-slate-400">Solde CAD</p></div>
      </div>
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-5">
        <div className="grid grid-cols-4 bg-slate-800 p-3 text-sm font-black uppercase text-slate-300"><span>Description</span><span>Qte</span><span>Prix</span><span>Total</span></div>
        <div className="grid grid-cols-4 p-3 text-lg font-bold"><span>Siding mur sud</span><span>620 pi2</span><span>12$</span><span>7440$</span></div>
        <div className="grid grid-cols-4 bg-[#121821] p-3 text-lg font-bold"><span>Soffit fascia</span><span>185 pi lin.</span><span>8.50$</span><span>1572.50$</span></div>
      </div>
    </section>
  );
}
