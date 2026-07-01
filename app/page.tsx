import Link from "next/link";
import { ProfileLoginList } from "@/components/ProfileLoginList";

export default function Root() {
  return (
    <main className="soft-grid min-h-screen overflow-hidden text-slate-100">
      <section className="relative mx-auto flex min-h-screen max-w-[760px] flex-col justify-center px-4 py-8">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <header className="relative mb-7 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-xl font-black text-white shadow-2xl shadow-orange-950/40">HX</div>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.34em] text-orange-300">Portail securise</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">Choisir un profil</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-6 text-slate-300">Aucune donnee de compagnie n'est visible avant la connexion.</p>
        </header>

        <ProfileLoginList />

        <footer className="relative mt-7 flex justify-center">
          <Link href="/onboarding" className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white">Premiere utilisation / configuration</Link>
        </footer>
      </section>
    </main>
  );
}
