export type AiProvider = "openai" | "gemini" | "claude";

export type RegionProfile = {
  country: string;
  region: string;
  currency: string;
  taxSystem: string;
  unitSystem: "imperial" | "metric";
  constructionCodeProfile: string;
};

export type AiAgentConfig = {
  provider: AiProvider;
  model: string;
  enabled: boolean;
  region: RegionProfile;
};

export const albertaProfile: RegionProfile = {
  country: "Canada",
  region: "Alberta",
  currency: "CAD",
  taxSystem: "GST",
  unitSystem: "imperial",
  constructionCodeProfile: "canada_alberta_construction_context"
};

export const texasProfile: RegionProfile = {
  country: "United States",
  region: "Texas",
  currency: "USD",
  taxSystem: "state_sales_tax",
  unitSystem: "imperial",
  constructionCodeProfile: "usa_texas_construction_context"
};

export const europeProfile: RegionProfile = {
  country: "European Union",
  region: "Generic EU",
  currency: "EUR",
  taxSystem: "VAT",
  unitSystem: "metric",
  constructionCodeProfile: "eu_construction_context"
};

export function buildAgentSystemContext(config: AiAgentConfig) {
  return {
    provider: config.provider,
    model: config.model,
    region: config.region,
    role: "experienced_construction_engineer_and_business_operator",
    safetyRule: "AI suggestions must be reviewed by a qualified local professional before legal, engineering, code or safety decisions."
  };
}
