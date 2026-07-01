"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CurrentUser = { name: string; role: string; loggedAt: string } | null;

export function CurrentUserBar() {
  const [user, setUser] = useState<CurrentUser>(null);

  useEffect(() => {
    const saved = localStorage.getItem("hailite_current_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  function logout() {
    localStorage.removeItem("hailite_current_user");
    window.location.href = "/";
  }

  return (
    <section className="mb-5 rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-xl backdrop-blur-xl">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-300">Session active</p>
          <h2 className="mt-1 text-xl font-black text-white">{user ? user.name : "Aucun profil connecte"}</h2>
          <p className="text-sm font-bold text-slate-400">{user ? user.role : "Retourne a la page profils pour entrer un PIN."}</p>
        </div>
        <div className="flex gap-2">
          <Link href="/" className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-black text-white">Changer profil</Link>
          <button onClick={logout} className="rounded-xl bg-red-700 px-4 py-3 text-sm font-black text-white">Deconnexion</button>
        </div>
      </div>
    </section>
  );
}
