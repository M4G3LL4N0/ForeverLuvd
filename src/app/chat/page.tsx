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
            <h2 className="text-2xl font-semibold">Concept Preview</h2>
            <p className="mt-3 text-sm text-neutral-400">
              This demonstrates how future interactions could be grounded in your actual 
              preserved memories, with responses shaped only by your approved material.
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
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Our Approach</h3>
              <div className="mt-4 space-y-3 text-sm text-neutral-400">
                <p>• Ethical by design: No hidden training or data mining</p>
                <p>• Memory-first: Responses derived from your preserved content</p>
                <p>• Permission-based: You control what's included</p>
                <p>• Private infrastructure: Your data never leaves our secure systems</p>
                <p>• Human-centered: Designed for emotional authenticity</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">The Promise</h3>
              <p className="mt-3 text-sm text-neutral-400">
                We believe technology should help preserve the essence of a person - 
                their unique way of speaking, their values, and the emotional texture 
                of your relationship - without compromising their dignity or your privacy.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">Core Principles</h3>
              <div className="mt-3 space-y-3 text-sm text-neutral-400">
                <p>• No data resale or third-party access</p>
                <p>• Full transparency about how responses are generated</p>
                <p>• Permanent opt-out at any time</p>
                <p>• No synthetic content without explicit consent</p>
                <p>• Designed for meaningful connection, not entertainment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
