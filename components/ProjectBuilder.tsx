"use client";

import { useEffect, useState } from "react";

type Job = { id: string; name: string; client: string; address: string; radius: string; tasks: string };

export function ProjectBuilder() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [address, setAddress] = useState("");
  const [radius, setRadius] = useState("328");
  const [tasks, setTasks] = useState("Changer fascia; Changer soffit; Refaire mur sud");

  useEffect(() => {
    const saved = window.localStorage.getItem("hailite_jobs");
    if (saved) setJobs(JSON.parse(saved));
  }, []);

  function save(next: Job[]) {
    setJobs(next);
    window.localStorage.setItem("hailite_jobs", JSON.stringify(next));
  }

  function add() {
    if (!name.trim()) return;
    save([...jobs, { id: crypto.randomUUID(), name, client, address, radius, tasks }]);
    setName(""); setClient(""); setAddress("");
  }

  return (
    <section className="pro-panel mt-6 p-6">
      <h2 className="text-2xl font-black text-orange-400">Creer un chantier</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Nom du chantier" />
        <input value={client} onChange={(e) => setClient(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Client" />
        <input value={address} onChange={(e) => setAddress(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Adresse" />
        <select value={radius} onChange={(e) => setRadius(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white"><option value="82">82 pieds</option><option value="164">164 pieds</option><option value="328">328 pieds</option></select>
      </div>
      <textarea value={tasks} onChange={(e) => setTasks(e.target.value)} className="mt-3 min-h-28 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Taches separees par ;" />
      <button onClick={add} className="mt-4 rounded-2xl bg-orange-600 p-4 text-xl font-black text-white">Ajouter chantier</button>
      <div className="mt-5 grid gap-3">
        {jobs.map((j) => <div key={j.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-lg font-black text-white">{j.name}<p className="text-base text-slate-400">{j.client} · {j.address} · geofence {j.radius} pi</p><p className="text-base text-orange-300">{j.tasks}</p></div>)}
      </div>
    </section>
  );
}
