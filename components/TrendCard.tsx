type Props = {
  label: string;
  value: string;
  compare: string;
  status: string;
};

export function TrendCard({ label, value, compare, status }: Props) {
  return (
    <section className="pro-card p-5">
      <p className="text-sm font-black uppercase tracking-widest text-slate-400">{label}</p>
      <p className="mt-3 text-4xl font-black text-green-400">{value}</p>
      <p className="mt-2 text-base font-bold text-slate-300">{compare}</p>
      <p className="mt-2 text-lg font-black text-orange-400">{status}</p>
      <div className="mt-4 flex h-12 items-end gap-1">
        <span className="h-4 flex-1 rounded bg-slate-700" />
        <span className="h-7 flex-1 rounded bg-slate-600" />
        <span className="h-5 flex-1 rounded bg-slate-700" />
        <span className="h-10 flex-1 rounded bg-orange-500" />
        <span className="h-12 flex-1 rounded bg-green-500" />
      </div>
    </section>
  );
}
