export type PhotoProof = {
  id: string;
  projectId: string;
  workerId: string;
  section: string;
  stage: "before" | "during" | "after" | "damage";
  note: string;
  photoUrl?: string;
  createdAt: string;
};

export const photoProofRules = {
  canRequirePhotoPerTask: true,
  workerCanUploadOwnPhotosOnly: true,
  adminCanReviewAllPhotos: true,
  invoiceCanBeBlockedUntilPhotosApproved: true
};
