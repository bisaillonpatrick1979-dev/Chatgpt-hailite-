export const storageModes = [
  "supabase",
  "local_device",
  "personal_cloud",
  "local_server",
  "hybrid"
] as const;

export type AppStorageMode = (typeof storageModes)[number];
