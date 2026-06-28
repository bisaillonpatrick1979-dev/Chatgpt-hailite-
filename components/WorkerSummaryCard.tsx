export function WorkerSummaryCard({ name, role, hours, pay }: { name: string; role: string; hours: string; pay: string }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-xl">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-600 text-2xl font-black text-white">{name.slice(0, 2).toUpperCase()}</div>
        <div>
          <h3 className="text-2xl font-black text-white">{name}</h3>
          <p className="text-lg font-bold text-slate-400">{role}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[#101722] p-3"><p className="text-sm text-slate-500">Heures</p><p className="text-2xl font-black">{hours}</p></div>
        <div className="rounded-xl bg-[#101722] p-3"><p className="text-sm text-slate-500">Paie</p><p className="text-2xl font-black text-green-400">{pay}</p></div>
      </div>
    </article>
  );
}
