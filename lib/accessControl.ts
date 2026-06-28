export type Role = "admin" | "owner" | "employee" | "subcontractor";

export type ResourceScope =
  | "admin_dashboard"
  | "company_finance"
  | "all_workers"
  | "all_projects"
  | "own_profile"
  | "own_pay"
  | "own_projects"
  | "own_tasks"
  | "own_documents";

const adminAccess: ResourceScope[] = [
  "admin_dashboard",
  "company_finance",
  "all_workers",
  "all_projects",
  "own_profile",
  "own_pay",
  "own_projects",
  "own_tasks",
  "own_documents"
];

const workerAccess: ResourceScope[] = [
  "own_profile",
  "own_pay",
  "own_projects",
  "own_tasks",
  "own_documents"
];

export function canAccess(role: Role, scope: ResourceScope) {
  if (role === "admin" || role === "owner") return adminAccess.includes(scope);
  return workerAccess.includes(scope);
}

export function mustFilterByOwnUser(role: Role) {
  return role === "employee" || role === "subcontractor";
}

export const portalRules = {
  adminCanSeeCompanyFinance: true,
  adminCanInviteWorkers: true,
  workerCanSeeCompanyFinance: false,
  workerCanSeeOtherWorkers: false,
  workerCanSeeOnlyAssignedProjects: true,
  workerCanSeeOnlyOwnPay: true,
  workerCanCreateClientInvoices: false,
  subcontractorCanSubmitOwnInvoice: true
};
