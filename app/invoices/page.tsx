import { AppShell } from "@/components/AppShell";
import { TrendCard } from "@/components/TrendCard";
import { InvoiceCalculator } from "@/components/InvoiceCalculator";
import { SignatureBox } from "@/components/SignatureBox";
import { DocumentStatusCard } from "@/components/DocumentStatusCard";
import { InvoiceWorkflowPanel } from "@/components/InvoiceWorkflowPanel";

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Documents et factures</h1>
        <p className="large-readable mt-3 text-slate-400">Devis, contrats, factures clients, invoices sous-traitants et signatures tactiles.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <TrendCard label="Recevables" value="0$" compare="Aucun solde" status="Stable" />
        <TrendCard label="Devis signes" value="14199$" compare="+8% vs mois passe" status="Hausse" />
        <TrendCard label="Invoices" value="3" compare="A approuver" status="Action" />
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <DocumentStatusCard number="FAC-2026-0001" client="Hydro-Quebec Renovations" amount="0.00$" status="Payee" />
        <DocumentStatusCard number="DEV-2026-0001" client="Jean Larouche" amount="14199.41$" status="Accepte" />
      </section>
      <InvoiceWorkflowPanel />
      <InvoiceCalculator />
      <SignatureBox />
    </AppShell>
  );
}
