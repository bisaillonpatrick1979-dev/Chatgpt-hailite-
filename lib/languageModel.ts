export type AppLanguage = "fr" | "en" | "es";

export const languageLabels: Record<AppLanguage, string> = {
  fr: "Francais",
  en: "English",
  es: "Espanol"
};

export function defaultLanguageForCountry(country: string): AppLanguage {
  if (country.toLowerCase().includes("mexico")) return "es";
  if (country.toLowerCase().includes("united states")) return "en";
  return "fr";
}
