"use client";

import { useEffect, useMemo, useState } from "react";

type Worker = { id: string; name: string; role: "employee" | "subcontractor"; rate: number; pin: string };
type Client = { id: string; name: string; phone: string; address: string };
type Project = { id: string; name: string; client: string; address: string; value: number; progress: number };
type Document = { id: string; type: "quote" | "contract" | "invoice"; client: string; amount: number; status: string };

const seedWorkers: Worker[] = [
  { id: "w1", name: "Mathieu Cote", role: "employee", rate: 32, pin: "1234" },
  { id: "w2", name: "Stephane Roy", role: "subcontractor", rate: 12, pin: "2222" }
];
const seedClients: Client[] = [{ id: "c1", name: "Hydro-Quebec Renovations", phone: "403-000-0000", address: "Leduc, AB" }];
const seedProjects: Project[] = [{ id: "p1", name: "Chantier Hydro-Quebec", client: "Hydro-Quebec Renovations", address: "Leduc, AB", value: 9975, progress: 72 }];
const seedDocs: Document[] = [{ id: "d1", type: "quote", client: "Jean Larouche", amount: 14199.41, status: "accepted" }];

export function BusinessManagerLive() {
  const [workers, setWorkers] = useState(seedWorkers);
  const [clients, setClients] = useState(seedClients);
  const [projects, setProjects] = useState(seedProjects);
  const [docs, setDocs] = useState(seedDocs);
  const [workerName, setWorkerName] = useState("");
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("hailite_business_live");
    if (saved) {
      const data = JSON.parse(saved);
      setWorkers(data.workers || seedWorkers);
      setClients(data.clients || seedClients);
      setProjects(data.projects || seedProjects);
      setDocs(data.docs || seedDocs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hailite_business_live", JSON.stringify({ workers, clients, projects, docs }));
  }, [workers, clients, projects, docs]);

  const revenue = useMemo(() => projects.reduce((sum, p) => sum + p.value, 0), [projects]);
  const payroll = useMemo(() => workers.reduce((sum, w) => sum + w.rate * 8, 0), [workers]);
  const profit = revenue - payroll;

  function addWorker() {
    if (!workerName.trim()) return;
    setWorkers((prev) => [...prev, { id: crypto.randomUUID(), name: workerName, role: "employee", rate: 30, pin: "0000" }]);
    setWorkerName("");
  }
  function addClient() {
    if (!clientName.trim()) return;
    setClients((prev) => [...prev, { id: crypto.randomUUID(), name: clientName, phone: "", address: "Calgary, AB" }]);
    setClientName("");
  }
  function addProject() {
    if (!projectName.trim()) return;
    setProjects((prev) => [...prev, { id: crypto.randomUUID(), name: projectName, client: clients[0]?.name || "Client", address: "Calgary, AB", value: 0, progress: 0 }]);
    setProjectName("");
  }
  function makeInvoice() {
    setDocs((prev) => [...prev, { id: crypto.randomUUID(), type: "invoice", client: clients[0]?.name || "Client", amount: 0, status: "draft" }]);
  }

  return (
    <section className="grid gap-5">
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-300">Live company manager</p>
        <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">Gestion complete testable localement</h2>
        <p className="mt-2 text-sm font-semibold text-slate-400">Employes, clients, projets, documents et finances. Sauvegarde automatique dans le navigateur.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5"><p className="text-xs font-black uppercase text-slate-500">Revenue</p><p className="mt-2 text-3xl font-black text-emerald-300">{revenue.toFixed(2)}$</p></div>
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5"><p className="text-xs font-black uppercase text-slate-500">Payroll demo</p><p className="mt-2 text-3xl font-black text-orange-300">{payroll.toFixed(2)}$</p></div>
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5"><p className="text-xs font-black uppercase text-slate-500">Profit</p><p className="mt-2 text-3xl font-black text-blue-300">{profit.toFixed(2)}$</p></div>
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5"><p className="text-xs font-black uppercase text-slate-500">Documents</p><p className="mt-2 text-3xl font-black text-violet-300">{docs.length}</p></div>
      </section>

      <section className="grid gap-4 xl:grid-cols-4">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl">
          <h3 className="text-lg font-black text-white">Employees</h3>
          <div className="mt-3 flex gap-2"><input value={workerName} onChange={(e) => setWorkerName(e.target.value)} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/60 p-3 text-sm font-bold text-white" placeholder="Name" /><button onClick={addWorker} className="rounded-xl bg-orange-600 px-4 text-sm font-black text-white">Add</button></div>
          <div className="mt-4 grid gap-2">{workers.map((w) => <div key={w.id} className="rounded-xl bg-slate-950/55 p-3"><p className="font-black text-white">{w.name}</p><p className="text-xs font-bold text-slate-400">{w.role} · {w.rate}$/h · PIN {w.pin}</p></div>)}</div>
        </div>
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl">
          <h3 className="text-lg font-black text-white">Clients</h3>
          <div className="mt-3 flex gap-2"><input value={clientName} onChange={(e) => setClientName(e.target.value)} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/60 p-3 text-sm font-bold text-white" placeholder="Client" /><button onClick={addClient} className="rounded-xl bg-orange-600 px-4 text-sm font-black text-white">Add</button></div>
          <div className="mt-4 grid gap-2">{clients.map((c) => <div key={c.id} className="rounded-xl bg-slate-950/55 p-3"><p className="font-black text-white">{c.name}</p><p className="text-xs font-bold text-slate-400">{c.address}</p></div>)}</div>
        </div>
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl">
          <h3 className="text-lg font-black text-white">Projects</h3>
          <div className="mt-3 flex gap-2"><input value={projectName} onChange={(e) => setProjectName(e.target.value)} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/60 p-3 text-sm font-bold text-white" placeholder="Project" /><button onClick={addProject} className="rounded-xl bg-orange-600 px-4 text-sm font-black text-white">Add</button></div>
          <div className="mt-4 grid gap-2">{projects.map((p) => <div key={p.id} className="rounded-xl bg-slate-950/55 p-3"><p className="font-black text-white">{p.name}</p><p className="text-xs font-bold text-slate-400">{p.progress}% · {p.value}$ CAD</p></div>)}</div>
        </div>
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl">
          <h3 className="text-lg font-black text-white">Documents</h3>
          <button onClick={makeInvoice} className="mt-3 w-full rounded-xl bg-orange-600 p-3 text-sm font-black text-white">Create invoice</button>
          <div className="mt-4 grid gap-2">{docs.map((d) => <div key={d.id} className="rounded-xl bg-slate-950/55 p-3"><p className="font-black text-white">{d.type.toUpperCase()} · {d.client}</p><p className="text-xs font-bold text-slate-400">{d.amount}$ · {d.status}</p></div>)}</div>
        </div>
      </section>
    </section>
  );
}
