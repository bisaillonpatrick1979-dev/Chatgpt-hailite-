export type StatusTone = "green" | "orange" | "red" | "blue" | "gray";

export function statusTone(status: string): StatusTone {
  if (["approved", "paid", "active", "complete"].includes(status)) return "green";
  if (["pending", "draft", "paused"].includes(status)) return "orange";
  if (["blocked", "rejected", "late"].includes(status)) return "red";
  if (["sent", "review"].includes(status)) return "blue";
  return "gray";
}
