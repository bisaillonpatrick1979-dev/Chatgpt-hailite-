import Link from "next/link";

export default function Root() {
  return (
    <main className="min-h-screen bg-[#0b0f17] p-4 text-slate-100">
      <section className="mx-auto max-w-5xl pt-8">
        <div className="rounded-3xl border border-slate-800 bg-[#101722] p-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-600 text-3xl font-black">HX</div>
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-orange-400">Premiere configuration</p>
              <h1 className="text-4xl font-black md:text-6xl">Bienvenue dans Hailite Manager</h1>
            </div>
          </div>
          <p className="large-readable mt-6 text-slate-300">Choisis la langue, le pays, la province, les taxes, la devise et les unites avant de creer ton espace administrateur.</p>
        </div>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="pro-card p-5"><p className="text-sm font-black uppercase tracking-widest text-slate-400">Langue</p><p className="mt-3 text-4xl font-black text-orange-400">FR</p><p className="mt-2 text-lg font-bold text-slate-300">Francais par defaut</p></div>
          <div className="pro-card p-5"><p className="text-sm font-black uppercase tracking-widest text-slate-400">Region</p><p className="mt-3 text-4xl font-black text-blue-400">Alberta</p><p className="mt-2 text-lg font-bold text-slate-300">Canada · GST 5%</p></div>
          <div className="pro-card p-5"><p className="text-sm font-black uppercase tracking-widest text-slate-400">Unites</p><p className="mt-3 text-4xl font-black text-green-400">pi2</p><p className="mt-2 text-lg font-bold text-slate-300">Pieds, pouces, CAD</p></div>
        </section>

        <section className="pro-panel mt-6 p-6">
          <h2 className="text-3xl font-black text-white">Etape suivante</h2>
          <p className="large-readable mt-3 text-slate-300">Apres cette configuration, l administrateur peut envoyer un lien aux employes. Les employes ouvrent leur portail, choisissent leur avatar, entrent leur code, puis voient seulement leurs chantiers, taches, heures et paie.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <Link href="/dashboard" className="rounded-2xl bg-orange-600 p-5 text-center text-xl font-black text-white">Entrer comme administrateur</Link>
            <Link href="/crew" className="rounded-2xl bg-slate-800 p-5 text-center text-xl font-black text-white">Voir portail employes</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
