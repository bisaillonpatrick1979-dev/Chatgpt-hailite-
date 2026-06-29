import Link from "next/link";

export function WorkOrderCenter() {
  return (
    <section className="pro-panel mt-6 p-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Bon de chantier</p>
          <h2 className="text-4xl font-black text-white">Work Order complet</h2>
          <p className="large-readable mt-3 text-slate-300">Relie client, projet, geofence, equipe, taches, punch, production, photos, invoice et paie.</p>
        </div>
        <Link href="/projects" className="rounded-2xl bg-orange-600 p-5 text-xl font-black text-white">Ouvrir projets</Link>
      </div>
      <section className="mt-6 grid gap-4 xl:grid-cols-4">
        <div className="rounded-2xl bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-widest text-slate-500">Client</p>
          <h3 className="mt-2 text-2xl font-black text-white">Hydro-Quebec Renovations</h3>
          <p className="mt-2 text-lg font-bold text-slate-400">Adresse facturation + contact</p>
        </div>
        <div className="rounded-2xl bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-widest text-slate-500">Chantier</p>
          <h3 className="mt-2 text-2xl font-black text-white">Leduc</h3>
          <p className="mt-2 text-lg font-bold text-green-400">Geofence 328 pieds</p>
        </div>
        <div className="rounded-2xl bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-widest text-slate-500">Equipe</p>
          <h3 className="mt-2 text-2xl font-black text-white">2 travailleurs</h3>
          <p className="mt-2 text-lg font-bold text-slate-400">Employe + sous-traitant</p>
        </div>
        <div className="rounded-2xl bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-widest text-slate-500">Facturation</p>
          <h3 className="mt-2 text-2xl font-black text-white">14199.41$ CAD</h3>
          <p className="mt-2 text-lg font-bold text-orange-400">Devis accepte</p>
        </div>
      </section>
      <section className="mt-6 grid gap-4 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <h3 className="text-2xl font-black text-orange-400">Taches du chantier</h3>
          <div className="mt-4 grid gap-3">
            <div className="rounded-xl bg-[#121821] p-4 text-xl font-black">□ Soffit cote gauche</div>
            <div className="rounded-xl bg-[#121821] p-4 text-xl font-black">□ Fascia avant</div>
            <div className="rounded-xl bg-[#121821] p-4 text-xl font-black">□ Siding mur sud</div>
            <div className="rounded-xl bg-[#121821] p-4 text-xl font-black">□ Photos finales avant invoice</div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <h3 className="text-2xl font-black text-orange-400">Blocages automatiques</h3>
          <div className="mt-4 grid gap-3">
            <div className="rounded-xl bg-[#121821] p-4 text-xl font-black">Invoice bloquee si taches non terminees</div>
            <div className="rounded-xl bg-[#121821] p-4 text-xl font-black">Invoice bloquee si photos requises manquantes</div>
            <div className="rounded-xl bg-[#121821] p-4 text-xl font-black">Signature requise avant envoi</div>
            <div className="rounded-xl bg-[#121821] p-4 text-xl font-black">Admin peut debloquer manuellement</div>
          </div>
        </div>
      </section>
    </section>
  );
}
