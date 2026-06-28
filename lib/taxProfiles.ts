export type TaxProfile = {
  country: string;
  region: string;
  currency: string;
  unitSystem: "imperial" | "metric";
  taxes: { name: string; rate: number }[];
};

export const taxProfiles: TaxProfile[] = [
  { country: "Canada", region: "Alberta", currency: "CAD", unitSystem: "imperial", taxes: [{ name: "GST", rate: 5 }] },
  { country: "Canada", region: "Quebec", currency: "CAD", unitSystem: "metric", taxes: [{ name: "TPS", rate: 5 }, { name: "TVQ", rate: 9.975 }] },
  { country: "United States", region: "Texas", currency: "USD", unitSystem: "imperial", taxes: [{ name: "Sales Tax", rate: 6.25 }] },
  { country: "European Union", region: "Generic", currency: "EUR", unitSystem: "metric", taxes: [{ name: "VAT", rate: 20 }] }
];
