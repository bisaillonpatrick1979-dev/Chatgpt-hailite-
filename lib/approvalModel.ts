export type ApprovalStatus = "pending" | "approved" | "rejected" | "needs_changes";

export type ApprovalRequest = {
  id: string;
  resourceType: "task" | "invoice" | "punch" | "photo" | "contract";
  resourceId: string;
  requestedBy: string;
  status: ApprovalStatus;
  reviewedBy?: string;
};

export function isApproved(request: ApprovalRequest) {
  return request.status === "approved";
}
