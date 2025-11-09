import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";
import { AI_MODELS, type AIModelId } from "./models";

export function getModel(modelId: AIModelId) {
  const model = AI_MODELS[modelId];

  switch (model.provider) {
    case "anthropic":
      return anthropic(model.id);
    case "openai":
      return openai(model.id);
    default:
      throw new Error(`Unknown provider: ${model.provider}`);
  }
}
