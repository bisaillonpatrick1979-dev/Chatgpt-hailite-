export const permissions = {
  admin: ["workers", "clients", "projects", "documents", "payroll", "finance", "ai", "settings"],
  employee: ["ownProfile", "ownProjects", "ownTasks", "ownPunch", "ownPay", "ownPhotos"],
  subcontractor: ["ownProfile", "ownProjects", "ownTasks", "ownProduction", "ownInvoices", "ownPhotos"]
};

export function hasPermission(role: keyof typeof permissions, permission: string) {
  return permissions[role].includes(permission);
}
