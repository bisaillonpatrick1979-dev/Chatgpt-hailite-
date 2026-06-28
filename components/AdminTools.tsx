"use client";

import { useEffect, useState } from "react";

type Worker = { id: string; name: string; role: string; pay: string };

export function AdminTools() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("employee");
  const [pay, setPay] = useState("35");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("IA prete. Les reponses passent par /api/ai.");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("hailite_workers");
    if (saved) setWorkers(JSON.parse(saved));
  }, []);

  function save(next: Worker[]) {
    setWorkers(next);
    window.localStorage.setItem("hailite_workers", JSON.stringify(next));
  }

  function addWorker() {
    if (!name.trim()) return;
    save([...workers, { id: crypto.randomUUID(), name, role, pay }]);
    setName("");
  }

  async function askAi() {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("/api/ai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt: question }) });
      const data = await response.json();
      setAnswer(data.answer || "Aucune reponse IA.");
    } catch {
      setAnswer("Erreur IA: impossible de contacter /api/ai.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <div className="pro-panel p-6">
        <h2 className="text-2xl font-black text-orange-400">Ajouter un employe ou sous-traitant</h2>
        <div className="mt-4 grid gap-3">
          <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Nom complet" />
          <select value={role} onChange={(e) => setRole(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white"><option value="employee">Employe salarie</option><option value="subcontractor">Sous-traitant</option><option value="admin">Administrateur</option></select>
          <input value={pay} onChange={(e) => setPay(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Taux CAD" />
          <button onClick={addWorker} className="rounded-2xl bg-orange-600 p-4 text-xl font-black text-white">Ajouter</button>
        </div>
        <div className="mt-5 grid gap-3">{workers.map((w) => <div key={w.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-lg font-black text-white">{w.name} · {w.role} · {w.pay}$/h</div>)}</div>
      </div>
      <div className="pro-panel p-6">
        <h2 className="text-2xl font-black text-orange-400">Agent IA chantier</h2>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="mt-4 min-h-36 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Pose une question: paie, chantier, devis, materiaux..." />
        <button onClick={askAi} className="mt-3 rounded-2xl bg-blue-600 p-4 text-xl font-black text-white">{loading ? "Analyse..." : "Analyser avec IA"}</button>
        <div className="mt-4 rounded-2xl border border-blue-900 bg-blue-950/30 p-4 text-lg font-bold text-blue-100">{answer}</div>
      </div>
    </section>
  );
}
