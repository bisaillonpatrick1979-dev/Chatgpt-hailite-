export type InvoiceAmounts = {
  subtotal: number;
  discount: number;
  advance: number;
  taxRate: number;
};

export function calculateInvoice(values: InvoiceAmounts) {
  const taxableBase = Math.max(values.subtotal - values.discount - values.advance, 0);
  const tax = taxableBase * (values.taxRate / 100);
  const total = taxableBase + tax;
  return { taxableBase, tax, total };
}

export function nextDocumentNumber(prefix: string, sequence: number) {
  return `${prefix}-${String(sequence).padStart(5, "0")}`;
}
