export type PayRecord = {
  id: string;
  workerName: string;
  workerRole: "employee" | "subcontractor";
  hours: number;
  rate: number;
  advance: number;
  total: number;
};

export function calculatePay(hours: number, rate: number, advance: number) {
  return Math.max(hours * rate - advance, 0);
}
