import { AppShell } from "@/components/AppShell";
import { TrendCard } from "@/components/TrendCard";

export default function Admin() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Portail administration</h1>
        <p className="large-readable mt-3 text-slate-400">Centre de controle: invitations, employes, chantiers, paie, factures, finances, IA et securite.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-4">
        <TrendCard label="Employes" value="4" compare="+1 vs mois passe" status="Hausse" />
        <TrendCard label="Chantiers" value="3" compare="Stable vs semaine passee" status="Stable" />
        <TrendCard label="Paie" value="0$" compare="Semaine courante" status="A valider" />
        <TrendCard label="IA" value="ON" compare="Region: Alberta" status="Actif" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Inviter un employe</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Nom employe" />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Email ou telephone" />
          <button className="rounded-2xl bg-orange-600 p-4 text-xl font-black text-white">Envoyer invitation</button>
        </div>
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Securite portails</h2>
        <p className="large-readable mt-4 text-slate-300">Les employes voient seulement leurs chantiers, leurs taches, leurs heures, leur paie et leurs documents. Les finances et rapports admin restent caches.</p>
      </section>
    </AppShell>
  );
}
