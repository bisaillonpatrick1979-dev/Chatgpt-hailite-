export type CalendarEvent = {
  id: string;
  projectId?: string;
  workerId?: string;
  title: string;
  start: string;
  end: string;
  type: "job" | "meeting" | "inspection" | "payroll" | "reminder";
};

export function eventDurationHours(event: CalendarEvent) {
  return Math.max((new Date(event.end).getTime() - new Date(event.start).getTime()) / 3600000, 0);
}
