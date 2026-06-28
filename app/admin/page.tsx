import { AppShell } from "@/components/AppShell";
import { TrendCard } from "@/components/TrendCard";
import { AdminTools } from "@/components/AdminTools";
import { BusinessTools } from "@/components/BusinessTools";
import { PayrollMini } from "@/components/PayrollMini";
import { CatalogTools } from "@/components/CatalogTools";
import { InventoryTools } from "@/components/InventoryTools";
import { SignatureBox } from "@/components/SignatureBox";
import { InvoiceCalculator } from "@/components/InvoiceCalculator";

export default function Admin() {
  return (
    <AppShell>
      <section className="rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,#1f2937,#0b0f17_55%)] p-6 shadow-2xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Administration complete</p>
        <h1 className="text-5xl font-black">Centre de controle</h1>
        <p className="large-readable mt-3 text-slate-300">Employes, clients, sous-traitants, chantiers, contrats, devis, factures, catalogue, inventaire, paie, signatures, finances, IA et securite.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-4">
        <TrendCard label="Employes" value="4" compare="+1 vs mois passe" status="Hausse" />
        <TrendCard label="Clients" value="0" compare="CRM local actif" status="A remplir" />
        <TrendCard label="Documents" value="0" compare="Devis contrats factures" status="Brouillon" />
        <TrendCard label="IA" value="ON" compare="Mode demo local" status="Actif" />
      </section>
      <AdminTools />
      <BusinessTools />
      <InvoiceCalculator />
      <SignatureBox />
      <CatalogTools />
      <InventoryTools />
      <PayrollMini />
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Securite portails</h2>
        <p className="large-readable mt-4 text-slate-300">Employes et sous-traitants voient seulement leurs donnees. Les clients, finances, profits, devis, contrats et rapports admin restent caches.</p>
      </section>
    </AppShell>
  );
}
