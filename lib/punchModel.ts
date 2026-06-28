export type PunchStatus = "not_started" | "active" | "paused" | "submitted" | "approved";

export type PunchSession = {
  id: string;
  workerId: string;
  projectId: string;
  startAt?: string;
  endAt?: string;
  breakMinutes: number;
  status: PunchStatus;
};

export function workedHours(session: PunchSession) {
  if (!session.startAt || !session.endAt) return 0;
  const ms = new Date(session.endAt).getTime() - new Date(session.startAt).getTime();
  return Math.max(ms / 3600000 - session.breakMinutes / 60, 0);
}
