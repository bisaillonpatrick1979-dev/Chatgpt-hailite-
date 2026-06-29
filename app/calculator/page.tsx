import { AppShell } from "@/components/AppShell";

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Calculatrice construction</h1>
        <p className="large-readable mt-3 text-slate-400">Surface, pignons, pertes, pieds carres, prix CAD et preparation de devis.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="pro-card p-5"><p className="text-lg font-black text-slate-400">Surface</p><p className="text-5xl font-black text-green-400">0 pi2</p></div>
        <div className="pro-card p-5"><p className="text-lg font-black text-slate-400">Pertes</p><p className="text-5xl font-black text-orange-400">10%</p></div>
        <div className="pro-card p-5"><p className="text-lg font-black text-slate-400">Total</p><p className="text-5xl font-black text-blue-400">0$ CAD</p></div>
      </section>
      <section className="mt-6 grid gap-4 xl:grid-cols-2">
        <section className="pro-panel p-6">
          <h2 className="text-2xl font-black text-orange-400">Rectangle / mur</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Largeur pieds" />
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Hauteur pieds" />
          </div>
          <button className="mt-4 rounded-2xl bg-orange-600 p-5 text-xl font-black text-white">Calculer mur</button>
          <div className="mt-4 rounded-2xl bg-slate-950 p-5 text-2xl font-black text-green-400">Surface: 0 pi2</div>
        </section>
        <section className="pro-panel p-6">
          <h2 className="text-2xl font-black text-orange-400">Triangle / pignon</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Base pieds" />
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Hauteur pieds" />
          </div>
          <button className="mt-4 rounded-2xl bg-orange-600 p-5 text-xl font-black text-white">Calculer pignon</button>
          <div className="mt-4 rounded-2xl bg-slate-950 p-5 text-2xl font-black text-green-400">Surface: 0 pi2</div>
        </section>
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Estimation materiaux</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Total pi2" />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Pertes %" defaultValue="10" />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Prix/pi2 CAD" />
          <button className="rounded-2xl bg-green-600 p-4 text-xl font-black text-white">Estimer</button>
        </div>
        <div className="mt-4 rounded-2xl bg-green-950 p-5 text-3xl font-black text-green-300">Total estime: 0$ CAD</div>
      </section>
    </AppShell>
  );
}
