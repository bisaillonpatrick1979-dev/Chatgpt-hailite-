"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const people = [
  { name: "Patrick Bisaillon", role: "Administrateur", initials: "PB", href: "/dashboard", accent: "from-orange-500 to-red-600", note: "Acces complet", pin: "1979" },
  { name: "Mathieu Cote", role: "Employe", initials: "MC", href: "/worker", accent: "from-blue-500 to-cyan-500", note: "Punch et paie", pin: "1234" },
  { name: "Stephane Roy", role: "Sous-traitant", initials: "SR", href: "/contractor", accent: "from-violet-500 to-fuchsia-600", note: "Production et factures", pin: "2222" },
  { name: "Alex Tremblay", role: "Employe", initials: "AT", href: "/worker", accent: "from-emerald-500 to-teal-500", note: "Chantiers assignes", pin: "3333" }
];

export function ProfileLoginList() {
  const router = useRouter();
  const [pins, setPins] = useState<Record<string, string>>({});
  const [error, setError] = useState("");

  function enter(person: (typeof people)[number]) {
    if ((pins[person.name] || "") !== person.pin) {
      setError(`PIN invalide pour ${person.name}`);
      return;
    }
    localStorage.setItem("hailite_current_user", JSON.stringify({ name: person.name, role: person.role, loggedAt: new Date().toISOString() }));
    setError("");
    router.push(person.href);
  }

  return (
    <section className="relative grid gap-3">
      {error ? <p className="rounded-2xl border border-red-400/20 bg-red-500/10 p-3 text-center text-sm font-black text-red-200">{error}</p> : null}
      {people.map((person) => (
        <article key={person.name} className="group flex items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-3 shadow-xl backdrop-blur-xl hover:border-orange-400/35 hover:bg-white/[0.07]">
          <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${person.accent} text-lg font-black text-white shadow-xl transition group-hover:scale-[1.03]`}>{person.initials}</div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h2 className="truncate text-lg font-black text-white">{person.name}</h2>
                <p className="text-sm font-bold text-slate-400">{person.role}</p>
              </div>
              <p className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-orange-300">{person.note}</p>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto]">
              <input
                value={pins[person.name] || ""}
                onChange={(e) => setPins((prev) => ({ ...prev, [person.name]: e.target.value }))}
                onKeyDown={(e) => { if (e.key === "Enter") enter(person); }}
                className="w-full rounded-xl border border-white/10 bg-slate-950/75 p-3 text-center text-base font-black tracking-[0.38em] text-white"
                placeholder="PIN"
                inputMode="numeric"
                type="password"
              />
              <button onClick={() => enter(person)} className="flex min-w-28 justify-center rounded-xl bg-white/[0.07] px-4 py-3 text-sm font-black text-white group-hover:bg-orange-600">Entrer</button>
            </div>
          </div>
        </article>
      ))}
      <p className="text-center text-xs font-bold text-slate-500">Demo PIN: admin 1979 · employe 1234 · sous-traitant 2222 · employe 3333</p>
    </section>
  );
}
