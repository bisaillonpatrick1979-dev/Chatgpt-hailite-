import { AppShell, ProMetric } from "@/components/AppShell";

const teams = [
  { name: "Poseurs de Toiture Elite", members: "0 / 2", hours: "0.0h", revenue: "0$", color: "border-cyan-400" },
  { name: "Gardiens Modernes du Revetement", members: "0 / 2", hours: "0.0h", revenue: "0$", color: "border-purple-500" }
];

const alerts = [
  "Inventaire critique: rouleaux membrane sous-couche 15lb sous le seuil minimum.",
  "Conformite CCQ expiree: certificat a mettre a jour.",
  "Regulation heures supplementaires: approche de la limite de 40h."
];

export default function Root() {
  return (
    <AppShell>
      <section className="mb-6 rounded-2xl border border-orange-900 bg-orange-950/20 p-4">
        <p className="text-lg font-black uppercase tracking-widest text-orange-400">● Reglages proximite : GPS reel</p>
      </section>

      <section className="pro-card p-6">
        <h1 className="text-4xl font-black leading-tight md:text-5xl">Bonjour, Patrick Bisaillon !</h1>
        <p className="mt-3 text-lg font-bold uppercase tracking-wide text-slate-400">Gestion administrative complete activee — Hailite Xteriors</p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <ProMetric label="Punches actifs" value="0 / 3" note="En chantier actif" tone="orange" />
        <ProMetric label="Heures totales" value="0.0h" note="Calcule depuis l ouverture" tone="blue" />
        <ProMetric label="Revenu total" value="1538.13$" note="Valeur brute accumulee" tone="green" />
      </section>

      <section className="pro-panel mt-6 p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-black uppercase tracking-widest text-orange-400">Suivi des equipes en direct (2)</h2>
          <span className="rounded-lg bg-cyan-950 px-4 py-2 text-sm font-black text-cyan-300">Activite temps-reel</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {teams.map((team) => (
            <article key={team.name} className={`rounded-2xl border-l-8 ${team.color} bg-slate-950 p-5`}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-black leading-tight">{team.name}</h3>
                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-black text-slate-400">Inactif</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-black/40 p-3"><p className="text-xs font-black uppercase text-slate-500">Membres</p><p className="text-xl font-black">{team.members}</p></div>
                <div className="rounded-xl bg-black/40 p-3"><p className="text-xs font-black uppercase text-slate-500">Heures</p><p className="text-xl font-black">{team.hours}</p></div>
                <div className="rounded-xl bg-black/40 p-3"><p className="text-xs font-black uppercase text-slate-500">Revenu</p><p className="text-xl font-black text-green-400">{team.revenue}</p></div>
              </div>
              <p className="mt-4 text-base font-bold text-slate-300">📍 Chantier : <span className="font-black text-white">Aucun</span></p>
            </article>
          ))}
        </div>
      </section>

      <section className="pro-panel mt-6 p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-black uppercase tracking-widest text-orange-400">Urgence & alertes de conformite (3)</h2>
          <span className="rounded-lg bg-red-950 px-4 py-2 text-sm font-black text-red-300">RH Attention</span>
        </div>
        <div className="grid gap-3">
          {alerts.map((alert) => (
            <div key={alert} className="rounded-xl border border-red-900 bg-red-950/20 p-4 text-lg font-bold text-red-100">🛡️ {alert}</div>
          ))}
        </div>
      </section>

      <section className="pro-panel mt-6 overflow-hidden p-6">
        <h2 className="text-2xl font-black uppercase tracking-widest text-slate-400">Historique recent des chantiers</h2>
        <div className="mt-5 grid gap-3 text-lg">
          <div className="grid grid-cols-4 gap-3 border-b border-slate-700 pb-3 text-sm font-black uppercase text-slate-500"><span>Ouvrier</span><span>Projet</span><span>Mode</span><span>Remuneration</span></div>
          <div className="grid grid-cols-4 gap-3 border-b border-slate-800 py-3 font-bold"><span>Mathieu Cote</span><span>Chantier Hydro-Quebec</span><span>Horaire</span><span className="text-green-400">228.00$</span></div>
          <div className="grid grid-cols-4 gap-3 py-3 font-bold"><span>Stephane Roy</span><span>Condos Concorde</span><span>Surface</span><span className="text-green-400">625.00$</span></div>
        </div>
      </section>
    </AppShell>
  );
}
