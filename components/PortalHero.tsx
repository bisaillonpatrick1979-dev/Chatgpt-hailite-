export function PortalHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,#253244,#0b0f17_55%)] p-6 shadow-2xl">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">{eyebrow}</p>
      <h1 className="mt-2 text-5xl font-black text-white">{title}</h1>
      <p className="large-readable mt-3 text-slate-300">{text}</p>
    </section>
  );
}
