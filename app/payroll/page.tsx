import { AppShell } from "@/components/AppShell";
import { PayrollMini } from "@/components/PayrollMini";
import { TrendCard } from "@/components/TrendCard";

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Paie</h1>
        <p className="large-readable mt-3 text-slate-400">Calcul rapide des heures, avances, sous-traitants et soldes en CAD.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <TrendCard label="Heures" value="0.0" compare="Semaine courante" status="A valider" />
        <TrendCard label="Avances" value="0$" compare="CAD" status="Stable" />
        <TrendCard label="Total paie" value="0$" compare="Avant approbation" status="Brouillon" />
      </section>
      <PayrollMini />
    </AppShell>
  );
}
