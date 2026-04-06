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
            Our Ethical Approach
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Authentic Connection
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-300/90 leading-relaxed">
            We're pioneering a new way to maintain bonds - grounded in your actual memories,
            with responses shaped only by what you choose to preserve. No data mining,
            no hidden training - just meaningful connection on your terms.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-8">
            <h2 className="text-2xl font-semibold">Identity Reconstruction Preview</h2>
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
                  <p className="text-neutral-400">Kind, Patient, Wise</p>
                </div>
                <div>
                  <p className="font-medium text-neutral-300">Communication Style</p>
                  <p className="text-neutral-400">Warm and thoughtful</p>
                </div>
                <div>
                  <p className="font-medium text-neutral-300">Emotional Patterns</p>
                  <p className="text-neutral-400">Expressed pride, Offered reassurance</p>
                </div>
                <div>
                  <p className="font-medium text-neutral-300">Key Phrases</p>
                  <p className="text-neutral-400">"I believe in you", "Take your time"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold">How Identity is Constructed</h3>
              <div className="mt-4 space-y-3 text-sm text-neutral-400">
                <p>• Analyzes patterns across your preserved memories</p>
                <p>• Identifies consistent traits and communication styles</p>
                <p>• Detects emotional tones and recurring phrases</p>
                <p>• Builds a unique profile without external data</p>
                <p>• Updates automatically as you add more memories</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">Our Ethical Framework</h3>
              <div className="mt-3 space-y-3 text-sm text-neutral-400">
                <p>• Deterministic analysis - no hidden AI training</p>
                <p>• Fully transparent profile construction</p>
                <p>• No synthetic content without consent</p>
                <p>• You control all input data</p>
                <p>• Private on-device processing option</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">The Future of Memory</h3>
              <p className="mt-3 text-sm text-neutral-400">
                We're moving beyond simple storage to meaningful reconstruction - 
                preserving not just what happened, but who someone was at their core.
              </p>
              <p className="mt-3 text-sm text-neutral-400">
                This system evolves with your memories, creating an increasingly 
                nuanced understanding while always remaining grounded in reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
