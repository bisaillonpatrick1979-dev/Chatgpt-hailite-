export type UserRole = "owner" | "admin" | "employee" | "subcontractor" | "client";

export type StorageMode = "supabase" | "local" | "personal_cloud" | "hybrid";

export type UnitSystem = "imperial" | "metric";

export type MoneyCurrency = "CAD" | "USD" | "EUR";

export type ProjectStatus = "draft" | "active" | "paused" | "completed" | "archived";

export type TaskStatus = "todo" | "in_progress" | "done" | "blocked" | "approved" | "rejected";

export type PayMode = "hourly" | "square_foot" | "linear_foot" | "unit" | "fixed" | "mixed";

export type ProjectSection = {
  id: string;
  name: string;
  estimatedQuantity: number;
  installedQuantity: number;
  unit: "sqft" | "linear_ft" | "unit" | "sqm" | "linear_m";
  status: ProjectStatus;
};

export type FieldTask = {
  id: string;
  title: string;
  sectionId: string;
  status: TaskStatus;
  photoRequired: boolean;
  noteRequired: boolean;
  adminApprovalRequired: boolean;
};

export type Project = {
  id: string;
  companyId: string;
  name: string;
  clientName: string;
  address: string;
  latitude?: number;
  longitude?: number;
  geofenceRadiusFeet: number;
  geofenceRadiusMeters: number;
  status: ProjectStatus;
};
