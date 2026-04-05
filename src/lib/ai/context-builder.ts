import { Memory } from "../data/memories";

export type ChatContext = {
  lovedOneName: string;
  memories: Memory[];
  relationshipType: string;
};

export function buildPromptContext(context: ChatContext): string {
  const { lovedOneName, memories, relationshipType } = context;
  
  const memoryDescriptions = memories
    .map((m) => `- ${m.title}: ${m.description}`)
    .join("\n");

  return `You are having a conversation with ${lovedOneName}, your ${relationshipType}. 
This interaction is based on real memories you've shared:

${memoryDescriptions}

Keep responses authentic and grounded in these memories.`;
}
