// AI Model Configuration
export const AI_MODELS = {
  "claude-3-5-sonnet": {
    id: "claude-3-5-sonnet-20241022",
    name: "Claude 3.5 Sonnet",
    provider: "anthropic",
  },
  "gpt-4o": {
    id: "gpt-4o",
    name: "GPT-4o",
    provider: "openai",
  },
  "gpt-4o-mini": {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    provider: "openai",
  },
} as const;

export type AIModelId = keyof typeof AI_MODELS;

export const DEFAULT_MODEL: AIModelId = "claude-3-5-sonnet";
