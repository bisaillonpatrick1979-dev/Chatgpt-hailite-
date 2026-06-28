export type AiProviderName = "openai" | "gemini" | "claude" | "demo";

export type AiProviderStatus = {
  provider: AiProviderName;
  configured: boolean;
  model?: string;
};

export function providerNeedsKey(provider: AiProviderName) {
  return provider !== "demo";
}
