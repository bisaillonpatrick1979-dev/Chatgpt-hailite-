import { AppShell } from "@/components/AppShell";
import { MetricCard } from "@/components/MetricCard";
import { PageHeader } from "@/components/PageHeader";

export default function Page() {
  return (
    <AppShell>
      <PageHeader title="Production quotidienne" eyebrow="Quantites posees" text="Au punch out, le travailleur declare la section, le materiau, les pi2 ou pieds lineaires, les photos et sa signature." />
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <MetricCard label="Pi2 poses" value="0" note="Total declare aujourd hui." />
        <MetricCard label="Heures" value="0" note="Temps travaille moins pauses." />
        <MetricCard label="Rendement" value="0" note="Pi2 par heure." />
      </section>
    </AppShell>
  );
}
