export type StorageProvider = "local" | "supabase" | "google_drive" | "icloud" | "nas";

export type StorageConfig = {
  provider: StorageProvider;
  encrypted: boolean;
  offlineFirst: boolean;
  syncEnabled: boolean;
};

export const defaultStorage: StorageConfig = {
  provider: "local",
  encrypted: true,
  offlineFirst: true,
  syncEnabled: false
};
