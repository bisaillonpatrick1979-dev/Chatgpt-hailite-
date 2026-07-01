import Link from "next/link";

const people = [
  { name: "Patrick Bisaillon", role: "Administrateur", initials: "PB", href: "/dashboard", accent: "from-orange-500 to-red-600", note: "Acces complet" },
  { name: "Mathieu Cote", role: "Employe", initials: "MC", href: "/worker", accent: "from-blue-500 to-cyan-500", note: "Punch et paie" },
  { name: "Stephane Roy", role: "Sous-traitant", initials: "SR", href: "/contractor", accent: "from-violet-500 to-fuchsia-600", note: "Production et factures" },
  { name: "Alex Tremblay", role: "Employe", initials: "AT", href: "/worker", accent: "from-emerald-500 to-teal-500", note: "Chantiers assignes" }
];

export default function Root() {
  return (
    <main className="soft-grid min-h-screen overflow-hidden text-slate-100">
      <section className="relative mx-auto flex min-h-screen max-w-[1180px] flex-col justify-center px-5 py-8">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <header className="relative mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-orange-500 to-orange-700 text-2xl font-black text-white shadow-2xl shadow-orange-950/40">HX</div>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.34em] text-orange-300">Portail securise</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">Choisir un profil</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-6 text-slate-300">La premiere page affiche seulement les personnes autorisees. Les donnees de compagnie restent cachees avant connexion.</p>
        </header>

        <section className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {people.map((person) => (
            <article key={person.name} className="group rounded-[1.9rem] border border-white/10 bg-white/[0.045] p-5 text-center shadow-2xl backdrop-blur-xl hover:border-orange-400/35 hover:bg-white/[0.07]">
              <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br ${person.accent} text-3xl font-black text-white shadow-2xl transition group-hover:scale-[1.03]`}>{person.initials}</div>
              <h2 className="mt-5 text-xl font-black text-white">{person.name}</h2>
              <p className="mt-1 text-sm font-bold text-slate-400">{person.role}</p>
              <p className="mt-4 rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-xs font-black uppercase tracking-widest text-orange-300">{person.note}</p>
              <input className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/75 p-3 text-center text-lg font-black tracking-[0.45em] text-white" placeholder="PIN" />
              <Link href={person.href} className="mt-4 flex justify-center rounded-2xl bg-white/[0.07] p-3 text-sm font-black text-white group-hover:bg-orange-600">Entrer</Link>
            </article>
          ))}
        </section>

        <footer className="relative mt-8 flex justify-center">
          <Link href="/onboarding" className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white">Premiere utilisation / configuration</Link>
        </footer>
      </section>
    </main>
  );
}
