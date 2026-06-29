import { AppShell } from "@/components/AppShell";
import { PortalCard } from "@/components/PortalCard";
import { InvoiceCalculator } from "@/components/InvoiceCalculator";
import { SignatureBox } from "@/components/SignatureBox";

export default function Contractor() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <p className="text-sm font-black uppercase tracking-widest text-orange-400">Portail sous-traitant securise</p>
        <h1 className="text-5xl font-black">Mes contrats et invoices</h1>
        <p className="large-readable mt-3 text-slate-400">Mes chantiers, ma production, mes photos, mes invoices et mon solde seulement.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <PortalCard title="Mes pi2" value="0" note="Declares cette semaine" />
        <PortalCard title="Mes invoices" value="0" note="A envoyer" />
        <PortalCard title="Mon solde" value="0$" note="CAD personnel" />
      </section>
      <section className="pro-panel mt-6 p-6">
        <h2 className="text-2xl font-black text-orange-400">Checklist avant invoice</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">□ Taches terminees</div>
          <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">□ Photos ajoutees</div>
          <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">□ Production declaree</div>
          <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">□ Signature complete</div>
        </div>
        <button className="mt-5 rounded-2xl bg-orange-600 p-5 text-xl font-black text-white">Creer mon invoice</button>
      </section>
      <InvoiceCalculator />
      <SignatureBox />
    </AppShell>
  );
}
