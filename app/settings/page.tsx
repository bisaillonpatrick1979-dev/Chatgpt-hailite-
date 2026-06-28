import { AppShell, ProMetric } from "@/components/AppShell";

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Reglages</h1>
        <p className="large-readable mt-3 text-slate-400">Configuration compagnie, region, stockage, langues, taxes, devises et lisibilite.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <ProMetric label="Region" value="AB" note="Alberta Canada" tone="blue" />
        <ProMetric label="Devise" value="CAD" note="GST 5%" tone="green" />
        <ProMetric label="Lecture" value="XL" note="Mode haute lisibilite" tone="orange" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Stockage des donnees</h2>
        <p className="large-readable mt-4 text-slate-300">Supabase pour le prototype, puis option local, cloud personnel, NAS ou hybride avec DataProvider.</p>
      </section>
    </AppShell>
  );
}
