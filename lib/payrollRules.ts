export type PayMode = "hourly" | "square_foot" | "fixed";

export function calculateWorkerPay(mode: PayMode, quantity: number, rate: number) {
  return quantity * rate;
}

export const payrollRules = {
  employeeInvoicesDisabled: true,
  subcontractorInvoicesEnabled: true,
  adminApprovalRequired: true,
  advancesAllowed: true
};
