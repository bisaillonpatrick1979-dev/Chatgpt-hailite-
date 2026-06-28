"use client";

import { useEffect, useState } from "react";

type Tool = { id: string; name: string; owner: string; status: string; value: string };

export function InventoryTools() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("shop");
  const [status, setStatus] = useState("available");
  const [value, setValue] = useState("0");

  useEffect(() => {
    const saved = window.localStorage.getItem("hailite_tools");
    if (saved) setTools(JSON.parse(saved));
  }, []);

  function save(next: Tool[]) {
    setTools(next);
    window.localStorage.setItem("hailite_tools", JSON.stringify(next));
  }

  function add() {
    if (!name.trim()) return;
    save([...tools, { id: crypto.randomUUID(), name, owner, status, value }]);
    setName(""); setValue("0");
  }

  return (
    <section className="pro-panel mt-6 p-6">
      <h2 className="text-2xl font-black text-orange-400">Inventaire outils</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-5">
        <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Outil" />
        <input value={owner} onChange={(e) => setOwner(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Avec qui" />
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white"><option value="available">Disponible</option><option value="checked_out">Sorti</option><option value="repair">Reparation</option><option value="lost">Perdu</option></select>
        <input value={value} onChange={(e) => setValue(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Valeur CAD" />
        <button onClick={add} className="rounded-2xl bg-orange-600 p-4 text-xl font-black text-white">Ajouter</button>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {tools.map((t) => <div key={t.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-lg font-black text-white">{t.name}<p className="text-base text-slate-400">{t.status} · {t.owner} · {t.value}$ CAD</p></div>)}
      </div>
    </section>
  );
}
