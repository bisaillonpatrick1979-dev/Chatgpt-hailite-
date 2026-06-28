export type PhotoApproval = {
  id: string;
  photoProofId: string;
  reviewedBy: string;
  status: "pending" | "approved" | "rejected";
  note?: string;
  reviewedAt?: string;
};

export function photoCanUnlockBilling(approval: PhotoApproval) {
  return approval.status === "approved";
}
