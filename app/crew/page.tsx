import Link from "next/link";

const employees = [
  { name: "Mathieu Cote", role: "Siding", initials: "MC" },
  { name: "Stephane Roy", role: "Soffit Fascia", initials: "SR" },
  { name: "Alex Tremblay", role: "Foreman", initials: "AT" },
  { name: "Patrick Bisaillon", role: "Admin", initials: "PB" }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0f17] p-4 text-slate-100">
      <section className="mx-auto max-w-5xl pt-8">
        <div className="rounded-3xl border border-slate-800 bg-[#101722] p-6 shadow-2xl">
          <p className="text-sm font-black uppercase tracking-widest text-orange-400">Portail employes</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Choisis ton nom</h1>
          <p className="large-readable mt-4 text-slate-300">Clique sur ton avatar, entre ton code d acces, puis ouvre tes chantiers, tes taches, tes heures et ta paie.</p>
        </div>
        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {employees.map((employee) => (
            <article key={employee.name} className="pro-card p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-600 text-3xl font-black text-white">{employee.initials}</div>
                <div>
                  <h2 className="text-3xl font-black text-white">{employee.name}</h2>
                  <p className="mt-1 text-lg font-bold text-slate-400">{employee.role}</p>
                </div>
              </div>
              <input className="mt-5 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-2xl font-black text-white" placeholder="Code d acces" />
              <Link href="/worker" className="mt-4 flex rounded-2xl bg-green-600 p-4 text-center text-xl font-black text-white">Entrer</Link>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
