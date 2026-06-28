export type AccessAudit = {
  id: string;
  userId: string;
  role: "admin" | "employee" | "subcontractor";
  action: string;
  resource: string;
  allowed: boolean;
  createdAt: string;
};

export function auditMessage(audit: AccessAudit) {
  return `${audit.allowed ? "ALLOWED" : "BLOCKED"}: ${audit.role} ${audit.action} ${audit.resource}`;
}
