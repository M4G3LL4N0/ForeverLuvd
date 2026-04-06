import { IdentityProfile } from "./context-builder";

export type PromptPayload = {
  identityContext: string;
  memoryContext: string;
  constraints: string;
};

export function buildPromptPayload(
  profile: IdentityProfile,
  memories: string[]
): PromptPayload {
  return {
    identityContext: `Identity Context:
- Traits: ${profile.traits.join(', ') || 'Not yet determined'}
- Communication Style: ${profile.communicationStyle}
- Emotional Patterns: ${profile.emotionalPatterns.join(', ') || 'Not yet determined'}
- Recurring Themes: ${profile.recurringThemes.join(', ') || 'Not yet determined'}
- Key Phrases: ${profile.keyPhrases.join(', ') || 'Not yet determined'}
- Summary: ${profile.identitySummary}`,

    memoryContext: `Memory Context:
${memories.map(m => `- ${m}`).join('\n') || 'No memories yet'}`,

    constraints: `Constraints:
1. Only use information from preserved memories
2. Never invent details not supported by memories
3. Maintain respectful, authentic tone
4. Clearly indicate when information is limited
5. Always prioritize user privacy and consent`
  };
}
