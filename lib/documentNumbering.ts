export type DocumentPrefix = "DEV" | "CTR" | "FAC" | "INV";

export function formatDocumentNumber(prefix: DocumentPrefix, year: number, sequence: number) {
  return `${prefix}-${year}-${String(sequence).padStart(5, "0")}`;
}

export function nextSequence(current: number) {
  return current + 1;
}
