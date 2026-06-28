"use client";

import { useEffect, useState } from "react";

type Item = { id: string; name: string; unit: string; price: string; taxable: string };

export function CatalogTools() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("pi2");
  const [price, setPrice] = useState("0");
  const [taxable, setTaxable] = useState("oui");

  useEffect(() => {
    const saved = window.localStorage.getItem("hailite_catalog");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  function save(next: Item[]) {
    setItems(next);
    window.localStorage.setItem("hailite_catalog", JSON.stringify(next));
  }

  function add() {
    if (!name.trim()) return;
    save([...items, { id: crypto.randomUUID(), name, unit, price, taxable }]);
    setName(""); setPrice("0");
  }

  return (
    <section className="pro-panel mt-6 p-6">
      <h2 className="text-2xl font-black text-orange-400">Catalogue materiaux et services</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-5">
        <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Item" />
        <select value={unit} onChange={(e) => setUnit(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white"><option value="pi2">pi2</option><option value="pied lineaire">pied lineaire</option><option value="heure">heure</option><option value="unite">unite</option><option value="forfait">forfait</option></select>
        <input value={price} onChange={(e) => setPrice(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Prix CAD" />
        <select value={taxable} onChange={(e) => setTaxable(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white"><option value="oui">Taxable</option><option value="non">Non taxable</option></select>
        <button onClick={add} className="rounded-2xl bg-orange-600 p-4 text-xl font-black text-white">Ajouter</button>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((i) => <div key={i.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-lg font-black text-white">{i.name}<p className="text-base text-slate-400">{i.price}$ CAD / {i.unit} · taxable: {i.taxable}</p></div>)}
      </div>
    </section>
  );
}
