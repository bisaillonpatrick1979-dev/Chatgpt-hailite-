export function DocumentStatusCard({ number, client, amount, status }: { number: string; client: string; amount: string; status: string }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-xl">
      <p className="text-sm font-black uppercase tracking-widest text-slate-500">{number}</p>
      <h3 className="mt-2 text-2xl font-black text-white">{client}</h3>
      <p className="mt-3 text-3xl font-black text-green-400">{amount}</p>
      <p className="mt-2 rounded-xl bg-orange-950 p-3 text-lg font-black text-orange-300">{status}</p>
    </article>
  );
}
