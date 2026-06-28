import { AppShell } from "@/components/AppShell";
import { TrendCard } from "@/components/TrendCard";

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Documents et factures</h1>
        <p className="large-readable mt-3 text-slate-400">Devis, contrats, factures clients, invoices sous-traitants et signatures tactiles.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <TrendCard label="Recevables" value="0$" compare="-100% vs mois passe" status="Baisse" />
        <TrendCard label="Devis signes" value="14199$" compare="+8% vs mois passe" status="Hausse" />
        <TrendCard label="Invoices" value="3" compare="A approuver cette semaine" status="Action" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <div className="grid gap-3 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <p className="text-xl font-black">FAC-2026-0001</p>
            <h2 className="mt-2 text-2xl font-black">Hydro-Quebec Renovations</h2>
            <p className="mt-3 text-lg font-black text-green-400">Paye · 0.00$ du</p>
          </article>
          <article className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <p className="text-xl font-black">DEV-2026-0001</p>
            <h2 className="mt-2 text-2xl font-black">Jean Larouche</h2>
            <p className="mt-3 text-lg font-black text-orange-400">Accepte · 14199.41$</p>
          </article>
        </div>
      </section>
    </AppShell>
  );
}
