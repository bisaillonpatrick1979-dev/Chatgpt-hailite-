"use client";

import Link from "next/link";
import { BarChart3, BriefcaseBusiness, Calculator, Clock3, FileText, Home, MapPin, Settings, UsersRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type User = { name: string; role: string } | null;

const allItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart3, roles: ["Administrateur"] },
  { href: "/admin", label: "Admin", icon: Settings, roles: ["Administrateur"] },
  { href: "/clients", label: "Clients", icon: UsersRound, roles: ["Administrateur"] },
  { href: "/projects", label: "Projets", icon: MapPin, roles: ["Administrateur", "Employe", "Sous-traitant"] },
  { href: "/punch", label: "Punch", icon: Clock3, roles: ["Administrateur", "Employe"] },
  { href: "/worker", label: "Employe", icon: Home, roles: ["Employe"] },
  { href: "/contractor", label: "Sous-traitant", icon: BriefcaseBusiness, roles: ["Sous-traitant"] },
  { href: "/invoices", label: "Documents", icon: FileText, roles: ["Administrateur", "Sous-traitant"] },
  { href: "/payroll", label: "Paie", icon: Calculator, roles: ["Administrateur", "Employe", "Sous-traitant"] },
  { href: "/settings", label: "Config", icon: Settings, roles: ["Administrateur"] }
];

export function RoleAwareNavigation({ mobile = false }: { mobile?: boolean }) {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const saved = localStorage.getItem("hailite_current_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const items = useMemo(() => {
    if (!user) return allItems.filter((item) => item.href === "/projects" || item.href === "/punch").slice(0, mobile ? 4 : 10);
    return allItems.filter((item) => item.roles.includes(user.role)).slice(0, mobile ? 7 : 10);
  }, [user, mobile]);

  if (mobile) {
    return <>{items.map((item) => { const Icon = item.icon; return <Link key={item.href} href={item.href} className="flex min-h-14 flex-col items-center justify-center rounded-xl text-center text-[9px] font-black uppercase text-slate-300 hover:bg-white/[0.06]"><Icon className="mb-1 h-4.5 w-4.5 text-orange-400" />{item.label}</Link>; })}</>;
  }

  return <>{items.map((item) => { const Icon = item.icon; return <Link key={item.href} href={item.href} className="group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-2.5 text-sm font-black text-slate-300 hover:border-white/10 hover:bg-white/[0.055] hover:text-white"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.045] group-hover:bg-orange-500/15"><Icon className="h-4.5 w-4.5 text-orange-400" /></span>{item.label}</Link>; })}</>;
}
