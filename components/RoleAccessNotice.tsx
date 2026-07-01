"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type User = { name: string; role: string } | null;

export function RoleAccessNotice({ allowedRoles }: { allowedRoles: string[] }) {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const saved = localStorage.getItem("hailite_current_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  if (!user) {
    return (
      <section className="mb-5 rounded-2xl border border-yellow-400/20 bg-yellow-500/10 p-4 text-sm font-bold text-yellow-100">
        Aucun profil connecte. Retourne a la page profils pour entrer un PIN.
        <Link href="/" className="ml-3 font-black text-white underline">Choisir profil</Link>
      </section>
    );
  }

  const allowed = allowedRoles.includes(user.role);
  if (allowed) {
    return (
      <section className="mb-5 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm font-bold text-emerald-100">
        Acces autorise pour {user.name} · {user.role}.
      </section>
    );
  }

  return (
    <section className="mb-5 rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm font-bold text-red-100">
      Acces non autorise pour {user.name} · {user.role}. Ce portail accepte seulement: {allowedRoles.join(", ")}.
      <Link href="/" className="ml-3 font-black text-white underline">Changer profil</Link>
    </section>
  );
}
