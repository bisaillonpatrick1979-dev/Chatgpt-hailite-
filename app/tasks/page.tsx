import { AppShell } from "@/components/AppShell";

const tasks = [
  ["Mur sud", "Installer siding", "En cours"],
  ["Devant", "Installer trims", "A faire"],
  ["Soffite", "Photo finale", "Bloque"],
  ["Fascia", "Inspection admin", "A approuver"]
];

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Checklist</h1>
        <p className="large-readable mt-3 text-slate-400">Taches par mur, section, photo obligatoire, notes et approbation admin.</p>
      </section>
      <section className="pro-panel mt-6 p-6">
        <div className="grid gap-3">
          {tasks.map(([section, task, status]) => (
            <article key={section + task} className="grid gap-3 rounded-2xl border border-slate-700 bg-slate-950 p-5 md:grid-cols-3">
              <p className="text-xl font-black text-orange-400">{section}</p>
              <p className="text-xl font-black">{task}</p>
              <p className="text-xl font-black text-green-400">{status}</p>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
