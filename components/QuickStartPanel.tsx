import Link from "next/link";

export function QuickStartPanel() {
  return (
    <section className="pro-panel mt-6 p-6">
      <h2 className="text-2xl font-black text-orange-400">Demarrage rapide</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <Link href="/admin" className="rounded-2xl bg-orange-600 p-4 text-center text-xl font-black text-white">Admin</Link>
        <Link href="/projects" className="rounded-2xl bg-slate-800 p-4 text-center text-xl font-black text-white">Projets</Link>
        <Link href="/invoices" className="rounded-2xl bg-slate-800 p-4 text-center text-xl font-black text-white">Factures</Link>
        <Link href="/worker" className="rounded-2xl bg-slate-800 p-4 text-center text-xl font-black text-white">Employe</Link>
      </div>
    </section>
  );
}
