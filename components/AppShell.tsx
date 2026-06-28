import type { ReactNode } from "react";
import Link from "next/link";
import { BarChart3, Box, BriefcaseBusiness, Calculator, Clock3, FileText, Home, MapPin, Settings, UsersRound } from "lucide-react";

const navItems = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/invoices", label: "Factures", icon: FileText },
  { href: "/projects", label: "Projets", icon: MapPin },
  { href: "/calculator", label: "Calcul", icon: Calculator },
  { href: "/production", label: "Stats", icon: BarChart3 },
  { href: "/punch", label: "Punch", icon: Clock3 },
  { href: "/settings", label: "Reglages", icon: Settings }
];

const sideItems = [
  { href: "/", label: "Tableau de bord", icon: BarChart3 },
  { href: "/punch", label: "Punch", icon: Clock3 },
  { href: "/projects", label: "Chantiers et taches", icon: MapPin },
  { href: "/worker", label: "RH", icon: UsersRound },
  { href: "/invoices", label: "Facturation", icon: FileText },
  { href: "/calculator", label: "Calculatrice", icon: Calculator },
  { href: "/contractor", label: "Sous-traitants", icon: BriefcaseBusiness },
  { href: "/production", label: "Comptabilite", icon: Box },
  { href: "/settings", label: "Parametres", icon: Settings }
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#0b0f17] text-slate-100">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-slate-800 bg-[#0f1722] lg:block">
        <div className="flex items-center gap-3 border-b border-slate-800 p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 text-2xl font-black text-white">HX</div>
          <div>
            <p className="text-lg font-black leading-tight">HAILITE XTERIORS INC.</p>
            <p className="text-sm font-black uppercase tracking-widest text-orange-400">Gestion Chantier Pro</p>
          </div>
        </div>
        <nav className="grid gap-1 p-3">
          {sideItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-black text-slate-300 hover:bg-slate-800 hover:text-white">
                <Icon className="h-6 w-6 text-slate-400" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-slate-800 bg-[#101722]/95 px-4 py-3 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600 text-xl font-black">HX</div>
              <div>
                <p className="text-base font-black">HAILITE XTERIORS INC.</p>
                <p className="text-xs font-black uppercase tracking-widest text-orange-400">Gestion Chantier Pro</p>
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="text-sm font-black uppercase tracking-widest text-orange-400">Mode lisibilite elevee</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden rounded-lg bg-orange-500 px-4 py-2 text-sm font-black text-white md:inline-flex">Guide de Validation app</span>
              <span className="rounded-lg bg-slate-800 px-3 py-2 text-sm font-black">FR</span>
              <span className="hidden text-base font-black md:inline">Patrick Bisaillon</span>
              <button className="rounded-lg border border-red-900 bg-red-950/50 px-4 py-2 text-sm font-black text-red-200">Deconnexion</button>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 py-6 pb-28">{children}</section>

        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-[#101722] px-1 py-2 lg:hidden">
          <div className="grid grid-cols-7 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="flex min-h-16 flex-col items-center justify-center rounded-xl text-center text-[10px] font-black uppercase text-slate-300">
                  <Icon className="mb-1 h-5 w-5 text-orange-400" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <button className="fixed bottom-24 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl shadow-2xl lg:bottom-8">✨</button>
      </div>
    </main>
  );
}

export function ProMetric({ label, value, note, tone = "green" }: { label: string; value: string; note: string; tone?: "green" | "orange" | "blue" }) {
  const color = tone === "green" ? "text-green-400" : tone === "orange" ? "text-orange-400" : "text-blue-400";
  return (
    <section className="pro-card p-5">
      <p className="text-sm font-black uppercase tracking-widest text-slate-400">{label}</p>
      <p className={`mt-3 text-4xl font-black ${color}`}>{value}</p>
      <p className="mt-2 text-base font-bold text-slate-400">{note}</p>
    </section>
  );
}
