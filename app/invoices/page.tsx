import { AppShell } from "@/components/AppShell";
import { InvoiceCalculator } from "@/components/InvoiceCalculator";
import { SignatureBox } from "@/components/SignatureBox";
import { InvoiceWorkflowPanel } from "@/components/InvoiceWorkflowPanel";
import { RoleGate } from "@/components/RoleGate";

export default function Page() {
  return (
    <AppShell>
      <RoleGate allowedRoles={["Administrateur", "Sous-traitant"]}>
        <section className="pro-card p-6">
          <h1 className="text-5xl font-black">Documents et factures</h1>
          <p className="large-readable mt-3 text-slate-400">Documents accessibles seulement aux admins et sous-traitants.</p>
        </section>
        <InvoiceWorkflowPanel />
        <InvoiceCalculator />
        <SignatureBox />
      </RoleGate>
    </AppShell>
  );
}
