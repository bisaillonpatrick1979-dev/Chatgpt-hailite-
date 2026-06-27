import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { ReadableList } from "@/components/ReadableList";

export default function Page() {
  return (
    <AppShell>
      <PageHeader title="Chantiers" eyebrow="GPS et geofencing" text="Cree un chantier avec ta position actuelle, une carte Google Maps ou une adresse." />
      <section className="mt-5">
        <ReadableList items={["Utiliser ma position actuelle", "Choisir sur Google Maps", "Entrer une adresse", "Rayon 82 pi, 164 pi ou 328 pi"]} />
      </section>
    </AppShell>
  );
}
