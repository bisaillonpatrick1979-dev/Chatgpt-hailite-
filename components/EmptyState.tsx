export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950 p-6 text-center">
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <p className="large-readable mt-2 text-slate-400">{text}</p>
    </div>
  );
}
