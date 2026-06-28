"use client";

import { useState } from "react";

export function StorageSelector() {
  const [provider, setProvider] = useState("local");
  return (
    <section className="pro-panel mt-6 p-6">
      <h2 className="text-2xl font-black text-orange-400">Stockage des donnees</h2>
      <p className="large-readable mt-2 text-slate-300">Choix pour prototype: local, Supabase, Google Drive, iCloud ou NAS.</p>
      <select value={provider} onChange={(e) => setProvider(e.target.value)} className="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white">
        <option value="local">Local appareil</option>
        <option value="supabase">Supabase</option>
        <option value="google_drive">Google Drive</option>
        <option value="icloud">iCloud</option>
        <option value="nas">NAS / disque maison</option>
      </select>
      <p className="mt-4 rounded-2xl bg-slate-950 p-4 text-xl font-black text-green-400">Selection: {provider}</p>
    </section>
  );
}
