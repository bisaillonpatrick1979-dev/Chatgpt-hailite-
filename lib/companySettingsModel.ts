export type CompanySettings = {
  companyName: string;
  logoUrl?: string;
  defaultLanguage: "fr" | "en" | "es";
  defaultCurrency: string;
  defaultTaxRate: number;
  highReadability: boolean;
};

export const defaultCompanySettings: CompanySettings = {
  companyName: "Hailite Xteriors Inc.",
  defaultLanguage: "fr",
  defaultCurrency: "CAD",
  defaultTaxRate: 5,
  highReadability: true
};
