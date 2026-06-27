import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { ReadableList } from "@/components/ReadableList";

export default function Worker() {
  return (
    <AppShell>
      <PageHeader title="Employe" eyebrow="Portail terrain" text="L employe voit seulement son chantier, son punch, ses taches, ses photos, ses heures et sa journee." />
      <section className="mt-5">
        <ReadableList items={["Punch In / Punch Out", "Taches assignees", "Photos de preuve", "Signature de journee"]} />
      </section>
    </AppShell>
  );
}
