import { IdentityProfile } from "@/lib/ai/context-builder";
import { buildPromptPayload } from "@/lib/ai/prompt-builder";

type ChatMessageType = "user" | "system";

type ChatMessage = {
  id: string;
  text: string;
  type: ChatMessageType;
  timestamp: string;
};

function ChatBubble({
  message,
  type,
  timestamp,
}: {
  message: string;
  type: ChatMessageType;
  timestamp: string;
}) {
  const isUser = type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[85%] rounded-[24px] border px-4 py-3",
          isUser
            ? "border-white/10 bg-white text-black"
            : "border-white/10 bg-white/5 text-white",
        ].join(" ")}
      >
        <p className="text-sm leading-6">{message}</p>
        <p className="mt-2 text-xs opacity-60">{timestamp}</p>
      </div>
    </div>
  );
}

// Example identity profile
const EXAMPLE_PROFILE: IdentityProfile = {
  traits: ["kind", "patient", "wise"],
  communicationStyle: "warm and thoughtful",
  emotionalPatterns: ["expressed pride", "offered reassurance"],
  recurringThemes: ["family", "education", "personal growth"],
  keyPhrases: ["I believe in you", "Take your time", "You've got this"],
  identitySummary: "Based on preserved memories, this person showed consistent kindness, patience, and wisdom in their interactions.",
  confidenceNotes: [
    "Analysis derived from 12 user-preserved memories",
    "Confidence score: 78%",
    "Profile will refine as more memories are added"
  ]
};

// Example prompt payload
const EXAMPLE_PROMPT = buildPromptPayload(EXAMPLE_PROFILE, [
  "Encouraged me to pursue my dreams",
  "Always listened patiently to my problems",
  "Taught me valuable life lessons"
]);

const messages: ChatMessage[] = [
  {
    id: "1",
    text: "What was her favorite thing to say to me?",
    type: "user",
    timestamp: "7:42 PM",
  },
  {
    id: "2",
    text: "Based on the memories you preserved, she often expressed pride in you, reminded you to keep going, and spoke with warmth that felt grounding and reassuring.",
    type: "system",
    timestamp: "7:42 PM",
  },
  {
    id: "3",
    text: "Could I hear that in her voice one day?",
    type: "user",
    timestamp: "7:43 PM",
  },
  {
    id: "4",
    text: "That is part of the ForeverLuvd roadmap: a consent-based voice and memory experience built only from real, user-approved recordings and preserved context.",
    type: "system",
    timestamp: "7:43 PM",
  },
];

export default function ChatPage() {
  return (
    <main className="container-wrap py-12">
      <div className="card overflow-hidden p-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
            Identity Engine
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Preserving Who They Were
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-300/90 leading-relaxed">
            ForeverLuvd's Identity Engine transforms preserved memories into structured understanding - 
            capturing how someone spoke, what mattered to them, and how they made others feel.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-8">
            <h2 className="text-2xl font-semibold">Identity Reconstruction</h2>
            <p className="mt-3 text-sm text-neutral-400">
              This demonstrates how we construct a unique identity profile from your preserved memories,
              enabling authentic interactions grounded in real experiences.
            </p>

            <div className="mt-8 space-y-5">
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  message={message.text}
                  type={message.type}
                  timestamp={message.timestamp}
                />
              ))}
            </div>

            <div className="mt-12 card bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Example Identity Profile</h3>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <p className="font-medium text-neutral-300">Traits</p>
                  <p className="text-neutral-400">{EXAMPLE_PROFILE.traits.join(', ')}</p>
                </div>
                <div>
                  <p className="font-medium text-neutral-300">Communication Style</p>
                  <p className="text-neutral-400">{EXAMPLE_PROFILE.communicationStyle}</p>
                </div>
                <div>
                  <p className="font-medium text-neutral-300">Emotional Patterns</p>
                  <p className="text-neutral-400">{EXAMPLE_PROFILE.emotionalPatterns.join(', ')}</p>
                </div>
                <div>
                  <p className="font-medium text-neutral-300">Recurring Themes</p>
                  <p className="text-neutral-400">{EXAMPLE_PROFILE.recurringThemes.join(', ')}</p>
                </div>
                <div>
                  <p className="font-medium text-neutral-300">Key Phrases</p>
                  <p className="text-neutral-400">{EXAMPLE_PROFILE.keyPhrases.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold">The Identity Engine</h3>
              <div className="mt-4 space-y-3 text-sm text-neutral-400">
                <p>• Structured analysis of preserved memories</p>
                <p>• Captures communication style and emotional patterns</p>
                <p>• Identifies recurring themes and key phrases</p>
                <p>• Builds increasingly nuanced understanding</p>
                <p>• Always grounded in real, approved memories</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">Our Ethical Framework</h3>
              <div className="mt-3 space-y-3 text-sm text-neutral-400">
                <p>• Deterministic, transparent analysis</p>
                <p>• No hidden AI training or data mining</p>
                <p>• Full user control over all input data</p>
                <p>• Private, encrypted processing</p>
                <p>• Consent-based features only</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">Prompt Construction</h3>
              <div className="mt-3 space-y-3 text-sm text-neutral-400">
                <p>• Derived from preserved memories only</p>
                <p>• Structured for future AI readiness</p>
                <p>• Includes identity context and constraints</p>
                <p>• Automatically updates with new memories</p>
                <p>• Fully transparent and user-controlled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
