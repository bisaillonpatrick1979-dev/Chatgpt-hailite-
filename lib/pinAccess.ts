export type PortalRole = "admin" | "employee" | "subcontractor";

export type PinProfile = {
  userId: string;
  name: string;
  role: PortalRole;
  avatarInitials: string;
  route: string;
};

export function routeForRole(role: PortalRole) {
  if (role === "admin") return "/admin";
  if (role === "subcontractor") return "/contractor";
  return "/worker";
}

export const pinRules = {
  adminGetsFullAccess: true,
  workerGetsOwnDataOnly: true,
  subcontractorCanInvoiceCompany: true,
  employeeCannotInvoiceCompany: true,
  pinRequiredBeforePortal: true
};
