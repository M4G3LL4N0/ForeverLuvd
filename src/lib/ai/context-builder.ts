import { Memory } from "../data/memories";

export type IdentityProfile = {
  traits: string[];
  communicationStyle: string;
  emotionalPatterns: string[];
  recurringThemes: string[];
  keyPhrases: string[];
  identitySummary: string;
  confidenceNotes: string[];
};

export type ChatContext = {
  lovedOneName: string;
  memories: Memory[];
  relationshipType: string;
  identityProfile?: IdentityProfile;
};

const DEFAULT_PROFILE: IdentityProfile = {
  traits: [],
  communicationStyle: "direct and personal",
  emotionalPatterns: [],
  recurringThemes: [],
  keyPhrases: [],
  identitySummary: "Identity reconstruction in progress",
  confidenceNotes: ["Initial analysis based on preserved memories"]
};

export function analyzeMemories(memories: Memory[]): IdentityProfile {
  if (!memories?.length) {
    return DEFAULT_PROFILE;
  }

  try {
    // Core analysis
    const traitKeywords = ["kind", "funny", "wise", "patient", "creative", "loving", "supportive"];
    const emotionalWords = ["love", "happy", "proud", "miss", "laugh", "care", "hope"];
    const themeKeywords = ["family", "work", "travel", "art", "music", "nature"];
    
    const foundTraits = new Set<string>();
    const emotionalPatterns = new Set<string>();
    const themeCounts: Record<string, number> = {};
    const phraseCounts: Record<string, number> = {};
    
    memories.forEach(memory => {
      const text = `${memory.title} ${memory.description || ''}`.toLowerCase();
      
      // Analyze traits
      traitKeywords.forEach(trait => {
        if (text.includes(trait)) foundTraits.add(trait);
      });
      
      // Analyze emotions
      emotionalWords.forEach(word => {
        if (text.includes(word)) emotionalPatterns.add(word);
      });
      
      // Analyze themes
      themeKeywords.forEach(theme => {
        if (text.includes(theme)) {
          themeCounts[theme] = (themeCounts[theme] || 0) + 1;
        }
      });
      
      // Extract phrases
      const phrases = text.match(/"([^"]+)"/g) || [];
      phrases.forEach(phrase => {
        phraseCounts[phrase] = (phraseCounts[phrase] || 0) + 1;
      });
    });
    
    // Get top 3 themes
    const recurringThemes = Object.entries(themeCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([theme]) => theme);
    
    // Get top 3 phrases
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
      recurringThemes,
      keyPhrases,
      identitySummary: `Based on ${memories.length} preserved memories, this person shows ${Array.from(foundTraits).join(', ') || 'distinctive'} qualities.`,
      confidenceNotes: [
        `Analysis derived from ${memories.length} user-preserved memories`,
        "Confidence grows as more memories are added",
        "Only uses approved, user-provided content"
      ]
    };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function buildPromptContext(context: ChatContext): string {
  const { lovedOneName, memories, relationshipType, identityProfile } = context;
  const profile = identityProfile || analyzeMemories(memories);
  
  const memoryDescriptions = memories
    .map((m) => `- ${m.title}: ${m.description}`)
    .join("\n");

  return `You are having a conversation with ${lovedOneName}, your ${relationshipType}. 
  
Identity Profile:
- Traits: ${profile.traits.join(', ') || 'Not yet determined'}
- Communication Style: ${profile.communicationStyle}
- Emotional Patterns: ${profile.emotionalPatterns.join(', ') || 'Not yet determined'}
- Recurring Themes: ${profile.recurringThemes.join(', ') || 'Not yet determined'}
- Key Phrases: ${profile.keyPhrases.join(', ') || 'Not yet determined'}

This interaction is based on real, user-preserved memories:
${memoryDescriptions}

Constraints:
- Only use information from preserved memories
- Never invent details not supported by memories
- Maintain respectful, authentic tone
- Clearly indicate when information is limited`;
}
