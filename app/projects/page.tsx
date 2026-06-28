import { AppShell, ProMetric } from "@/components/AppShell";

const jobs = ["Riviere Rouge", "Leduc", "Condos Concorde", "Hydro-Quebec"];

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Chantiers</h1>
        <p className="large-readable mt-3 text-slate-400">Creation chantier avec position actuelle, Google Maps, adresse et rayon de geofencing.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <ProMetric label="Actifs" value="3" note="Chantiers ouverts" tone="green" />
        <ProMetric label="GPS" value="100m" note="Rayon moyen" tone="blue" />
        <ProMetric label="Taches" value="18" note="A completer" tone="orange" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <div className="grid gap-3 md:grid-cols-3">
          <button className="rounded-2xl bg-orange-600 p-5 text-xl font-black">Utiliser ma position</button>
          <button className="rounded-2xl bg-slate-800 p-5 text-xl font-black">Choisir sur carte</button>
          <button className="rounded-2xl bg-slate-800 p-5 text-xl font-black">Entrer adresse</button>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {jobs.map((job) => <article key={job} className="rounded-2xl border border-slate-700 bg-slate-950 p-5 text-xl font-black">📍 {job}<p className="mt-2 text-base text-slate-400">Geofence actif · sections et checklist</p></article>)}
        </div>
      </section>
    </AppShell>
  );
}
