import type { ReactNode } from "react";
import Link from "next/link";
import { CurrentUserBar } from "@/components/CurrentUserBar";
import { RoleAwareNavigation } from "@/components/RoleAwareNavigation";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="soft-grid min-h-screen text-slate-100">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-white/10 bg-[#0c1220]/90 shadow-2xl backdrop-blur-xl lg:block">
        <div className="border-b border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="premium-glow flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 text-xl font-black text-white">HX</div>
            <div>
              <p className="text-sm font-black leading-tight tracking-wide text-white">HAILITE XTERIORS</p>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-orange-400">Role Portal</p>
            </div>
          </div>
        </div>
        <nav className="grid gap-1.5 p-3">
          <RoleAwareNavigation />
        </nav>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b111d]/82 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-600 text-lg font-black">HX</div>
              <div><p className="text-sm font-black">HAILITE XTERIORS</p><p className="text-[10px] font-black uppercase tracking-widest text-orange-400">Role Portal</p></div>
            </div>
            <div className="hidden lg:block"><p className="text-xs font-black uppercase tracking-[0.28em] text-orange-400">Navigation selon le role connecte</p></div>
            <div className="flex items-center gap-2">
              <Link href="/" className="hidden rounded-xl border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-black text-white md:inline-flex">Profils</Link>
              <span className="rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-black">FR</span>
            </div>
          </div>
        </header>
        <section className="mx-auto max-w-[1500px] px-4 py-5 pb-28 md:px-6"><CurrentUserBar />{children}</section>
        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0b111d]/95 px-1 py-2 backdrop-blur-xl lg:hidden"><div className="grid grid-cols-7 gap-1"><RoleAwareNavigation mobile /></div></nav>
      </div>
    </main>
  );
}

export function ProMetric({ label, value, note, tone = "green" }: { label: string; value: string; note: string; tone?: "green" | "orange" | "blue" }) {
  const color = tone === "green" ? "text-green-400" : tone === "orange" ? "text-orange-400" : "text-blue-400";
  return <section className="pro-card p-4"><p className="text-xs font-black uppercase tracking-widest text-slate-400">{label}</p><p className={`mt-2 text-3xl font-black ${color}`}>{value}</p><p className="mt-1 text-sm font-bold text-slate-400">{note}</p></section>;
}
