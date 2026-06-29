import type { ReactNode } from "react";
import Link from "next/link";
import { BarChart3, Box, BriefcaseBusiness, Calculator, Clock3, FileText, Home, MapPin, Settings, UsersRound } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Accueil", icon: Home },
  { href: "/projects", label: "Projets", icon: MapPin },
  { href: "/clients", label: "Clients", icon: UsersRound },
  { href: "/invoices", label: "Docs", icon: FileText },
  { href: "/payroll", label: "Paie", icon: Calculator },
  { href: "/punch", label: "Punch", icon: Clock3 },
  { href: "/settings", label: "Config", icon: Settings }
];

const sideItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/admin", label: "Admin", icon: Settings },
  { href: "/clients", label: "Clients", icon: UsersRound },
  { href: "/projects", label: "Projects", icon: MapPin },
  { href: "/punch", label: "Punch clock", icon: Clock3 },
  { href: "/contractor", label: "Contractors", icon: BriefcaseBusiness },
  { href: "/invoices", label: "Documents", icon: FileText },
  { href: "/payroll", label: "Payroll", icon: Calculator },
  { href: "/production", label: "Accounting", icon: Box },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="soft-grid min-h-screen text-slate-100">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-white/10 bg-[#0c1220]/90 shadow-2xl backdrop-blur-xl lg:block">
        <div className="border-b border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="premium-glow flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 text-xl font-black text-white">HX</div>
            <div>
              <p className="text-sm font-black leading-tight tracking-wide text-white">HAILITE XTERIORS</p>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-orange-400">Command Center</p>
            </div>
          </div>
        </div>
        <nav className="grid gap-1.5 p-3">
          {sideItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-2.5 text-sm font-black text-slate-300 hover:border-white/10 hover:bg-white/[0.055] hover:text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.045] group-hover:bg-orange-500/15"><Icon className="h-4.5 w-4.5 text-orange-400" /></span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b111d]/82 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-600 text-lg font-black">HX</div>
              <div><p className="text-sm font-black">HAILITE XTERIORS</p><p className="text-[10px] font-black uppercase tracking-widest text-orange-400">Command Center</p></div>
            </div>
            <div className="hidden lg:block"><p className="text-xs font-black uppercase tracking-[0.28em] text-orange-400">Premium client demo · Calgary AB · CAD</p></div>
            <div className="flex items-center gap-2">
              <Link href="/" className="hidden rounded-xl border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-black text-white md:inline-flex">Profils</Link>
              <span className="rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-black">FR</span>
              <span className="hidden rounded-xl bg-orange-500/15 px-3 py-2 text-xs font-black text-orange-300 md:inline">Patrick Bisaillon</span>
            </div>
          </div>
        </header>
        <section className="mx-auto max-w-[1500px] px-4 py-5 pb-28 md:px-6">{children}</section>
        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0b111d]/95 px-1 py-2 backdrop-blur-xl lg:hidden"><div className="grid grid-cols-7 gap-1">{navItems.map((item) => { const Icon = item.icon; return (<Link key={item.href} href={item.href} className="flex min-h-14 flex-col items-center justify-center rounded-xl text-center text-[9px] font-black uppercase text-slate-300 hover:bg-white/[0.06]"><Icon className="mb-1 h-4.5 w-4.5 text-orange-400" />{item.label}</Link>); })}</div></nav>
        <Link href="/admin" className="premium-glow fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-black shadow-2xl lg:bottom-8">IA</Link>
      </div>
    </main>
  );
}

export function ProMetric({ label, value, note, tone = "green" }: { label: string; value: string; note: string; tone?: "green" | "orange" | "blue" }) {
  const color = tone === "green" ? "text-green-400" : tone === "orange" ? "text-orange-400" : "text-blue-400";
  return <section className="pro-card p-4"><p className="text-xs font-black uppercase tracking-widest text-slate-400">{label}</p><p className={`mt-2 text-3xl font-black ${color}`}>{value}</p><p className="mt-1 text-sm font-bold text-slate-400">{note}</p></section>;
}
