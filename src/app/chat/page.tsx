import {
  type IdentityProfile,
  buildPromptContext,
} from "@/lib/ai/context-builder";
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

const EXAMPLE_MEMORIES = [
  {
    id: "1",
    loved_one_id: "mom-1",
    title: "Birthday voicemail",
    description: "Said she was proud and reminded me to keep going.",
    memory_type: "audio",
    memory_date: "2024-05-11",
    file_url: null,
    created_at: "2024-05-11T12:00:00.000Z",
    updated_at: "2024-05-11T12:00:00.000Z",
  },
  {
    id: "2",
    loved_one_id: "mom-1",
    title: "Letter from winter",
    description: "Wrote with warmth, gratitude, and reassurance.",
    memory_type: "letter",
    memory_date: "2023-12-18",
    file_url: null,
    created_at: "2023-12-18T12:00:00.000Z",
    updated_at: "2023-12-18T12:00:00.000Z",
  },
];

const EXAMPLE_PROFILE: IdentityProfile = {
  traits: ["kind", "patient", "wise"],
  communicationStyle: "warm, thoughtful, and reassuring",
  emotionalPatterns: ["expressed pride", "offered reassurance"],
  recurringThemes: ["family", "encouragement"],
  keyPhrases: ["I'm proud of you", "keep going"],
  identitySummary:
    "A warm, steady presence who communicated with care and encouragement.",
  memoryCount: 8,
  derivedAt: "Preview generated from archived memories",
  confidenceNotes: [
    "Derived from limited sample data",
    "Will improve as more memories are added",
  ],
};

const EXAMPLE_PROMPT = buildPromptPayload(EXAMPLE_PROFILE, [
  "Preserve how this person communicated and supported others.",
]);

const messages: ChatMessage[] = [
  {
    id: "1",
    text: "What was she like?",
    type: "user",
    timestamp: "7:42 PM",
  },
  {
    id: "2",
    text: "She communicated with warmth, encouragement, and emotional steadiness.",
    type: "system",
    timestamp: "7:42 PM",
  },
];

export default function ChatPage() {
  const derivedPreview = buildPromptContext({
    lovedOneName: "Mom",
    relationshipType: "Mother",
    memories: EXAMPLE_MEMORIES,
  });

  return (
    <main className="container-wrap py-12">
      <div className="card p-8">
        <h1 className="text-4xl font-semibold">Continuity Systems</h1>
        <p className="mt-3 text-neutral-400 max-w-2xl">
          Enterprise-grade continuity systems for identity preservation. 
          Each interaction is consent-gated, encrypted, and governed by 
          your stewardship protocols.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-lg font-semibold">Continuity Simulation Preview</h2>

            <div className="mt-6 space-y-4">
              {messages.map((m) => (
                <ChatBubble
                  key={m.id}
                  message={m.text}
                  type={m.type}
                  timestamp={m.timestamp}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Identity Preservation</h3>
              <pre className="mt-4 text-xs text-neutral-300">
                {JSON.stringify(derivedPreview, null, 2)}
              </pre>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">Stewardship Framework</h3>
              <pre className="mt-4 text-xs text-neutral-300">
                {JSON.stringify(EXAMPLE_PROMPT, null, 2)}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-neutral-500">
          Certified private compute infrastructure. Zero data retention policies. 
          Audit-ready compliance framework.
        </div>
      </div>
    </main>
  );
}
