import { AppShell } from "@/components/AppShell";
import { TrendCard } from "@/components/TrendCard";

const teams = [
  { name: "Poseurs de Toiture Elite", members: "0 / 2", hours: "0.0h", revenue: "0$", color: "border-cyan-400" },
  { name: "Gardiens Modernes du Revetement", members: "0 / 2", hours: "0.0h", revenue: "0$", color: "border-purple-500" }
];

const alerts = [
  "Inventaire critique: rouleaux membrane sous-couche 15lb sous le seuil minimum.",
  "Conformite CCQ expiree: certificat a mettre a jour.",
  "Heures supplementaires: approche de la limite de 40h."
];

export default function Root() {
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
        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-black uppercase tracking-widest text-orange-400">Suivi des equipes en direct (2)</h2>
          <span className="rounded-lg bg-cyan-950 px-4 py-2 text-sm font-black text-cyan-300">Activite temps-reel</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {teams.map((team) => (
            <article key={team.name} className={`rounded-2xl border-l-8 ${team.color} bg-slate-950 p-5`}>
              <h3 className="text-xl font-black leading-tight">{team.name}</h3>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-black/40 p-3"><p className="text-xs font-black uppercase text-slate-500">Membres</p><p className="text-xl font-black">{team.members}</p></div>
                <div className="rounded-xl bg-black/40 p-3"><p className="text-xs font-black uppercase text-slate-500">Heures</p><p className="text-xl font-black">{team.hours}</p></div>
                <div className="rounded-xl bg-black/40 p-3"><p className="text-xs font-black uppercase text-slate-500">Revenu</p><p className="text-xl font-black text-green-400">{team.revenue}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black uppercase tracking-widest text-orange-400">Alertes professionnelles (3)</h2>
        <div className="mt-5 grid gap-3">
          {alerts.map((alert) => <div key={alert} className="rounded-xl border border-red-900 bg-red-950/20 p-4 text-lg font-bold text-red-100">{alert}</div>)}
        </div>
      </section>
    </AppShell>
  );
}
