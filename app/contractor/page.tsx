import { AppShell } from "@/components/AppShell";
import { PortalCard } from "@/components/PortalCard";

export default function Contractor() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <p className="text-sm font-black uppercase tracking-widest text-orange-400">Portail sous-traitant securise</p>
        <h1 className="text-5xl font-black">Mes contrats et invoices</h1>
        <p className="large-readable mt-3 text-slate-400">Mes chantiers, ma production, mes photos, mes invoices et mon solde seulement.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <PortalCard title="Mes pi2" value="0" note="Declares cette semaine" />
        <PortalCard title="Mes invoices" value="0" note="A envoyer" />
        <PortalCard title="Mon solde" value="0$" note="CAD personnel" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Envoyer mon invoice</h2>
        <p className="large-readable mt-4 text-slate-300">Disponible quand les taches, photos, production et signature sont completes.</p>
        <button className="mt-5 rounded-2xl bg-orange-600 p-5 text-xl font-black text-white">Creer mon invoice</button>
      </section>
    </AppShell>
  );
}
