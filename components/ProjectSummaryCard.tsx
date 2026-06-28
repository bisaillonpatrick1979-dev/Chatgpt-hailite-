export function ProjectSummaryCard({ title, client, progress }: { title: string; client: string; progress: number }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-xl">
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <p className="mt-1 text-lg font-bold text-slate-400">{client}</p>
      <div className="mt-4 h-4 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full bg-orange-500" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-3 text-xl font-black text-green-400">{progress}% complete</p>
    </article>
  );
}
