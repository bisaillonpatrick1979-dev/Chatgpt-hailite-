export function MetricCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <section className="card-readable">
      <p className="text-lg font-black text-slate-700">{label}</p>
      <p className="big-number mt-3 text-slate-950">{value}</p>
      <p className="large-readable mt-3 text-slate-700">{note}</p>
    </section>
  );
}
