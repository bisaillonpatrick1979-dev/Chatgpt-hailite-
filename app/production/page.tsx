import { AppShell } from "@/components/AppShell";
import { TrendCard } from "@/components/TrendCard";
import { FinanceMiniChart } from "@/components/FinanceMiniChart";

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Production et comptabilite</h1>
        <p className="large-readable mt-3 text-slate-400">Quantites posees, heures, paie, revenus, depenses, materiaux et marge par chantier.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-4">
        <TrendCard label="Pi2" value="0" compare="Stable vs semaine passee" status="Stable" />
        <TrendCard label="Heures" value="0.0" compare="-4% vs semaine passee" status="Baisse" />
        <TrendCard label="Revenus" value="1538$" compare="+12% vs semaine passee" status="Hausse" />
        <TrendCard label="Marge" value="0%" compare="A calculer" status="Brouillon" />
      </section>
      <FinanceMiniChart />
      <section className="mt-6 grid gap-4 xl:grid-cols-2">
        <section className="pro-panel p-6">
          <h2 className="text-2xl font-black text-orange-400">Rapport au punch out</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Section" />
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Materiau" />
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Quantite pi2" />
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Heures" />
          </div>
          <textarea className="mt-3 min-h-28 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Notes de production" />
          <button className="mt-4 rounded-2xl bg-orange-600 p-5 text-xl font-black text-white">Ajouter production</button>
        </section>
        <section className="pro-panel p-6">
          <h2 className="text-2xl font-black text-orange-400">Comptable virtuel</h2>
          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">Revenus: 1538.13$ CAD</div>
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">Paie: 0$ CAD</div>
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">Materiaux: 0$ CAD</div>
            <div className="rounded-2xl bg-green-950 p-4 text-xl font-black text-green-300">Profit estime: 1538.13$ CAD</div>
          </div>
        </section>
      </section>
    </AppShell>
  );
}
