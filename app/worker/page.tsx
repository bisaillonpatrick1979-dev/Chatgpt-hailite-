import { AppShell, ProMetric } from "@/components/AppShell";

export default function Worker() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Portail employe</h1>
        <p className="large-readable mt-3 text-slate-400">Chantier assigne, punch, taches, photos, heures et signature de journee.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <ProMetric label="Heures" value="0.0" note="Cette semaine" tone="blue" />
        <ProMetric label="Taches" value="4" note="Assignees" tone="orange" />
        <ProMetric label="Paie" value="0$" note="Estimation CAD" tone="green" />
      </section>
    </AppShell>
  );
}
