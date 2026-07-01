import { AppShell } from "@/components/AppShell";
import { BusinessTools } from "@/components/BusinessTools";
import { RoleGate } from "@/components/RoleGate";
import { TrendCard } from "@/components/TrendCard";

export default function Page() {
  return (
    <AppShell>
      <RoleGate allowedRoles={["Administrateur"]}>
        <section className="pro-card p-6">
          <h1 className="text-5xl font-black">Clients CRM</h1>
          <p className="large-readable mt-3 text-slate-400">Clients, adresses de chantiers, historique de devis, contrats et factures.</p>
        </section>
        <section className="mt-5 grid gap-4 md:grid-cols-3">
          <TrendCard label="Clients" value="0" compare="A remplir" status="Local" />
          <TrendCard label="Devis actifs" value="1" compare="14199$ CAD" status="Ouvert" />
          <TrendCard label="Factures" value="1" compare="0$ du" status="Payee" />
        </section>
        <BusinessTools />
      </RoleGate>
    </AppShell>
  );
}
