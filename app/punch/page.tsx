import { AppShell, ProMetric } from "@/components/AppShell";

export default function Page() {
  return (
    <AppShell>
      <section className="rounded-2xl bg-green-600 p-6 text-center shadow-lg">
        <h1 className="text-4xl font-black uppercase md:text-5xl">Punch In / Break optionnel / Punch Out</h1>
        <p className="mt-2 text-xl font-black text-green-100">Le gars peut faire Punch In puis Punch Out sans pause. Break total reste a 0 minute.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="pro-card p-5 md:col-span-2">
          <h2 className="text-2xl font-black">Live Maps / Geofencing</h2>
          <div className="mt-4 flex min-h-80 items-center justify-center rounded-2xl border border-green-800 bg-green-950/30 text-center">
            <div>
              <p className="text-5xl font-black text-green-400">GPS</p>
              <p className="large-readable mt-3 text-slate-300">Rayon chantier: 328 pieds</p>
              <p className="mt-2 text-lg font-bold text-slate-400">Google Maps sera connecte ici.</p>
              <p className="mt-2 text-lg font-black text-green-300">Statut: dans le geofence</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <ProMetric label="Chantier" value="Leduc" note="Selection active" tone="blue" />
          <ProMetric label="Tache" value="Siding" note="Pose de sous-couche" tone="orange" />
          <ProMetric label="Temps" value="0.0h" note="Break exclu si utilise" tone="green" />
        </div>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-5">
        <button className="rounded-3xl bg-green-600 p-6 text-2xl font-black text-white">Punch In</button>
        <button className="rounded-3xl bg-yellow-600 p-6 text-2xl font-black text-white">Break In</button>
        <button className="rounded-3xl bg-blue-600 p-6 text-2xl font-black text-white">Break Out</button>
        <button className="rounded-3xl bg-red-700 p-6 text-2xl font-black text-white">Punch Out</button>
        <button className="rounded-3xl bg-slate-800 p-6 text-xl font-black text-white">Exception GPS</button>
      </section>
      <section className="rounded-2xl border border-blue-900 bg-blue-950/30 p-5 mt-5">
        <h2 className="text-2xl font-black text-blue-200">Pause non obligatoire</h2>
        <p className="large-readable mt-2 text-blue-100">Si aucune pause est prise, ne touche pas Break In / Break Out. Le systeme calcule la journee complete avec 0 minute de break.</p>
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Rapport de fin de journee</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Quantite pi2" />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Section" />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Materiau" />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Break total minutes (0 si aucun)" defaultValue="0" />
        </div>
        <textarea className="mt-3 min-h-28 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Notes de journee, photos, problemes, extras..." />
        <button className="mt-4 rounded-2xl bg-orange-600 p-5 text-xl font-black text-white">Soumettre journee</button>
      </section>
    </AppShell>
  );
}
