export type QuoteLine = {
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
};

export type Quote = {
  id: string;
  clientId: string;
  projectAddress: string;
  lines: QuoteLine[];
  status: "draft" | "sent" | "accepted" | "rejected";
};

export function quoteSubtotal(quote: Quote) {
  return quote.lines.reduce((sum, line) => sum + line.quantity * line.unitPrice, 0);
}
