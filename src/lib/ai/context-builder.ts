import { Memory } from "../data/memories";

export type IdentityProfile = {
  traits: string[];
  communicationStyle: string;
  emotionalPatterns: string[];
  recurringThemes: string[];
  keyPhrases: string[];
  identitySummary: string;
  confidenceNotes: string[];
  memoryCount: number;
  derivedAt: string;
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
  confidenceNotes: ["Initial analysis based on preserved memories"],
  memoryCount: 0,
  derivedAt: new Date().toISOString()
};

export function analyzeMemories(memories: Memory[]): IdentityProfile {
  if (!memories?.length) {
    return DEFAULT_PROFILE;
  }

  try {
    // Expanded analysis categories
    const traitKeywords = [
      "kind", "funny", "wise", "patient", "creative", 
      "loving", "supportive", "generous", "thoughtful",
      "resilient", "optimistic", "practical"
    ];
    
    const emotionalWords = [
      "love", "happy", "proud", "miss", "laugh", 
      "care", "hope", "cherish", "admire", "inspire"
    ];
    
    const themeKeywords = [
      "family", "work", "travel", "art", "music", 
      "nature", "education", "community", "tradition",
      "achievement", "spirituality"
    ];

    const foundTraits = new Set<string>();
    const emotionalPatterns = new Set<string>();
    const themeCounts: Record<string, number> = {};
    const phraseCounts: Record<string, number> = {};
    const wordFrequency: Record<string, number> = {};

    // Analyze each memory
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
      
      // Extract phrases and word frequency
      const phrases = text.match(/"([^"]+)"/g) || [];
      phrases.forEach(phrase => {
        phraseCounts[phrase] = (phraseCounts[phrase] || 0) + 1;
      });

      // Count word frequency
      text.split(' ').forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
      });
    });

    // Get top themes
    const recurringThemes = Object.entries(themeCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([theme]) => theme);
    
    // Get top phrases
    const keyPhrases = Object.entries(phraseCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([phrase]) => phrase);

    // Determine communication style
    const communicationStyle = 
      foundTraits.has("funny") ? "warm and humorous" :
      foundTraits.has("wise") ? "thoughtful and measured" :
      foundTraits.has("optimistic") ? "positive and encouraging" :
      "direct and personal";

    return {
      traits: Array.from(foundTraits),
      communicationStyle,
      emotionalPatterns: Array.from(emotionalPatterns),
      recurringThemes,
      keyPhrases,
      identitySummary: `Based on ${memories.length} preserved memories, this person shows ${Array.from(foundTraits).join(', ') || 'distinctive'} qualities. Their communication style appears ${communicationStyle}, with recurring themes around ${recurringThemes.join(', ') || 'various aspects of life'}.`,
      confidenceNotes: [
        `Analysis derived from ${memories.length} user-preserved memories`,
        "Confidence grows as more memories are added",
        "Only uses approved, user-provided content",
        "Analysis updated at: " + new Date().toLocaleString()
      ],
      memoryCount: memories.length,
      derivedAt: new Date().toISOString()
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
- Memory Count: ${profile.memoryCount}
- Derived At: ${new Date(profile.derivedAt).toLocaleString()}

This interaction is based on real, user-preserved memories:
${memoryDescriptions}

Constraints:
- Only use information from preserved memories
- Never invent details not supported by memories
- Maintain respectful, authentic tone
- Clearly indicate when information is limited
- Always prioritize user privacy and consent`;
}
