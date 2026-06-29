import Link from "next/link";

const people = [
  { name: "Patrick Bisaillon", role: "Owner / Admin", initials: "PB", href: "/dashboard", accent: "from-orange-500 to-red-600", status: "Full command access", online: true },
  { name: "Mathieu Cote", role: "Employee", initials: "MC", href: "/worker", accent: "from-blue-500 to-cyan-500", status: "Jobs, punch, payroll", online: true },
  { name: "Stephane Roy", role: "Subcontractor", initials: "SR", href: "/contractor", accent: "from-violet-500 to-fuchsia-600", status: "Invoices and production", online: false },
  { name: "Alex Tremblay", role: "Employee", initials: "AT", href: "/worker", accent: "from-emerald-500 to-teal-500", status: "Assigned work only", online: false }
];

export default function Root() {
  return (
    <main className="soft-grid min-h-screen overflow-hidden text-slate-100">
      <section className="relative mx-auto grid min-h-screen max-w-[1500px] gap-8 px-5 py-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <section className="relative rounded-[2.25rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-xl lg:p-9">
          <div className="premium-glow flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-orange-500 to-orange-700 text-2xl font-black text-white">HX</div>
          <p className="mt-7 text-xs font-black uppercase tracking-[0.34em] text-orange-300">Hailite Xteriors</p>
          <h1 className="mt-3 text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">Secure field portal.</h1>
          <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-slate-300">One clean command center for crews, geofenced punch, production, work orders, payroll, invoices and AI-assisted administration.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-2xl font-black text-white">3</p><p className="text-xs font-bold text-slate-400">Active jobs</p></div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-2xl font-black text-emerald-300">$15.7k</p><p className="text-xs font-bold text-slate-400">Open value</p></div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-2xl font-black text-orange-300">CAD</p><p className="text-xs font-bold text-slate-400">Alberta GST</p></div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-2xl bg-orange-600 px-5 py-3 text-sm font-black text-white shadow-xl shadow-orange-950/40">Open demo dashboard</Link>
            <Link href="/onboarding" className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-black text-white">Setup region & AI</Link>
          </div>
        </section>

        <section className="relative">
          <div className="mb-4 flex items-center justify-between">
            <div><p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Choose profile</p><h2 className="text-3xl font-black tracking-[-0.04em] text-white">Team access</h2></div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-xs font-black text-emerald-300">2 online</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {people.map((person) => (
              <article key={person.name} className="group rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl hover:border-orange-400/30 hover:bg-white/[0.065]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-gradient-to-br ${person.accent} text-xl font-black text-white shadow-xl`}>{person.initials}</div>
                    <div>
                      <h3 className="text-xl font-black text-white">{person.name}</h3>
                      <p className="text-sm font-bold text-slate-400">{person.role}</p>
                    </div>
                  </div>
                  <span className={`mt-1 h-3 w-3 rounded-full ${person.online ? "bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" : "bg-slate-600"}`} />
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/50 p-4"><p className="text-[11px] font-black uppercase tracking-widest text-slate-500">Access scope</p><p className="mt-1 text-sm font-black text-orange-300">{person.status}</p></div>
                <input className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-center text-lg font-black tracking-[0.45em] text-white" placeholder="PIN" />
                <Link href={person.href} className="mt-4 flex justify-center rounded-2xl bg-white/[0.07] p-3 text-sm font-black text-white group-hover:bg-orange-600">Enter portal</Link>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
