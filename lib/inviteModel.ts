export type InviteChannel = "email" | "sms" | "link";

export type WorkerInvite = {
  id: string;
  workerName: string;
  role: "admin" | "employee" | "subcontractor";
  channel: InviteChannel;
  destination: string;
  pinLength: number;
  expiresAt: string;
};

export function maskPin(pin: string) {
  return "*".repeat(pin.length);
}
