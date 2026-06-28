import { AppShell, ProMetric } from "@/components/AppShell";

export default function Contractor() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Mon portail sous-traitant</h1>
        <p className="large-readable mt-3 text-slate-400">Acces limite a mes chantiers, mes taches, ma production, mes photos, mes invoices et mon solde.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <ProMetric label="Mes pi2" value="0" note="Declares cette semaine" tone="green" />
        <ProMetric label="Mes invoices" value="0" note="A envoyer" tone="orange" />
        <ProMetric label="Mon solde" value="0$" note="CAD personnel" tone="blue" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Envoyer mon invoice</h2>
        <p className="large-readable mt-4 text-slate-300">Le sous-traitant peut envoyer son invoice seulement si ses taches, photos, production et signature sont completes.</p>
        <button className="mt-5 rounded-2xl bg-orange-600 p-5 text-xl font-black text-white">Creer mon invoice</button>
      </section>
    </AppShell>
  );
}
