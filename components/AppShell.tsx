import Link from "next/link";
import { BarChart3, BriefcaseBusiness, Camera, Clock3, FileText, MapPin, ShieldCheck, UsersRound } from "lucide-react";

const navItems = [
  { href: "/", label: "Accueil", icon: BarChart3 },
  { href: "/projects", label: "Chantiers", icon: MapPin },
  { href: "/worker", label: "Employé", icon: Clock3 },
  { href: "/contractor", label: "Sous-traitant", icon: BriefcaseBusiness },
  { href: "/admin", label: "Admin", icon: ShieldCheck }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col">
        <header className="sticky top-0 z-20 border-b border-white/70 bg-white/85 px-4 py-3 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">Hailite</p>
              <h1 className="text-xl font-black tracking-tight">Construction Manager</h1>
            </div>
            <div className="rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white">CAD · pi²</div>
          </div>
        </header>

        <section className="flex-1 px-4 py-5 pb-28">{children}</section>

        <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur md:hidden">
          <div className="mx-auto grid max-w-2xl grid-cols-5 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="flex min-h-16 flex-col items-center justify-center rounded-2xl px-2 text-center text-[11px] font-bold text-slate-700 hover:bg-sky-50">
                  <Icon className="mb-1 h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <aside className="hidden border-t border-slate-200 bg-white p-3 md:block">
          <div className="flex flex-wrap justify-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-sky-50">
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </aside>
      </div>
    </main>
  );
}

export function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-3xl border border-white bg-white p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-black tracking-tight text-slate-950">{value}</p>
      <p className="mt-2 text-sm text-slate-600">{detail}</p>
    </div>
  );
}

export function ActionCard({ title, text, icon }: { title: string; text: string; icon: "users" | "camera" | "file" }) {
  const Icon = icon === "users" ? UsersRound : icon === "camera" ? Camera : FileText;
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
