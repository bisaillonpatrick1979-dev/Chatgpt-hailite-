import type { ReactNode } from "react";

type CardProps = {
  title: string;
  value?: string;
  detail?: string;
  tone?: "default" | "dark" | "success" | "warning";
};

const toneClass = {
  default: "bg-white text-slate-950 border-slate-300",
  dark: "bg-slate-950 text-white border-slate-800",
  success: "bg-emerald-50 text-emerald-950 border-emerald-300",
  warning: "bg-amber-50 text-amber-950 border-amber-300"
};

export function ReadableCard({ title, value, detail, tone = "default" }: CardProps) {
  return (
    <section className={`rounded-3xl border p-5 shadow-sm ${toneClass[tone]}`}>
      <h2 className="text-xl font-black leading-tight">{title}</h2>
      {value ? <p className="big-number mt-4">{value}</p> : null}
      {detail ? <p className="large-readable mt-4 font-semibold opacity-85">{detail}</p> : null}
    </section>
  );
}

export function LargeButton({ children, href }: { children: ReactNode; href?: string }) {
  const className = "flex min-h-16 items-center justify-center rounded-2xl bg-slate-950 px-5 py-4 text-center text-lg font-black text-white shadow-sm";
  if (href) return <a href={href} className={className}>{children}</a>;
  return <button className={className}>{children}</button>;
}

export function ReadableRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 gap-2 border-b border-slate-200 py-4 sm:grid-cols-2">
      <dt className="text-lg font-black text-slate-700">{label}</dt>
      <dd className="text-xl font-black text-slate-950">{value}</dd>
    </div>
  );
}
