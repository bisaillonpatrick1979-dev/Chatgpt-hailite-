export type Payment = {
  id: string;
  documentId: string;
  payerName: string;
  amount: number;
  currency: string;
  method: "cash" | "cheque" | "etransfer" | "card" | "bank" | "other";
  paidAt: string;
};

export function balanceDue(total: number, payments: Payment[]) {
  return Math.max(total - payments.reduce((sum, p) => sum + p.amount, 0), 0);
}
