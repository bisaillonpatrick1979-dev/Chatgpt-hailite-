import { AppShell } from "@/components/AppShell";
import { RoleGate } from "@/components/RoleGate";
import { StorageSelector } from "@/components/StorageSelector";

export default function Page() {
  return (
    <AppShell>
      <RoleGate allowedRoles={["Administrateur"]}>
        <section className="pro-card p-6">
          <h1 className="text-5xl font-black">Reglages</h1>
          <p className="large-readable mt-3 text-slate-400">Configuration admin seulement.</p>
        </section>
        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <section className="pro-panel p-6"><h2 className="text-2xl font-black text-orange-400">Region</h2><p className="large-readable mt-3 text-slate-300">Alberta · Canada · CAD · GST 5% · pieds/pouces/pi2.</p></section>
          <section className="pro-panel p-6"><h2 className="text-2xl font-black text-orange-400">IA et stockage</h2><p className="large-readable mt-3 text-slate-300">Mode demo local. Supabase et IA serveur a brancher.</p></section>
        </section>
        <StorageSelector />
      </RoleGate>
    </AppShell>
  );
}
