export type ReportPeriod = "day" | "week" | "month" | "year";

export type BusinessReport = {
  period: ReportPeriod;
  revenue: number;
  payroll: number;
  expenses: number;
  projectsCompleted: number;
};

export function netProfit(report: BusinessReport) {
  return report.revenue - report.payroll - report.expenses;
}
