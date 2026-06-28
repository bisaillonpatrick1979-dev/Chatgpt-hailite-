export type InvitationStatus = "draft" | "sent" | "accepted" | "expired" | "revoked";

export type EmployeeInvitation = {
  id: string;
  companyId: string;
  employeeName: string;
  contact: string;
  role: "employee" | "subcontractor";
  accessCode: string;
  status: InvitationStatus;
  createdAt: string;
  expiresAt: string;
};

export function createInvitationLink(companySlug: string, invitationId: string) {
  return `/crew?company=${companySlug}&invite=${invitationId}`;
}

export const invitationRules = {
  employeeMustChooseOwnAvatar: true,
  employeeMustEnterAccessCode: true,
  employeeCanOnlySeeOwnData: true,
  adminCanRevokeAccess: true
};
