import { AppShell } from "@/components/AppShell";
import { TrendCard } from "@/components/TrendCard";

const projects = [
  { name: "Chantier Hydro-Quebec", client: "Hydro-Quebec Renovations", tasks: ["Changer les fascias", "Changer le soffit", "Refaire le mur sud", "Photos finales"] },
  { name: "Riviere Rouge", client: "Residence privee", tasks: ["Enlever vieux siding", "Installer house wrap", "Installer siding", "Inspection admin"] },
  { name: "Leduc", client: "Bardage exterieur", tasks: ["Mur gauche", "Mur avant", "Trims", "Nettoyage"] }
];

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Projets et taches</h1>
        <p className="large-readable mt-3 text-slate-400">Chaque chantier contient directement ses taches, sections, photos, production et geofencing.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <TrendCard label="Projets actifs" value="3" compare="+1 vs mois passe" status="Hausse" />
        <TrendCard label="Taches ouvertes" value="12" compare="-3 vs semaine passee" status="Amelioration" />
        <TrendCard label="GPS moyen" value="100m" compare="Rayon standard chantier" status="Stable" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <div className="grid gap-3 md:grid-cols-3">
          <button className="rounded-2xl bg-orange-600 p-5 text-xl font-black">Nouveau projet</button>
          <button className="rounded-2xl bg-slate-800 p-5 text-xl font-black">Utiliser ma position</button>
          <button className="rounded-2xl bg-slate-800 p-5 text-xl font-black">Choisir sur carte</button>
        </div>
        <div className="mt-6 grid gap-5">
          {projects.map((project) => (
            <article key={project.name} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h2 className="text-3xl font-black text-white">{project.name}</h2>
                  <p className="mt-2 text-lg font-bold text-slate-400">Client: {project.client}</p>
                </div>
                <span className="rounded-xl bg-green-950 px-4 py-2 text-base font-black text-green-300">Geofence actif</span>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {project.tasks.map((task) => <div key={task} className="rounded-xl border border-slate-800 bg-[#121821] p-4 text-xl font-black text-slate-100">□ {task}</div>)}
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
