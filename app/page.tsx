import { AppShell } from "@/components/AppShell";
import { MetricCard } from "@/components/MetricCard";

export default function Root() {
  return (
    <AppShell>
      <section className="rounded-3xl bg-slate-950 p-6 text-white">
        <p className="text-lg font-black text-sky-300">Hailite Manager</p>
        <h1 className="mt-3 text-5xl font-black leading-tight">Construction app for exterior crews</h1>
        <p className="large-readable mt-5 text-slate-200">Readable mobile dashboard for jobs, geofencing, punch, tasks, production, invoices and signatures.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <MetricCard label="Active workers" value="0" note="Green avatar light when punched in." />
        <MetricCard label="Open jobs" value="0" note="Google Maps and geofencing ready." />
        <MetricCard label="Invoices" value="0" note="Subcontractor approvals in CAD." />
      </section>
    </AppShell>
  );
}
