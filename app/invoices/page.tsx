import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { ReadableList } from "@/components/ReadableList";

export default function Page() {
  return (
    <AppShell>
      <PageHeader title="Invoices" eyebrow="Factures et paiements" text="Factures clients, invoices sous-traitants, signatures tactiles, approbations et statuts de paiement." />
      <section className="mt-5">
        <ReadableList items={["Facture client", "Invoice sous-traitant", "Signature tactile obligatoire", "Approbation admin avant paiement"]} />
      </section>
    </AppShell>
  );
}
