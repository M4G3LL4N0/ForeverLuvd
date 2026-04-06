import { IdentityProfile, ChatContext, buildPromptContext } from "./context-builder";
import { buildPromptPayload, PromptPayload } from "./prompt-builder";
import { Memory } from "../data/memories";

type OrchestrationReport = {
  identityContext: string;
  promptPayload: PromptPayload;
  responseGuidelines: string[];
  safetyConstraints: string[];
  readinessNotes: string[];
  systemStatus: 'ready' | 'partial' | 'insufficient';
  derivedAt: string;
};

export function orchestrateAIInteraction(
  context: ChatContext | { lovedOneName: string, relationshipType: string, memories: Memory[] },
  sampleQuestion?: string
): OrchestrationReport {
  const { lovedOneName, relationshipType, memories, identityProfile } = 
    'identityProfile' in context ? context : 
    { ...context, identityProfile: undefined };

  // Build core components safely
  const profile = identityProfile || analyzeMemories(memories || []);
  const promptCtx = buildPromptContext({
    lovedOneName,
    relationshipType,
    memories: memories || [],
    identityProfile: profile
  });
  const payload = buildPromptPayload(profile, memories?.map(m => m.description || m.title) || []);

  // Determine system readiness
  const hasMemories = memories?.length > 0;
  const hasIdentity = profile.traits.length > 0 || profile.keyPhrases.length > 0;
  const systemStatus = hasMemories && hasIdentity ? 'ready' : 
                      hasMemories ? 'partial' : 'insufficient';

  // Generate response guidelines
  const responseGuidelines = [
    "Maintain authentic communication style matching derived traits",
    `Keep tone aligned with ${profile.communicationStyle} style`,
    "Only reference verifiable information",
    "State limitations clearly when asked beyond known data",
  ];

  // Enforce safety constraints
  const safetyConstraints = [
    "No invented biographical details",
    "No speculations beyond preserved context",
    "No emotional projections undefined in source material",
    "No temporal or spatial localization not in source",
  ];

  // Generate visibility into system readiness
  const readinessNotes = [
    `Derived from ${memories?.length || 0} preserved memories`,
    `${hasIdentity ? 'Strong' : 'Developing'} identity signals`,
    systemStatus === 'ready' ? 
      'Ready for interaction' : 
      'More memories needed for confident interaction'
  ];

  if (sampleQuestion) {
    readinessNotes.push(`Sample analysis preserved for "${sampleQuestion}"`);
  }

  return {
    identityContext: promptCtx,
    promptPayload: payload,
    responseGuidelines,
    safetyConstraints,
    readinessNotes,
    systemStatus,
    derivedAt: new Date().toISOString()
  };
}

function analyzeMemories(memories: Memory[]): IdentityProfile {
  // Reuse existing context builder logic via its separate exports
  const { analyzeMemories } = require('./context-builder');
  return analyzeMemories(memories);
}
