import Link from "next/link";

export default function Page() {
  return (
    <main className="soft-grid min-h-screen text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-8">
        <header className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 text-center shadow-2xl backdrop-blur-xl">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-orange-300">Premiere utilisation</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">Configuration initiale</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-6 text-slate-300">Avant d'afficher les profils, le proprietaire configure la region, les taxes, les unites, le stockage et les portails.</p>
        </header>

        <section className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">1 · Region</p>
            <div className="mt-4 grid gap-3">
              <select className="rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm font-bold text-white"><option>Canada</option><option>United States</option><option>Europe</option></select>
              <select className="rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm font-bold text-white"><option>Alberta</option><option>Quebec</option><option>Texas</option><option>Other</option></select>
              <select className="rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm font-bold text-white"><option>Francais</option><option>English</option></select>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">2 · Taxes et unites</p>
            <div className="mt-4 grid gap-3">
              <input className="rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm font-bold text-white" defaultValue="GST 5%" />
              <select className="rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm font-bold text-white"><option>Pieds / pouces / pi2</option><option>Metrique</option></select>
              <select className="rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm font-bold text-white"><option>CAD</option><option>USD</option><option>EUR</option></select>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">3 · Stockage</p>
            <div className="mt-4 grid gap-3">
              <select className="rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm font-bold text-white"><option>Local appareil</option><option>Supabase</option><option>Google Drive</option><option>iCloud</option><option>NAS</option></select>
              <p className="text-sm font-semibold leading-6 text-slate-300">La demo fonctionne localement. Supabase sera utilise pour multi-utilisateur reel.</p>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">4 · Portails</p>
            <div className="mt-4 grid gap-2 text-sm font-bold text-slate-200">
              <p className="rounded-xl bg-slate-950/60 p-3">Admin voit tout</p>
              <p className="rounded-xl bg-slate-950/60 p-3">Employe voit punch, taches et paie</p>
              <p className="rounded-xl bg-slate-950/60 p-3">Sous-traitant voit production et factures</p>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-[1.6rem] border border-orange-400/20 bg-orange-500/10 p-5 text-center shadow-xl">
          <p className="text-sm font-semibold leading-6 text-orange-100">Une fois configure, l'application revient a la liste verticale des profils. Aucune donnee de compagnie n'apparait avant connexion par PIN.</p>
          <Link href="/" className="mt-4 inline-flex rounded-2xl bg-orange-600 px-6 py-3 text-sm font-black text-white">Terminer et ouvrir les profils</Link>
        </section>
      </section>
    </main>
  );
}
