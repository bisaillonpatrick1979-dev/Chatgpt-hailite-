import Link from "next/link";
import { AppShell } from "@/components/AppShell";

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Taches integrees aux projets</h1>
        <p className="large-readable mt-3 text-slate-400">Les taches sont maintenant gerees directement dans chaque chantier.</p>
        <Link href="/projects" className="mt-6 inline-flex rounded-2xl bg-orange-600 px-6 py-4 text-xl font-black text-white">Ouvrir les projets</Link>
      </section>
    </AppShell>
  );
}
