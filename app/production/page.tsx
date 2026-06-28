import { AppShell } from "@/components/AppShell";
import { TrendCard } from "@/components/TrendCard";

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Production</h1>
        <p className="large-readable mt-3 text-slate-400">Quantites posees par jour, travailleur, section et mode de paiement.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-4">
        <TrendCard label="Pi2" value="0" compare="Stable vs semaine passee" status="Stable" />
        <TrendCard label="Heures" value="0.0" compare="-4% vs semaine passee" status="Baisse" />
        <TrendCard label="Rendement" value="0" compare="+0% vs mois passe" status="Stable" />
        <TrendCard label="A payer" value="0$" compare="CAD · semaine courante" status="A valider" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Rapport au punch out</h2>
        <p className="large-readable mt-4 text-slate-300">Section, materiau, quantite, photos, notes et signature tactile.</p>
      </section>
    </AppShell>
  );
}
