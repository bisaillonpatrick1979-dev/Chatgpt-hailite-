export type TrendDirection = "up" | "down" | "flat";

export type TrendMetric = {
  label: string;
  current: number;
  previous: number;
  suffix?: string;
};

export function trend(metric: TrendMetric) {
  const diff = metric.current - metric.previous;
  const percent = metric.previous === 0 ? 0 : (diff / metric.previous) * 100;
  const direction: TrendDirection = diff > 0 ? "up" : diff < 0 ? "down" : "flat";
  return { ...metric, diff, percent, direction };
}
