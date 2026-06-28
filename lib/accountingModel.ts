export type AccountingEntry = {
  id: string;
  type: "income" | "payroll" | "material" | "tool" | "expense";
  label: string;
  amount: number;
  currency: string;
  projectId?: string;
  createdAt: string;
};

export function grossProfit(entries: AccountingEntry[]) {
  const income = entries.filter((e) => e.type === "income").reduce((sum, e) => sum + e.amount, 0);
  const costs = entries.filter((e) => e.type !== "income").reduce((sum, e) => sum + e.amount, 0);
  return income - costs;
}
