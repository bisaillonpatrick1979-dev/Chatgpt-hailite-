import { AppShell, ProMetric } from "@/components/AppShell";
import { StorageSelector } from "@/components/StorageSelector";

export default function Page() {
  return (
    <AppShell>
      <section className="pro-card p-6">
        <h1 className="text-5xl font-black">Reglages</h1>
        <p className="large-readable mt-3 text-slate-400">Configuration compagnie, region, stockage, langues, taxes, devises, IA et lisibilite.</p>
      </section>
      <section className="mt-5 grid gap-4 md:grid-cols-3">
        <ProMetric label="Region" value="AB" note="Alberta Canada" tone="blue" />
        <ProMetric label="Devise" value="CAD" note="GST 5%" tone="green" />
        <ProMetric label="Lecture" value="XL" note="Mode haute lisibilite" tone="orange" />
      </section>
      <section className="mt-6 grid gap-4 xl:grid-cols-2">
        <section className="pro-panel p-6">
          <h2 className="text-2xl font-black text-orange-400">Compagnie</h2>
          <div className="mt-4 grid gap-3">
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" defaultValue="Hailite Xteriors Inc." />
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" defaultValue="Calgary, Alberta" />
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Numero GST / WCB / assurance" />
          </div>
        </section>
        <section className="pro-panel p-6">
          <h2 className="text-2xl font-black text-orange-400">Region et unites</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <select className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white"><option>Canada</option><option>United States</option><option>Europe</option></select>
            <select className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white"><option>Alberta</option><option>Quebec</option><option>Texas</option><option>Europe generic</option></select>
            <select className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white"><option>CAD</option><option>USD</option><option>EUR</option></select>
            <select className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white"><option>Pieds / pouces / pi2</option><option>Metrique</option></select>
          </div>
        </section>
      </section>
      <section className="mt-6 grid gap-4 xl:grid-cols-2">
        <section className="pro-panel p-6">
          <h2 className="text-2xl font-black text-orange-400">Agent IA</h2>
          <div className="mt-4 grid gap-3">
            <select className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white"><option>Mode demo</option><option>OpenAI</option><option>Gemini</option><option>Claude</option></select>
            <input className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Cle API serveur seulement" />
            <p className="large-readable text-slate-300">L IA s adapte a la region choisie pour taxes, devis, analyse et recommandations.</p>
          </div>
        </section>
        <section className="pro-panel p-6">
          <h2 className="text-2xl font-black text-orange-400">Lisibilite</h2>
          <div className="mt-4 grid gap-3">
            <button className="rounded-2xl bg-orange-600 p-4 text-xl font-black text-white">Mode grande lecture</button>
            <button className="rounded-2xl bg-slate-800 p-4 text-xl font-black text-white">Contraste eleve</button>
            <button className="rounded-2xl bg-slate-800 p-4 text-xl font-black text-white">Boutons extra larges</button>
          </div>
        </section>
      </section>
      <StorageSelector />
    </AppShell>
  );
}
