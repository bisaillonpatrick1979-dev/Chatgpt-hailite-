import { AppShell } from "@/components/AppShell";
import { MetricCard } from "@/components/MetricCard";

export default function Admin() {
  return (
    <AppShell>
      <section className="rounded-3xl bg-slate-950 p-6 text-white">
        <h1 className="text-5xl font-black">Admin</h1>
        <p className="large-readable mt-4 text-slate-200">Command center for crews, jobs, approvals and money.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <MetricCard label="Active" value="0" note="Workers on job sites." />
        <MetricCard label="Jobs" value="0" note="Open projects." />
        <MetricCard label="Approvals" value="0" note="Invoices and reports." />
      </section>
    </AppShell>
  );
}
