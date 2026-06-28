"use client";

import { useEffect, useState } from "react";

type Client = { id: string; name: string; phone: string; address: string };
type Doc = { id: string; kind: string; client: string; title: string; amount: string; status: string };

export function BusinessTools() {
  const [clients, setClients] = useState<Client[]>([]);
  const [docs, setDocs] = useState<Doc[]>([]);
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [docClient, setDocClient] = useState("");
  const [docTitle, setDocTitle] = useState("");
  const [amount, setAmount] = useState("0");
  const [kind, setKind] = useState("devis");

  useEffect(() => {
    const savedClients = window.localStorage.getItem("hailite_clients");
    const savedDocs = window.localStorage.getItem("hailite_docs");
    if (savedClients) setClients(JSON.parse(savedClients));
    if (savedDocs) setDocs(JSON.parse(savedDocs));
  }, []);

  function saveClients(next: Client[]) {
    setClients(next);
    window.localStorage.setItem("hailite_clients", JSON.stringify(next));
  }

  function saveDocs(next: Doc[]) {
    setDocs(next);
    window.localStorage.setItem("hailite_docs", JSON.stringify(next));
  }

  function addClient() {
    if (!clientName.trim()) return;
    saveClients([...clients, { id: crypto.randomUUID(), name: clientName, phone, address }]);
    setClientName(""); setPhone(""); setAddress("");
  }

  function addDoc() {
    if (!docClient.trim() || !docTitle.trim()) return;
    saveDocs([...docs, { id: crypto.randomUUID(), kind, client: docClient, title: docTitle, amount, status: "brouillon" }]);
    setDocTitle(""); setAmount("0");
  }

  return (
    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <div className="pro-panel p-6">
        <h2 className="text-2xl font-black text-orange-400">Gestion clients</h2>
        <div className="mt-4 grid gap-3">
          <input value={clientName} onChange={(e) => setClientName(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Nom client" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Telephone" />
          <input value={address} onChange={(e) => setAddress(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Adresse chantier" />
          <button onClick={addClient} className="rounded-2xl bg-orange-600 p-4 text-xl font-black text-white">Ajouter client</button>
        </div>
        <div className="mt-5 grid gap-3">
          {clients.map((c) => <div key={c.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-lg font-black text-white">{c.name} · {c.phone}<p className="text-base text-slate-400">{c.address}</p></div>)}
        </div>
      </div>

      <div className="pro-panel p-6">
        <h2 className="text-2xl font-black text-orange-400">Devis, contrats et factures</h2>
        <div className="mt-4 grid gap-3">
          <select value={kind} onChange={(e) => setKind(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white">
            <option value="devis">Devis</option>
            <option value="contrat">Contrat</option>
            <option value="facture">Facture compagnie</option>
            <option value="invoice_sous_traitant">Invoice sous-traitant</option>
          </select>
          <input value={docClient} onChange={(e) => setDocClient(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Client ou sous-traitant" />
          <input value={docTitle} onChange={(e) => setDocTitle(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Description" />
          <input value={amount} onChange={(e) => setAmount(e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xl font-bold text-white" placeholder="Montant CAD" />
          <button onClick={addDoc} className="rounded-2xl bg-blue-600 p-4 text-xl font-black text-white">Creer document</button>
        </div>
        <div className="mt-5 grid gap-3">
          {docs.map((d) => <div key={d.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-lg font-black text-white">{d.kind} · {d.client} · {d.amount}$<p className="text-base text-slate-400">{d.title} · {d.status}</p></div>)}
        </div>
      </div>
    </section>
  );
}
