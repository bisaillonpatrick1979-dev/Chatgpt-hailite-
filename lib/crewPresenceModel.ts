export type CrewPresence = {
  workerId: string;
  projectId: string;
  status: "off" | "on_site" | "paused" | "left_site";
  lastLatitude?: number;
  lastLongitude?: number;
  updatedAt: string;
};

export function isActiveOnSite(presence: CrewPresence) {
  return presence.status === "on_site";
}
