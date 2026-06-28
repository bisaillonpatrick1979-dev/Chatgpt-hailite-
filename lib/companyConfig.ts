export type CompanyConfig = {
  companyName: string;
  ownerName: string;
  language: string;
  country: string;
  region: string;
  currency: string;
  taxName: string;
  taxRate: number;
  unitSystem: string;
  aiProvider: string;
};

export const defaultConfig: CompanyConfig = {
  companyName: "Hailite Xteriors Inc.",
  ownerName: "Patrick Bisaillon",
  language: "fr",
  country: "Canada",
  region: "Alberta",
  currency: "CAD",
  taxName: "GST",
  taxRate: 5,
  unitSystem: "imperial",
  aiProvider: "openai"
};
