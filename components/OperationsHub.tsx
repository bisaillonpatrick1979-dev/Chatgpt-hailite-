import Link from "next/link";
import { TrendCard } from "@/components/TrendCard";
import { DocumentStatusCard } from "@/components/DocumentStatusCard";
import { ProjectSummaryCard } from "@/components/ProjectSummaryCard";
import { WorkerSummaryCard } from "@/components/WorkerSummaryCard";

const steps = [
  { title: "1. Client", text: "Creer client, contacts, adresse de facturation et adresse chantier.", href: "/clients" },
  { title: "2. Projet", text: "Creer chantier, geofence, equipe, taches, photos et progression.", href: "/projects" },
  { title: "3. Punch", text: "Punch In, break optionnel, Break In/Out, Punch Out et rapport de journee.", href: "/punch" },
  { title: "4. Production", text: "Declarer pi2, sections, materiaux, notes, photos et rendement.", href: "/production" },
  { title: "5. Documents", text: "Devis, contrat, facture client, invoice sous-traitant et signature.", href: "/invoices" },
  { title: "6. Paie", text: "Calculer heures, avances, taux CAD, sous-traitants et approbation.", href: "/payroll" }
];

export function OperationsHub() {
  return (
    <section className="mt-6 grid gap-6">
      <section className="rounded-[2rem] border border-orange-900 bg-orange-950/20 p-6 shadow-2xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">MVP utilisable</p>
        <h2 className="mt-2 text-4xl font-black text-white">Centre d operations complet</h2>
        <p className="large-readable mt-3 text-slate-300">Flux complet pour tester une compagnie de construction: client, chantier, punch, production, documents, paie et comptabilite.</p>
        <div className="mt-5 grid gap-3 md:grid-cols-6">
          {steps.map((step) => <Link key={step.title} href={step.href} className="rounded-2xl bg-slate-950 p-4 text-center text-lg font-black text-white hover:bg-slate-800">{step.title}</Link>)}
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-4">
        <TrendCard label="Chantiers" value="3" compare="Actifs" status="Ouvert" />
        <TrendCard label="Employes" value="4" compare="Admin + travailleurs" status="Stable" />
        <TrendCard label="Documents" value="2" compare="Devis/factures" status="Action" />
        <TrendCard label="Profit" value="1538$" compare="Estime CAD" status="Brouillon" />
      </section>
      <section className="grid gap-4 xl:grid-cols-3">
        <ProjectSummaryCard title="Chantier Hydro-Quebec" client="Hydro-Quebec Renovations" progress={72} />
        <DocumentStatusCard number="DEV-2026-0001" client="Jean Larouche" amount="14199.41$" status="Accepte" />
        <WorkerSummaryCard name="Mathieu Cote" role="Employe" hours="0.0h" pay="0$ CAD" />
      </section>
      <section className="grid gap-4 xl:grid-cols-2">
        <div className="pro-panel p-6">
          <h3 className="text-2xl font-black text-orange-400">Ce qui fonctionne maintenant</h3>
          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">Portails admin, employe et sous-traitant</div>
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">CRM clients local</div>
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">Chantiers avec taches integrees</div>
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">Punch avec breaks optionnels</div>
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">Factures, signatures, calculateur CAD</div>
          </div>
        </div>
        <div className="pro-panel p-6">
          <h3 className="text-2xl font-black text-orange-400">A brancher ensuite</h3>
          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">Supabase multi-utilisateurs + RLS</div>
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">GPS reel et Google Maps</div>
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">Upload photos et PDF reels</div>
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">IA serveur OpenAI/Gemini/Claude</div>
            <div className="rounded-2xl bg-slate-950 p-4 text-xl font-black">Notifications push</div>
          </div>
        </div>
      </section>
    </section>
  );
}
