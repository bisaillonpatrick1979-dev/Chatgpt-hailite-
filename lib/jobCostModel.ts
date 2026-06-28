export type JobCost = {
  labor: number;
  subcontractors: number;
  materials: number;
  tools: number;
  overhead: number;
};

export function totalJobCost(cost: JobCost) {
  return cost.labor + cost.subcontractors + cost.materials + cost.tools + cost.overhead;
}

export function jobMargin(revenue: number, cost: JobCost) {
  return revenue <= 0 ? 0 : ((revenue - totalJobCost(cost)) / revenue) * 100;
}
