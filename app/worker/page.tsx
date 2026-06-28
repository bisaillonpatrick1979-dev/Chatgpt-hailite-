import { AppShell, ProMetric } from "@/components/AppShell";

export default function Worker() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Mon portail employe</h1>
        <p className="large-readable mt-3 text-slate-400">Acces limite a mes donnees: mes chantiers, mes taches, mes heures, ma paie, mes photos et mes documents.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <ProMetric label="Mes heures" value="0.0" note="Cette semaine" tone="blue" />
        <ProMetric label="Mes taches" value="4" note="Assignees a moi" tone="orange" />
        <ProMetric label="Ma paie" value="0$" note="Estimation personnelle" tone="green" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Donnees visibles</h2>
        <p className="large-readable mt-4 text-slate-300">L employe ne voit pas les finances de compagnie, les profits, les autres travailleurs ou les rapports administratifs.</p>
      </section>
    </AppShell>
  );
}
