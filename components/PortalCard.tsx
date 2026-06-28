export function PortalCard({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <section className="rounded-[1.6rem] border border-slate-800 bg-[#101722] p-5 shadow-2xl">
      <p className="text-sm font-black uppercase tracking-widest text-slate-500">{title}</p>
      <p className="mt-3 text-4xl font-black text-orange-400">{value}</p>
      <p className="mt-2 text-lg font-bold text-slate-300">{note}</p>
    </section>
  );
}
