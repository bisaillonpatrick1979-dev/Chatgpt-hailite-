import type { ReactNode } from "react";

export function BigActionButton({ children }: { children: ReactNode }) {
  return (
    <button className="w-full rounded-2xl bg-orange-600 p-5 text-xl font-black text-white shadow-xl hover:bg-orange-500">
      {children}
    </button>
  );
}
