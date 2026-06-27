import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { ReadableList } from "@/components/ReadableList";

export default function Page() {
  return (
    <AppShell>
      <PageHeader title="Checklist" eyebrow="Taches par section" text="Chaque mur, soffite, fascia ou section peut avoir ses taches, photos obligatoires et approbations." />
      <section className="mt-5">
        <ReadableList items={["Mur sud - Installer siding", "Devant - Installer trims", "Soffite - Photo finale", "Fascia - Inspection admin"]} />
      </section>
    </AppShell>
  );
}
