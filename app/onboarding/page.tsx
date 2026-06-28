import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#070b12] p-4 text-slate-100">
      <section className="mx-auto max-w-6xl pt-6">
        <div className="rounded-[2rem] border border-slate-800 bg-[#101722] p-6 shadow-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Configuration initiale</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Region, langue et IA</h1>
          <p className="large-readable mt-4 text-slate-300">Choisis le pays, la province ou l etat, les taxes, les unites et le moteur IA de la compagnie.</p>
        </div>
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="pro-card p-5"><p className="text-sm font-black uppercase tracking-widest text-slate-400">Langue</p><p className="mt-3 text-4xl font-black text-orange-400">FR</p><p className="mt-2 text-lg font-bold text-slate-300">Francais, anglais, espagnol</p></div>
          <div className="pro-card p-5"><p className="text-sm font-black uppercase tracking-widest text-slate-400">Region</p><p className="mt-3 text-4xl font-black text-blue-400">Alberta</p><p className="mt-2 text-lg font-bold text-slate-300">Canada · GST 5%</p></div>
          <div className="pro-card p-5"><p className="text-sm font-black uppercase tracking-widest text-slate-400">IA</p><p className="mt-3 text-4xl font-black text-green-400">OpenAI</p><p className="mt-2 text-lg font-bold text-slate-300">Gemini ou Claude possible</p></div>
        </section>
        <section className="pro-panel mt-6 p-6">
          <h2 className="text-3xl font-black text-white">Adaptation automatique</h2>
          <p className="large-readable mt-3 text-slate-300">Alberta utilise CAD, GST, pieds, pouces et pi2. Texas utilise USD et ses propres regles. Europe utilise EUR, TVA et metrique.</p>
          <Link href="/" className="mt-6 inline-flex rounded-2xl bg-orange-600 p-5 text-xl font-black text-white">Terminer et ouvrir les profils</Link>
        </section>
      </section>
    </main>
  );
}
