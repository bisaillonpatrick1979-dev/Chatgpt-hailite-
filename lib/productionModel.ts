export type ProductionEntry = {
  id: string;
  workerId: string;
  projectId: string;
  section: string;
  material: string;
  quantity: number;
  unit: "pi2" | "linear_ft" | "unit" | "hour";
  notes?: string;
  createdAt: string;
};

export function productivityPerHour(quantity: number, hours: number) {
  return hours <= 0 ? 0 : quantity / hours;
}
