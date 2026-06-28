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
    </AppShell>
  );
}
