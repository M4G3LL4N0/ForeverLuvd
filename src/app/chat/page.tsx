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
  {
    id: "3",
    loved_one_id: "mom-1",
    title: "Kitchen story",
    description: "Told a funny family story and ended with encouragement.",
    memory_type: "note",
    memory_date: "2024-01-08",
    file_url: null,
    created_at: "2024-01-08T12:00:00.000Z",
    updated_at: "2024-01-08T12:00:00.000Z",
  },
];

const EXAMPLE_PROFILE: IdentityProfile = {
  traits: ["kind", "patient", "wise"],
  communicationStyle: "warm, thoughtful, and reassuring",
  emotionalPatterns: ["expressed pride", "offered reassurance"],
  recurringThemes: ["family", "encouragement", "gratitude"],
  keyPhrases: ["I'm proud of you", "keep going", "I love you more than you know"],
  identitySummary:
    "A warm, steady presence who communicated with care, encouragement, and emotional grounding.",
  memoryCount: 12,
  derivedAt: "Preview generated from archived memories",
  confidenceNotes: [
    "Derived from a limited set of preserved examples",
    "Will become more specific as more memories are added",
  ],
};

const EXAMPLE_PROMPT = buildPromptPayload(EXAMPLE_PROFILE, [
  "Help preserve how this person communicated, what mattered to them, and how they made others feel.",
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
    text: "Based on the preserved memories, she often expressed pride in you, reassured you, and spoke with warmth that felt grounding.",
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
      <div className="card overflow-hidden p-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
            Identity engine
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Structured identity, derived from real memory.
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-400">
            ForeverLuvd is building a consent-based continuity layer that turns
            preserved memories into structured identity context for future,
            respectful interaction.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="card p-6">
            <h2 className="text-xl font-semibold">Concept preview</h2>
            <p className="mt-2 text-sm text-neutral-400">
              This is not generic AI. It is a future interaction layer built
              only from user-approved archived memories.
            </p>

            <div className="mt-6 space-y-4">
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  message={message.text}
                  type={message.type}
                  timestamp={message.timestamp}
                />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Identity signals</h3>
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap text-xs text-neutral-300">
                {JSON.stringify(derivedPreview, null, 2)}
              </pre>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">Prompt scaffold</h3>
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap text-xs text-neutral-300">
                {typeof EXAMPLE_PROMPT === "string"
                  ? EXAMPLE_PROMPT
                  : JSON.stringify(EXAMPLE_PROMPT, null, 2)}
              </pre>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">Privacy commitment</h3>
              <p className="mt-3 text-sm text-neutral-400">
                No hidden training. No resale. No platform ownership of likeness
                or memory. Identity is derived only from preserved, user-approved
                material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
