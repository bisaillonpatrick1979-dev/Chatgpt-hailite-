export function MetricCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <section className="pro-card p-5">
      <p className="text-base font-black uppercase tracking-widest text-slate-400">{label}</p>
      <p className="big-number mt-3 text-green-400">{value}</p>
      <p className="large-readable mt-3 text-slate-400">{note}</p>
    </section>
  );
}
