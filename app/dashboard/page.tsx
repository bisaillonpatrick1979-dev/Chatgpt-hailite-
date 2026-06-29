import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { TrendCard } from "@/components/TrendCard";
import { FinanceMiniChart } from "@/components/FinanceMiniChart";
import { DocumentStatusCard } from "@/components/DocumentStatusCard";
import { ProjectSummaryCard } from "@/components/ProjectSummaryCard";
import { WorkerSummaryCard } from "@/components/WorkerSummaryCard";

export default function Page() {
  return (
    <AppShell>
      <section className="mb-6 rounded-2xl border border-orange-900 bg-orange-950/20 p-4">
        <p className="text-lg font-black uppercase tracking-widest text-orange-400">GPS actif · Geofencing par chantier · Mode prototype local</p>
      </section>
      <section className="pro-card p-6">
        <h1 className="text-4xl font-black leading-tight md:text-5xl">Bonjour, Patrick Bisaillon !</h1>
        <p className="mt-3 text-lg font-bold uppercase tracking-wide text-slate-400">Tableau de bord executif — Hailite Xteriors</p>
        <div className="mt-5 grid gap-3 md:grid-cols-5">
          <Link href="/admin" className="rounded-2xl bg-orange-600 p-4 text-center text-lg font-black text-white">Admin</Link>
          <Link href="/clients" className="rounded-2xl bg-slate-800 p-4 text-center text-lg font-black text-white">Clients</Link>
          <Link href="/projects" className="rounded-2xl bg-slate-800 p-4 text-center text-lg font-black text-white">Projets</Link>
          <Link href="/invoices" className="rounded-2xl bg-slate-800 p-4 text-center text-lg font-black text-white">Factures</Link>
          <Link href="/payroll" className="rounded-2xl bg-slate-800 p-4 text-center text-lg font-black text-white">Paie</Link>
        </div>
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-4">
        <TrendCard label="Revenu total" value="1538.13$" compare="+12% vs semaine passee" status="Hausse" />
        <TrendCard label="Heures totales" value="0.0h" compare="-4% vs semaine passee" status="Baisse" />
        <TrendCard label="Punches actifs" value="0 / 3" compare="Stable vs hier" status="Stable" />
        <TrendCard label="Factures dues" value="12500$" compare="+8% vs mois passe" status="A surveiller" />
      </section>
      <FinanceMiniChart />
      <section className="mt-6 grid gap-4 xl:grid-cols-3">
        <ProjectSummaryCard title="Chantier Hydro-Quebec" client="Hydro-Quebec Renovations" progress={72} />
        <DocumentStatusCard number="DEV-2026-0001" client="Jean Larouche" amount="14199.41$" status="Accepte" />
        <WorkerSummaryCard name="Mathieu Cote" role="Employe" hours="0.0h" pay="0$" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black uppercase tracking-widest text-orange-400">Actions a faire</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-950 p-5 text-xl font-black">□ Approuver invoices sous-traitants</div>
          <div className="rounded-2xl bg-slate-950 p-5 text-xl font-black">□ Valider photos finales</div>
          <div className="rounded-2xl bg-slate-950 p-5 text-xl font-black">□ Verifier paie semaine courante</div>
          <div className="rounded-2xl bg-slate-950 p-5 text-xl font-black">□ Envoyer devis accepte en contrat</div>
        </div>
      </section>
    </AppShell>
  );
}
