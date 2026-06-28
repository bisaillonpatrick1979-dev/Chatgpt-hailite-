export type NotificationType = "invoice" | "task" | "gps" | "payroll" | "ai" | "approval";

export type AppNotification = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  userId?: string;
  roleScope: "admin" | "worker" | "all";
  read: boolean;
  createdAt: string;
};
