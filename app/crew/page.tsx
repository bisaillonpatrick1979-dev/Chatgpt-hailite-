import Link from "next/link";

const people = [
  { name: "Patrick Bisaillon", role: "Administrateur", initials: "PB", href: "/admin", color: "bg-orange-600" },
  { name: "Mathieu Cote", role: "Employe", initials: "MC", href: "/worker", color: "bg-blue-600" },
  { name: "Stephane Roy", role: "Sous-traitant", initials: "SR", href: "/contractor", color: "bg-purple-600" },
  { name: "Alex Tremblay", role: "Employe", initials: "AT", href: "/worker", color: "bg-green-600" }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#070b12] p-4 text-slate-100">
      <section className="mx-auto max-w-6xl pt-6">
        <div className="rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,#1f2937,#0b0f17_55%)] p-6 shadow-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Portail securise</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Choisis ton profil</h1>
          <p className="large-readable mt-4 max-w-4xl text-slate-300">Le meme ecran ouvre le portail admin, employe ou sous-traitant. Le PIN limite ensuite l acces aux bonnes donnees.</p>
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
      </section>
    </main>
  );
}
