export function FinanceMiniChart() {
  return (
    <section className="pro-panel mt-6 p-6">
      <h2 className="text-2xl font-black text-orange-400">Resume financier</h2>
      <div className="mt-5 flex h-48 items-end gap-3 rounded-2xl bg-slate-950 p-5">
        <span className="h-16 flex-1 rounded bg-slate-700" />
        <span className="h-24 flex-1 rounded bg-slate-600" />
        <span className="h-32 flex-1 rounded bg-blue-500" />
        <span className="h-20 flex-1 rounded bg-slate-700" />
        <span className="h-40 flex-1 rounded bg-orange-500" />
        <span className="h-44 flex-1 rounded bg-green-500" />
      </div>
    </section>
  );
}
