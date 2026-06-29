import Link from "next/link";

const metrics = [
  { label: "Revenue", value: "$15.7k", change: "+12.4%", tone: "text-emerald-300", bar: "72%" },
  { label: "Active jobs", value: "3", change: "+1", tone: "text-blue-300", bar: "48%" },
  { label: "Pending invoices", value: "$12.5k", change: "Review", tone: "text-orange-300", bar: "61%" },
  { label: "Crew hours", value: "0.0h", change: "Today", tone: "text-violet-300", bar: "18%" }
];

const jobs = [
  { name: "Hydro-Quebec", client: "Commercial renovation", progress: 72, status: "On track", amount: "$9,975" },
  { name: "Riviere Rouge", client: "Private residence", progress: 45, status: "Photos needed", amount: "$4,200" },
  { name: "Leduc", client: "Exterior cladding", progress: 18, status: "Starting", amount: "$1,538" }
];

export function ExecutiveVisualDashboard() {
  return (
    <section className="grid gap-5">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025))] p-6 shadow-2xl">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex rounded-full border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-orange-300">Hailite Command Center</div>
            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">Exterior construction control, built for field speed.</h1>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-slate-300">Client-ready dashboard for jobs, crews, geofenced punch, production, documents, payroll and accounting in CAD.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" className="rounded-2xl bg-orange-600 px-5 py-3 text-sm font-black text-white shadow-xl shadow-orange-950/30">Open jobs</Link>
              <Link href="/invoices" className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-black text-white">Documents</Link>
              <Link href="/punch" className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-black text-white">Punch clock</Link>
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-white/10 bg-black/20 p-5 backdrop-blur">
            <div className="flex items-center justify-between"><p className="text-xs font-black uppercase tracking-widest text-slate-400">Today overview</p><span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-black text-emerald-300">Live</span></div>
            <div className="mt-5 flex h-48 items-end gap-2 rounded-2xl bg-slate-950/60 p-4">
              {[38, 54, 42, 70, 48, 82, 76, 92, 63, 88].map((h, i) => <span key={i} className="flex-1 rounded-t-xl bg-gradient-to-t from-orange-600 to-orange-300" style={{ height: `${h}%` }} />)}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-white/[0.045] p-3"><p className="text-xl font-black text-white">72%</p><p className="text-[11px] font-bold text-slate-400">Progress</p></div>
              <div className="rounded-2xl bg-white/[0.045] p-3"><p className="text-xl font-black text-white">$15.7k</p><p className="text-[11px] font-bold text-slate-400">Open value</p></div>
              <div className="rounded-2xl bg-white/[0.045] p-3"><p className="text-xl font-black text-white">3</p><p className="text-[11px] font-bold text-slate-400">Jobs</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {metrics.map((m) => <article key={m.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between gap-3"><p className="text-xs font-black uppercase tracking-widest text-slate-400">{m.label}</p><span className={`rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-black ${m.tone}`}>{m.change}</span></div>
          <p className="mt-3 text-3xl font-black tracking-tight text-white">{m.value}</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-emerald-400" style={{ width: m.bar }} /></div>
        </article>)}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.72fr]">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between"><h2 className="text-xl font-black text-white">Active jobs</h2><Link href="/projects" className="text-sm font-black text-orange-300">View all</Link></div>
          <div className="mt-4 grid gap-3">
            {jobs.map((job) => <div key={job.name} className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
              <div className="flex items-center justify-between gap-4"><div><p className="text-lg font-black text-white">{job.name}</p><p className="text-sm font-semibold text-slate-400">{job.client}</p></div><div className="text-right"><p className="text-lg font-black text-emerald-300">{job.amount}</p><p className="text-xs font-black text-orange-300">{job.status}</p></div></div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full rounded-full bg-orange-500" style={{ width: `${job.progress}%` }} /></div>
            </div>)}
          </div>
        </div>
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur">
          <h2 className="text-xl font-black text-white">Crew status</h2>
          <div className="mt-4 grid gap-3">
            {["Patrick", "Mathieu", "Stephane", "Alex"].map((name, i) => <div key={name} className="flex items-center justify-between rounded-2xl bg-slate-950/55 p-3">
              <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-blue-600 text-sm font-black text-white">{name.slice(0,2).toUpperCase()}</div><div><p className="font-black text-white">{name}</p><p className="text-xs font-bold text-slate-400">{i === 0 ? "Admin" : i === 2 ? "Subcontractor" : "Employee"}</p></div></div>
              <span className={`rounded-full px-3 py-1 text-xs font-black ${i === 1 ? "bg-emerald-500/15 text-emerald-300" : "bg-slate-800 text-slate-300"}`}>{i === 1 ? "On site" : "Off"}</span>
            </div>)}
          </div>
        </div>
      </section>
    </section>
  );
}
