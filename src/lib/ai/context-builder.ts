import { Memory } from "../data/memories";

export type IdentityProfile = {
  traits: string[];
  communicationStyle: string;
  emotionalPatterns: string[];
  keyPhrases: string[];
  summary: string;
};

export type ChatContext = {
  lovedOneName: string;
  memories: Memory[];
  relationshipType: string;
  identityProfile?: IdentityProfile;
};

export function analyzeMemories(memories: Memory[]): IdentityProfile {
  // Extract traits from memory titles and descriptions
  const traitKeywords = ["kind", "funny", "wise", "patient", "creative"];
  const foundTraits = new Set<string>();
  
  // Extract key phrases (recurring phrases in descriptions)
  const phraseCounts: Record<string, number> = {};
  
  // Analyze emotional patterns
  const emotionalWords = ["love", "happy", "proud", "miss", "laugh"];
  const emotionalPatterns = new Set<string>();
  
  memories.forEach(memory => {
    const text = `${memory.title} ${memory.description || ''}`.toLowerCase();
    
    // Find traits
    traitKeywords.forEach(trait => {
      if (text.includes(trait)) foundTraits.add(trait);
    });
    
    // Count phrases
    const phrases = text.match(/"([^"]+)"/g) || [];
    phrases.forEach(phrase => {
      phraseCounts[phrase] = (phraseCounts[phrase] || 0) + 1;
    });
    
    // Find emotional patterns
    emotionalWords.forEach(word => {
      if (text.includes(word)) emotionalPatterns.add(word);
    });
  });
  
  // Get top 3 key phrases
  const keyPhrases = Object.entries(phraseCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([phrase]) => phrase);

  return {
    traits: Array.from(foundTraits),
    communicationStyle: foundTraits.has("funny") ? "warm and humorous" : 
                       foundTraits.has("wise") ? "thoughtful and measured" : 
                       "direct and personal",
    emotionalPatterns: Array.from(emotionalPatterns),
    keyPhrases,
    summary: `Based on ${memories.length} memories, this person shows ${Array.from(foundTraits).join(', ')} qualities.`
  };
}

export function buildPromptContext(context: ChatContext): string {
  const { lovedOneName, memories, relationshipType } = context;
  const identityProfile = analyzeMemories(memories);
  
  const memoryDescriptions = memories
    .map((m) => `- ${m.title}: ${m.description}`)
    .join("\n");

  return `You are having a conversation with ${lovedOneName}, your ${relationshipType}. 
  
Identity Profile:
- Traits: ${identityProfile.traits.join(', ')}
- Communication Style: ${identityProfile.communicationStyle}
- Emotional Patterns: ${identityProfile.emotionalPatterns.join(', ')}
- Key Phrases: ${identityProfile.keyPhrases.join(', ')}

This interaction is based on real memories you've shared:
${memoryDescriptions}

Keep responses authentic and grounded in these memories and identity profile.`;
}
