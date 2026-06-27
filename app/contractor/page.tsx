import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { ReadableList } from "@/components/ReadableList";

export default function Contractor() {
  return (
    <AppShell>
      <PageHeader title="Sous-traitant" eyebrow="Invoice et production" text="Le sous-traitant peut puncher, cocher ses taches, declarer sa production, signer et envoyer son invoice." />
      <section className="mt-5">
        <ReadableList items={["Chantier assigne", "Production quotidienne", "Photos obligatoires", "Invoice avec signature"]} />
      </section>
    </AppShell>
  );
}
