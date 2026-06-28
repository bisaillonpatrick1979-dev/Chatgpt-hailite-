import { AppShell, ProMetric } from "@/components/AppShell";

export default function Page() {
  return (
    <AppShell>
      <section className="rounded-2xl bg-green-600 p-6 text-center shadow-lg">
        <h1 className="text-4xl font-black uppercase md:text-5xl">Punch In - Commencer la journee</h1>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="pro-card p-5 md:col-span-2">
          <h2 className="text-2xl font-black">Live Maps / Geofencing</h2>
          <div className="mt-4 flex min-h-80 items-center justify-center rounded-2xl border border-green-800 bg-green-950/30 text-center">
            <div>
              <p className="text-5xl font-black text-green-400">GPS</p>
              <p className="large-readable mt-3 text-slate-300">Rayon chantier: 200 pieds / 60 metres</p>
              <p className="mt-2 text-lg font-bold text-slate-400">Google Maps sera connecte ici.</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <ProMetric label="Chantier" value="Leduc" note="Selection active" tone="blue" />
          <ProMetric label="Tache" value="Siding" note="Pose de sous-couche" tone="orange" />
        </div>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-2">
        <button className="rounded-3xl bg-green-600 p-6 text-3xl font-black text-white">Punch In</button>
        <button className="rounded-3xl bg-slate-800 p-6 text-3xl font-black text-white">Demande exception GPS</button>
      </section>
    </AppShell>
  );
}
