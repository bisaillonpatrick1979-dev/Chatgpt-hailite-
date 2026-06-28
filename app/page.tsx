import Link from "next/link";

const people = [
  { name: "Patrick Bisaillon", role: "Administrateur", initials: "PB", href: "/admin", color: "bg-orange-600" },
  { name: "Mathieu Cote", role: "Employe", initials: "MC", href: "/worker", color: "bg-blue-600" },
  { name: "Stephane Roy", role: "Sous-traitant", initials: "SR", href: "/contractor", color: "bg-purple-600" },
  { name: "Alex Tremblay", role: "Employe", initials: "AT", href: "/worker", color: "bg-green-600" }
];

export default function Root() {
  return (
    <main className="min-h-screen bg-[#070b12] p-4 text-slate-100">
      <section className="mx-auto max-w-6xl pt-6">
        <div className="rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,#1f2937,#0b0f17_55%)] p-6 shadow-2xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-600 text-4xl font-black text-white shadow-xl">HX</div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Hailite Manager</p>
                <h1 className="text-4xl font-black leading-tight md:text-6xl">Choisis ton profil</h1>
              </div>
            </div>
            <Link href="/settings" className="rounded-2xl bg-slate-800 px-5 py-4 text-center text-lg font-black text-white">Setup region</Link>
          </div>
          <p className="large-readable mt-6 max-w-4xl text-slate-300">Administrateurs, employes et sous-traitants utilisent le meme ecran. Le PIN ouvre seulement les donnees autorisees pour ce profil.</p>
        </div>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {people.map((person) => (
            <article key={person.name} className="rounded-[1.7rem] border border-slate-800 bg-[#101722] p-5 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className={`flex h-20 w-20 items-center justify-center rounded-3xl ${person.color} text-3xl font-black text-white shadow-xl`}>{person.initials}</div>
                <div>
                  <h2 className="text-2xl font-black text-white">{person.name}</h2>
                  <p className="mt-1 text-lg font-bold text-slate-400">{person.role}</p>
                </div>
              </div>
              <input className="mt-5 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-center text-2xl font-black tracking-widest text-white" placeholder="PIN" />
              <Link href={person.href} className="mt-4 flex justify-center rounded-2xl bg-orange-600 p-4 text-xl font-black text-white">Entrer</Link>
            </article>
          ))}
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="pro-card p-5"><p className="text-sm font-black uppercase tracking-widest text-slate-400">Admin</p><p className="mt-2 text-lg font-bold text-slate-300">Acces complet: employes, paie, contrats, devis, factures, finances, IA.</p></div>
          <div className="pro-card p-5"><p className="text-sm font-black uppercase tracking-widest text-slate-400">Employe</p><p className="mt-2 text-lg font-bold text-slate-300">Acces limite: mes chantiers, mes taches, mes heures et ma paie.</p></div>
          <div className="pro-card p-5"><p className="text-sm font-black uppercase tracking-widest text-slate-400">Sous-traitant</p><p className="mt-2 text-lg font-bold text-slate-300">Acces limite: production, photos, taches et invoice a la compagnie.</p></div>
        </section>
      </section>
    </main>
  );
}
