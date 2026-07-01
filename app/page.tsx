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
      <section className="relative mx-auto flex min-h-screen max-w-[760px] flex-col justify-center px-4 py-8">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <header className="relative mb-7 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-xl font-black text-white shadow-2xl shadow-orange-950/40">HX</div>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.34em] text-orange-300">Portail securise</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">Choisir un profil</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-6 text-slate-300">Aucune donnee de compagnie n'est visible avant la connexion.</p>
        </header>

        <section className="relative grid gap-3">
          {people.map((person) => (
            <article key={person.name} className="group flex items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-3 shadow-xl backdrop-blur-xl hover:border-orange-400/35 hover:bg-white/[0.07]">
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${person.accent} text-lg font-black text-white shadow-xl transition group-hover:scale-[1.03]`}>{person.initials}</div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h2 className="truncate text-lg font-black text-white">{person.name}</h2>
                    <p className="text-sm font-bold text-slate-400">{person.role}</p>
                  </div>
                  <p className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-orange-300">{person.note}</p>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto]">
                  <input className="w-full rounded-xl border border-white/10 bg-slate-950/75 p-3 text-center text-base font-black tracking-[0.38em] text-white" placeholder="PIN" />
                  <Link href={person.href} className="flex min-w-28 justify-center rounded-xl bg-white/[0.07] px-4 py-3 text-sm font-black text-white group-hover:bg-orange-600">Entrer</Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <footer className="relative mt-7 flex justify-center">
          <Link href="/onboarding" className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white">Premiere utilisation / configuration</Link>
        </footer>
      </section>
    </main>
  );
}
