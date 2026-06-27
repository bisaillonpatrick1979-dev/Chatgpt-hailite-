import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { ReadableList } from "@/components/ReadableList";

export default function Page() {
  return (
    <AppShell>
      <PageHeader title="Calculatrice" eyebrow="Superficie et materiaux" text="Calcule rectangles, pignons, cercles, ouvertures, pertes et prix en CAD avec pieds, pouces et pi2." />
      <section className="mt-5">
        <ReadableList items={["Rectangle: longueur x hauteur", "Pignon: base x hauteur / 2", "Cercle: rayon x rayon x pi", "Ajouter pertes: 5%, 10%, 15%"]} />
      </section>
    </AppShell>
  );
}
