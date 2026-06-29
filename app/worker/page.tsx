import { AppShell } from "@/components/AppShell";
import { PortalCard } from "@/components/PortalCard";

export default function Worker() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <p className="text-sm font-black uppercase tracking-widest text-orange-400">Portail employe securise</p>
        <h1 className="text-5xl font-black">Mes informations</h1>
        <p className="large-readable mt-3 text-slate-400">Mes chantiers, mes taches, mes heures, ma paie et mes documents seulement.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <PortalCard title="Mes heures" value="0.0" note="Cette semaine" />
        <PortalCard title="Mes taches" value="4" note="Assignees a moi" />
        <PortalCard title="Ma paie" value="0$" note="Estimation personnelle" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Mon chantier actif</h2>
        <p className="large-readable mt-3 text-slate-300">Chantier Hydro-Quebec · Geofence requis avant Punch In.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <button className="rounded-2xl bg-green-600 p-5 text-xl font-black text-white">Punch In</button>
          <button className="rounded-2xl bg-slate-800 p-5 text-xl font-black text-white">Pause</button>
          <button className="rounded-2xl bg-red-700 p-5 text-xl font-black text-white">Punch Out</button>
        </div>
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Mes taches</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">□ Changer fascia</div>
          <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">□ Changer soffit</div>
          <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">□ Refaire mur sud</div>
          <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">□ Ajouter photos finales</div>
        </div>
      </section>
    </AppShell>
  );
}
