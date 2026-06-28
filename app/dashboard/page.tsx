import { AppShell } from "@/components/AppShell";
import { TrendCard } from "@/components/TrendCard";

export default function Page() {
  return (
    <AppShell>
      <section className="mb-6 rounded-2xl border border-orange-900 bg-orange-950/20 p-4">
        <p className="text-lg font-black uppercase tracking-widest text-orange-400">● GPS reel actif · Geofencing par chantier</p>
      </section>
      <section className="pro-card p-6">
        <h1 className="text-4xl font-black leading-tight md:text-5xl">Bonjour, Patrick Bisaillon !</h1>
        <p className="mt-3 text-lg font-bold uppercase tracking-wide text-slate-400">Tableau de bord executif — Hailite Xteriors</p>
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-4">
        <TrendCard label="Revenu total" value="1538.13$" compare="+12% vs semaine passee" status="Hausse" />
        <TrendCard label="Heures totales" value="0.0h" compare="-4% vs semaine passee" status="Baisse" />
        <TrendCard label="Punches actifs" value="0 / 3" compare="Stable vs hier" status="Stable" />
        <TrendCard label="Factures dues" value="12500$" compare="+8% vs mois passe" status="A surveiller" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black uppercase tracking-widest text-orange-400">Graphique revenu mensuel</h2>
        <div className="mt-5 flex h-52 items-end gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <span className="h-16 flex-1 rounded bg-slate-700" /><span className="h-24 flex-1 rounded bg-slate-600" /><span className="h-32 flex-1 rounded bg-blue-500" /><span className="h-20 flex-1 rounded bg-slate-700" /><span className="h-40 flex-1 rounded bg-orange-500" /><span className="h-48 flex-1 rounded bg-green-500" />
        </div>
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black uppercase tracking-widest text-orange-400">Suivi des equipes</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border-l-8 border-cyan-400 bg-slate-950 p-5"><h3 className="text-xl font-black">Poseurs de Toiture Elite</h3><p className="mt-3 text-lg text-slate-300">0 / 2 membres · 0.0h · 0$</p></article>
          <article className="rounded-2xl border-l-8 border-purple-500 bg-slate-950 p-5"><h3 className="text-xl font-black">Gardiens Modernes du Revetement</h3><p className="mt-3 text-lg text-slate-300">0 / 2 membres · 0.0h · 0$</p></article>
        </div>
      </section>
    </AppShell>
  );
}
