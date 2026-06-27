export function ReadableList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item} className="rounded-2xl border border-slate-300 bg-white p-4 text-xl font-black text-slate-950">
          {item}
        </div>
      ))}
    </div>
  );
}
