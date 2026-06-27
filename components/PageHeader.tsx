export function PageHeader(props: { eyebrow?: string; title: string; text?: string }) {
  return (
    <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm">
      {props.eyebrow ? <p className="text-lg font-black text-sky-300">{props.eyebrow}</p> : null}
      <h1 className="mt-2 text-4xl font-black leading-tight tracking-tight md:text-5xl">{props.title}</h1>
      {props.text ? <p className="large-readable mt-4 max-w-3xl text-slate-200">{props.text}</p> : null}
    </section>
  );
}
