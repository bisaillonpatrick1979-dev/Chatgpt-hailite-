"use client";

import { useEffect, useMemo, useState } from "react";

type PunchState = "off" | "active" | "break" | "submitted";
type Task = { id: string; label: string; done: boolean };

const defaultTasks: Task[] = [
  { id: "fascia", label: "Fascia avant", done: false },
  { id: "soffit", label: "Soffit cote gauche", done: false },
  { id: "siding", label: "Siding mur sud", done: false },
  { id: "photos", label: "Photos finales", done: false }
];

export function LiveMvpConsole() {
  const [status, setStatus] = useState<PunchState>("off");
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [pi2, setPi2] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(0);
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("hailite_live_mvp");
    if (saved) {
      const data = JSON.parse(saved);
      setStatus(data.status || "off");
      setTasks(data.tasks || defaultTasks);
      setPi2(data.pi2 || 0);
      setBreakMinutes(data.breakMinutes || 0);
      setEvents(data.events || []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hailite_live_mvp", JSON.stringify({ status, tasks, pi2, breakMinutes, events }));
  }, [status, tasks, pi2, breakMinutes, events]);

  const completed = tasks.filter((task) => task.done).length;
  const progress = Math.round((completed / tasks.length) * 100);
  const invoiceUnlocked = progress === 100;
  const pay = useMemo(() => pi2 * 12, [pi2]);

  function log(label: string) {
    setEvents((prev) => [`${new Date().toLocaleTimeString()} · ${label}`, ...prev].slice(0, 7));
  }

  function toggleTask(id: string) {
    setTasks((prev) => prev.map((task) => task.id === id ? { ...task, done: !task.done } : task));
    log("Tache mise a jour");
  }

  function resetDemo() {
    setStatus("off");
    setTasks(defaultTasks);
    setPi2(0);
    setBreakMinutes(0);
    setEvents([]);
    localStorage.removeItem("hailite_live_mvp");
  }

  return (
    <section className="grid gap-5">
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-300">Live test console</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">Testable en temps reel local</h2>
            <p className="mt-2 text-sm font-semibold text-slate-400">Punch, breaks optionnels, taches, production pi2, invoice unlock et sauvegarde localStorage.</p>
          </div>
          <button onClick={resetDemo} className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-black text-white">Reset demo</button>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between"><h3 className="text-xl font-black text-white">Punch clock</h3><span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-black text-emerald-300">Geofence OK</span></div>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            <button onClick={() => { setStatus("active"); log("Punch In"); }} className="rounded-2xl bg-emerald-600 p-4 text-sm font-black text-white">Punch In</button>
            <button onClick={() => { setStatus("break"); log("Break In"); }} className="rounded-2xl bg-yellow-600 p-4 text-sm font-black text-white">Break In</button>
            <button onClick={() => { setStatus("active"); log("Break Out"); }} className="rounded-2xl bg-blue-600 p-4 text-sm font-black text-white">Break Out</button>
            <button onClick={() => { setStatus("submitted"); log("Punch Out"); }} className="rounded-2xl bg-red-700 p-4 text-sm font-black text-white">Punch Out</button>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/60 p-4"><p className="text-xs font-black uppercase text-slate-500">Status</p><p className="mt-1 text-2xl font-black text-orange-300">{status}</p></div>
            <div className="rounded-2xl bg-slate-950/60 p-4"><p className="text-xs font-black uppercase text-slate-500">Break</p><input value={breakMinutes} onChange={(e) => setBreakMinutes(Number(e.target.value) || 0)} className="mt-1 w-full bg-transparent text-2xl font-black text-white" /></div>
            <div className="rounded-2xl bg-slate-950/60 p-4"><p className="text-xs font-black uppercase text-slate-500">Production</p><input value={pi2} onChange={(e) => setPi2(Number(e.target.value) || 0)} className="mt-1 w-full bg-transparent text-2xl font-black text-white" /></div>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between"><h3 className="text-xl font-black text-white">Work order tasks</h3><span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-black text-orange-300">{progress}% complete</span></div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-emerald-400" style={{ width: `${progress}%` }} /></div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {tasks.map((task) => <button key={task.id} onClick={() => toggleTask(task.id)} className={`rounded-2xl border p-4 text-left text-sm font-black ${task.done ? "border-emerald-400/30 bg-emerald-500/15 text-emerald-200" : "border-white/10 bg-slate-950/55 text-slate-200"}`}>{task.done ? "✓" : "□"} {task.label}</button>)}
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5"><p className="text-xs font-black uppercase tracking-widest text-slate-500">Invoice status</p><p className={`mt-2 text-2xl font-black ${invoiceUnlocked ? "text-emerald-300" : "text-red-300"}`}>{invoiceUnlocked ? "Unlocked" : "Blocked"}</p><p className="mt-2 text-sm font-bold text-slate-400">All tasks required before invoice.</p></div>
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5"><p className="text-xs font-black uppercase tracking-widest text-slate-500">Estimated invoice</p><p className="mt-2 text-2xl font-black text-emerald-300">{pay.toFixed(2)}$ CAD</p><p className="mt-2 text-sm font-bold text-slate-400">12$/pi2 demo rate.</p></div>
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5"><p className="text-xs font-black uppercase tracking-widest text-slate-500">Event log</p><div className="mt-2 grid gap-1 text-xs font-bold text-slate-300">{events.length ? events.map((e) => <p key={e}>{e}</p>) : <p>No action yet.</p>}</div></div>
      </section>
    </section>
  );
}
