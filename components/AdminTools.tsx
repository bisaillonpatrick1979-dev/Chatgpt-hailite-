"use client";

import { useEffect, useState } from "react";

type Worker = {
  id: string;
  name: string;
  role: string;
  pay: string;
};

export function AdminTools() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("employee");
  const [pay, setPay] = useState("35");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("L IA est prete. Branche OPENAI_API_KEY, GEMINI_API_KEY ou ANTHROPIC_API_KEY pour activer les vraies reponses.");

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

  function askAi() {
    const q = question.toLowerCase();
    if (!q.trim()) return;
    if (q.includes("paie")) setAnswer("Analyse IA: verifier heures approuvees, taux horaire, avances, taxes applicables et statut employe/sous-traitant avant paiement.");
    else if (q.includes("chantier")) setAnswer("Analyse IA: verifier geofence, taches restantes, photos requises, production quotidienne et risques de retard.");
    else setAnswer("Analyse IA: je recommande de valider les couts, la main-d oeuvre, les materiaux, la marge, les taxes et les regles regionales configurees.");
  }

  return (
    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <div className="pro-panel p-6">
        <h2 className="text-2xl font-black text-orange-400">Ajouter un employe ou sous-traitant</h2>
        <div className="mt-4 grid gap-3">
          <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Nom complet" />
          <select value={role} onChange={(e) => setRole(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white">
            <option value="employee">Employe salarie</option>
            <option value="subcontractor">Sous-traitant</option>
            <option value="admin">Administrateur</option>
          </select>
          <input value={pay} onChange={(e) => setPay(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Taux CAD" />
          <button onClick={addWorker} className="rounded-2xl bg-orange-600 p-4 text-xl font-black text-white">Ajouter</button>
        </div>
        <div className="mt-5 grid gap-3">
          {workers.map((w) => <div key={w.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-lg font-black text-white">{w.name} · {w.role} · {w.pay}$/h</div>)}
        </div>
      </div>

      <div className="pro-panel p-6">
        <h2 className="text-2xl font-black text-orange-400">Agent IA chantier</h2>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="mt-4 min-h-36 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Pose une question: paie, chantier, devis, materiaux..." />
        <button onClick={askAi} className="mt-3 rounded-2xl bg-blue-600 p-4 text-xl font-black text-white">Analyser avec IA</button>
        <div className="mt-4 rounded-2xl border border-blue-900 bg-blue-950/30 p-4 text-lg font-bold text-blue-100">{answer}</div>
      </div>
    </section>
  );
}
