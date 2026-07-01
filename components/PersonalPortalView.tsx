"use client";

import { useEffect, useState } from "react";

type User = { name: string; role: string } | null;

export function PersonalPortalView({ type }: { type: "worker" | "contractor" }) {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const saved = localStorage.getItem("hailite_current_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const isContractor = type === "contractor";
  const title = isContractor ? "Portail sous-traitant" : "Portail employe";
  const subtitle = isContractor ? "Production, invoices, photos et solde personnel seulement." : "Punch, chantiers assignes, taches et paie personnelle seulement.";

  return (
    <section className="grid gap-5">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />
        <p className="relative text-xs font-black uppercase tracking-[0.3em] text-orange-300">{user?.name || "Profil personnel"}</p>
        <h1 className="relative mt-2 text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">{title}</h1>
        <p className="relative mt-3 max-w-3xl text-base font-semibold leading-7 text-slate-300">{subtitle}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5"><p className="text-xs font-black uppercase text-slate-500">Chantier actif</p><p className="mt-2 text-2xl font-black text-white">Hydro-Quebec</p><p className="mt-1 text-sm font-bold text-slate-400">Geofence requis</p></div>
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5"><p className="text-xs font-black uppercase text-slate-500">{isContractor ? "Production" : "Heures"}</p><p className="mt-2 text-2xl font-black text-emerald-300">{isContractor ? "0 pi2" : "0.0h"}</p><p className="mt-1 text-sm font-bold text-slate-400">Semaine courante</p></div>
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5"><p className="text-xs font-black uppercase text-slate-500">{isContractor ? "Solde invoices" : "Paie estimee"}</p><p className="mt-2 text-2xl font-black text-orange-300">0$ CAD</p><p className="mt-1 text-sm font-bold text-slate-400">Visible seulement par ce profil</p></div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl">
          <h2 className="text-xl font-black text-white">Mes taches</h2>
          <div className="mt-4 grid gap-3">
            {[
              "Soffit cote gauche",
              "Fascia avant",
              "Siding mur sud",
              "Photos finales"
            ].map((task) => <div key={task} className="rounded-2xl bg-slate-950/55 p-4 text-sm font-black text-slate-200">□ {task}</div>)}
          </div>
        </div>
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl">
          <h2 className="text-xl font-black text-white">Actions disponibles</h2>
          <div className="mt-4 grid gap-3">
            {!isContractor ? <button className="rounded-2xl bg-emerald-600 p-4 text-sm font-black text-white">Ouvrir Punch In / Break / Punch Out</button> : null}
            {isContractor ? <button className="rounded-2xl bg-orange-600 p-4 text-sm font-black text-white">Creer une invoice sous-traitant</button> : null}
            <button className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-black text-white">Ajouter photos</button>
            <button className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-black text-white">Voir ma paie</button>
          </div>
        </div>
      </section>
    </section>
  );
}
