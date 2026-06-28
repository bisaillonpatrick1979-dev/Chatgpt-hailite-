import { AppShell } from "@/components/AppShell";
import { TrendCard } from "@/components/TrendCard";
import { ProjectBuilder } from "@/components/ProjectBuilder";

const projects = [
  { name: "Chantier Hydro-Quebec", client: "Hydro-Quebec Renovations", progress: "72%", pay: "9975$", tasks: ["Changer les fascias", "Changer le soffit", "Refaire le mur sud", "Photos finales"] },
  { name: "Riviere Rouge", client: "Residence privee", progress: "45%", pay: "4200$", tasks: ["Enlever vieux siding", "Installer house wrap", "Installer siding", "Inspection admin"] },
  { name: "Leduc", client: "Bardage exterieur", progress: "18%", pay: "1538$", tasks: ["Mur gauche", "Mur avant", "Trims", "Nettoyage"] }
];

export default function Page() {
  return (
    <AppShell>
      <section className="rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,#1f2937,#0b0f17_55%)] p-6 shadow-2xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Module chantier</p>
        <h1 className="text-5xl font-black">Projets et taches</h1>
        <p className="large-readable mt-3 text-slate-300">Chaque chantier contient ses sections, taches, photos, production, geofence et progression.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <TrendCard label="Projets actifs" value="3" compare="+1 vs mois passe" status="Hausse" />
        <TrendCard label="Taches ouvertes" value="12" compare="-3 vs semaine passee" status="Amelioration" />
        <TrendCard label="Valeur active" value="15713$" compare="CAD · chantiers ouverts" status="A suivre" />
      </section>
      <ProjectBuilder />
      <section className="pro-panel mt-6 p-6">
        <div className="mt-2 grid gap-5">
          {projects.map((project) => (
            <article key={project.name} className="rounded-2xl border border-slate-700 bg-slate-950 p-5 shadow-xl">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h2 className="text-3xl font-black text-white">{project.name}</h2>
                  <p className="mt-2 text-lg font-bold text-slate-400">Client: {project.client}</p>
                </div>
                <div className="text-left md:text-right"><p className="text-3xl font-black text-green-400">{project.progress}</p><p className="text-lg font-black text-orange-400">{project.pay}</p></div>
              </div>
              <div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-orange-500" style={{ width: project.progress }} /></div>
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
