import { AppShell } from "@/components/AppShell";

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Area tools</h1>
        <p className="large-readable mt-3 text-slate-400">Surface, gables, waste and CAD pricing.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="pro-card p-5"><p className="text-lg font-black text-slate-400">Surface</p><p className="text-5xl font-black text-green-400">0</p></div>
        <div className="pro-card p-5"><p className="text-lg font-black text-slate-400">Waste</p><p className="text-5xl font-black text-orange-400">10%</p></div>
        <div className="pro-card p-5"><p className="text-lg font-black text-slate-400">Total</p><p className="text-5xl font-black text-blue-400">0$</p></div>
      </section>
    </AppShell>
  );
}
