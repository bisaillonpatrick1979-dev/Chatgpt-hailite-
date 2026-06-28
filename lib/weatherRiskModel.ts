export type WeatherRisk = {
  temperatureC: number;
  windKph: number;
  precipitationMm: number;
  lightning: boolean;
};

export function workRiskLevel(risk: WeatherRisk) {
  if (risk.lightning || risk.windKph > 50) return "high";
  if (risk.precipitationMm > 5 || risk.windKph > 30) return "medium";
  return "low";
}
