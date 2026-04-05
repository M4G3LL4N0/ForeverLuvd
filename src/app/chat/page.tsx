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
            Future AI layer
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Conversation built from real memory.
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-400">
            ForeverLuvd’s AI layer is designed as a private, consent-based
            continuity experience — rooted in preserved memories, voice notes,
            letters, stories, and archived context.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-6">
            <h2 className="text-xl font-semibold">Concept preview</h2>
            <p className="mt-2 text-sm text-neutral-400">
              This is not generic AI. It is a future interaction layer built
              only from real preserved material and only with user-approved data.
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
              <h3 className="text-lg font-semibold">How it will work</h3>
              <div className="mt-4 space-y-3 text-sm text-neutral-400">
                <p>• Preserve real memories, recordings, and written context</p>
                <p>• User approves what can be used</p>
                <p>• Future interaction is derived only from that archive</p>
                <p>• Ownership and dignity stay with the family</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">Why this matters</h3>
              <p className="mt-3 text-sm text-neutral-400">
                The goal is not imitation for its own sake. The goal is
                continuity, comfort, and a more faithful way to preserve the
                emotional texture of a person over time.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">Privacy commitment</h3>
              <p className="mt-3 text-sm text-neutral-400">
                No hidden training. No resale. No platform ownership of likeness
                or memory. Everything begins with consent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
