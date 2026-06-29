export function DocumentBuilderPro() {
  const rows = [
    ["Soffit fascia", "185 pi lin.", "8.50$", "1572.50$"],
    ["Siding mur sud", "620 pi2", "12.00$", "7440.00$"],
    ["Trims et coins", "1 forfait", "850.00$", "850.00$"],
    ["Photos, nettoyage, inspection", "1 forfait", "350.00$", "350.00$"]
  ];
  return (
    <section className="pro-panel mt-6 p-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Document professionnel</p>
          <h2 className="text-4xl font-black text-white">DEV-2026-0001</h2>
          <p className="large-readable mt-3 text-slate-300">Devis, contrat, facture client ou invoice sous-traitant avec signature, taxes, avance et rabais.</p>
        </div>
        <div className="rounded-2xl bg-slate-950 p-5 text-right">
          <p className="text-sm font-black uppercase tracking-widest text-slate-500">Total</p>
          <p className="text-4xl font-black text-green-400">14199.41$ CAD</p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-950 p-4"><p className="text-sm font-black text-slate-500">Client</p><p className="text-xl font-black text-white">Jean Larouche</p></div>
        <div className="rounded-2xl bg-slate-950 p-4"><p className="text-sm font-black text-slate-500">Compagnie</p><p className="text-xl font-black text-white">Hailite Xteriors Inc.</p></div>
        <div className="rounded-2xl bg-slate-950 p-4"><p className="text-sm font-black text-slate-500">Statut</p><p className="text-xl font-black text-orange-400">Signature requise</p></div>
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
        <div className="grid grid-cols-4 bg-slate-800 p-4 text-sm font-black uppercase tracking-widest text-slate-300"><span>Description</span><span>Quantite</span><span>Prix</span><span>Total</span></div>
        {rows.map((row, index) => <div key={row[0]} className={`grid grid-cols-4 p-4 text-lg font-bold ${index % 2 === 0 ? "bg-slate-950" : "bg-[#121821]"}`}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl bg-slate-950 p-4"><p className="text-sm font-black text-slate-500">Sous-total</p><p className="text-2xl font-black">10212.50$</p></div>
        <div className="rounded-2xl bg-slate-950 p-4"><p className="text-sm font-black text-slate-500">GST Alberta</p><p className="text-2xl font-black">510.63$</p></div>
        <div className="rounded-2xl bg-slate-950 p-4"><p className="text-sm font-black text-slate-500">Avance/Rabais</p><p className="text-2xl font-black">0.00$</p></div>
        <div className="rounded-2xl bg-green-950 p-4"><p className="text-sm font-black text-green-300">Total</p><p className="text-2xl font-black text-green-400">10723.13$</p></div>
      </div>
      <section className="mt-6 rounded-2xl border border-red-900 bg-red-950/30 p-5">
        <h3 className="text-2xl font-black text-red-200">Blocage invoice sous-traitant</h3>
        <p className="large-readable mt-2 text-red-100">Envoi bloque tant que taches, photos requises et signature ne sont pas completes. Deblocage manuel admin possible.</p>
      </section>
    </section>
  );
}
