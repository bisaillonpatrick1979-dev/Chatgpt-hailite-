export type Expense = {
  id: string;
  projectId?: string;
  category: "material" | "tool" | "fuel" | "subcontractor" | "other";
  vendor: string;
  amount: number;
  currency: string;
  receiptPhotoUrl?: string;
  createdAt: string;
};

export function expenseTotal(expenses: Expense[]) {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}
