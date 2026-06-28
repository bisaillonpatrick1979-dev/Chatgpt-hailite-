export type CompanyFinanceSnapshot = {
  revenue: number;
  payroll: number;
  subcontractors: number;
  materials: number;
  tools: number;
  overhead: number;
};

export function companyNet(snapshot: CompanyFinanceSnapshot) {
  return snapshot.revenue - snapshot.payroll - snapshot.subcontractors - snapshot.materials - snapshot.tools - snapshot.overhead;
}
