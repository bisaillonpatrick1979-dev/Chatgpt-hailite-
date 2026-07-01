"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type User = { name: string; role: string } | null;

export function RoleGate({ allowedRoles, children }: { allowedRoles: string[]; children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hailite_current_user");
    if (saved) setUser(JSON.parse(saved));
    setReady(true);
  }, []);

  if (!ready) return null;

  if (!user) {
    return (
      <section className="rounded-[2rem] border border-yellow-400/20 bg-yellow-500/10 p-6 text-center shadow-2xl">
        <h1 className="text-3xl font-black text-yellow-100">Connexion requise</h1>
        <p className="mt-3 text-sm font-bold text-yellow-100">Entre ton PIN a partir de la page profils avant d'ouvrir ce portail.</p>
        <Link href="/" className="mt-5 inline-flex rounded-2xl bg-yellow-600 px-5 py-3 text-sm font-black text-white">Choisir un profil</Link>
      </section>
    );
  }

  if (!allowedRoles.includes(user.role)) {
    return (
      <section className="rounded-[2rem] border border-red-400/20 bg-red-500/10 p-6 text-center shadow-2xl">
        <h1 className="text-3xl font-black text-red-100">Acces bloque</h1>
        <p className="mt-3 text-sm font-bold text-red-100">{user.name} est connecte comme {user.role}. Ce portail accepte seulement: {allowedRoles.join(", ")}.</p>
        <Link href="/" className="mt-5 inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-black text-white">Changer de profil</Link>
      </section>
    );
  }

  return <>{children}</>;
}
