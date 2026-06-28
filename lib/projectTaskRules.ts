export type TaskRequirement = {
  photoRequired: boolean;
  signatureRequired: boolean;
  adminApprovalRequired: boolean;
};

export const defaultTaskRequirement: TaskRequirement = {
  photoRequired: true,
  signatureRequired: false,
  adminApprovalRequired: true
};

export function isTaskBillable(done: boolean, req: TaskRequirement, photoOk: boolean, approved: boolean) {
  return done && (!req.photoRequired || photoOk) && (!req.adminApprovalRequired || approved);
}
