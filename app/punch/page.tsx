import { AppShell } from "@/components/AppShell";
import { LiveMvpConsole } from "@/components/LiveMvpConsole";

export default function Page() {
  return (
    <AppShell>
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <p className="relative text-xs font-black uppercase tracking-[0.3em] text-emerald-300">Punch clock live</p>
        <h1 className="relative mt-2 text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">Punch, breaks and production.</h1>
        <p className="relative mt-3 max-w-3xl text-base font-semibold leading-7 text-slate-300">Breaks are optional. Workers can Punch In then Punch Out directly. If they take a break, Break In and Break Out are tracked and excluded from worked time.</p>
      </section>
      <div className="mt-5">
        <LiveMvpConsole />
      </div>
    </AppShell>
  );
}
