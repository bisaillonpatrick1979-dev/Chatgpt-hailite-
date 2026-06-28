export type BackupTarget = "local_file" | "supabase" | "google_drive" | "icloud" | "nas";

export type BackupPlan = {
  target: BackupTarget;
  frequency: "manual" | "daily" | "weekly";
  includePhotos: boolean;
  includeDocuments: boolean;
};

export const defaultBackupPlan: BackupPlan = {
  target: "local_file",
  frequency: "manual",
  includePhotos: true,
  includeDocuments: true
};
