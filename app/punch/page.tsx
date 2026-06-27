import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { ReadableList } from "@/components/ReadableList";

export default function Page() {
  return (
    <AppShell>
      <PageHeader title="Punch In / Punch Out" eyebrow="Travail terrain" text="Boutons larges, validation GPS, pause, reprise et rapport de production au punch out." />
      <section className="mt-5 grid gap-4 md:grid-cols-2">
        <button className="rounded-3xl bg-emerald-600 p-6 text-3xl font-black text-white">Punch In</button>
        <button className="rounded-3xl bg-slate-950 p-6 text-3xl font-black text-white">Punch Out</button>
      </section>
      <section className="mt-5">
        <ReadableList items={["GPS obligatoire", "Pause et reprise", "Un seul punch actif", "Production quotidienne obligatoire"]} />
      </section>
    </AppShell>
  );
}
