export type OfflineAction = {
  id: string;
  type: "punch" | "task" | "photo" | "invoice" | "signature";
  payload: Record<string, unknown>;
  createdAt: string;
  syncedAt?: string;
};

export const offlineRules = {
  workerCanPunchOffline: true,
  workerCanCompleteTasksOffline: true,
  workerCanPrepareInvoiceOffline: true,
  syncWhenOnline: true,
  adminMustReviewConflicts: true
};
