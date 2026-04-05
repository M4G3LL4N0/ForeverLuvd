import { MessageBubble } from "@/components/message-bubble";

export default function ChatPage() {
  // Simulated conversation data
  const messages = [
    {
      id: "1",
      text: "Hi there! I'm here to help you reconnect with your loved ones through the memories you've shared.",
      type: "system",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "Would you like to start by selecting a loved one to chat with?",
      type: "system",
      timestamp: new Date(),
    },
    {
      id: "3",
      text: "Yes, I'd like to chat with Grandma.",
      type: "user",
      timestamp: new Date(),
    },
    {
      id: "4",
      text: "Wonderful choice! Based on the memories you've shared, I can help you have a conversation that feels authentic and true to your relationship.",
      type: "system",
      timestamp: new Date(),
    },
  ];

  return (
    <main className="container-wrap py-12">
      <div className="card p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">The Future of Memory</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">ForeverLuvd AI</h1>
        <p className="mt-4 max-w-2xl text-neutral-400">
          A revolutionary approach to preserving connections through consent-based AI,
          powered exclusively by your curated memories and approved likeness.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 p-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message.text}
                type={message.type}
                timestamp={message.timestamp}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 p-6">
              <h2 className="text-lg font-semibold">Your Voice, Your Control</h2>
              <p className="mt-2 text-sm text-neutral-400">
                Opt-in to preserve voice patterns and conversational style,
                maintaining complete ownership over how your likeness is used.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h2 className="text-lg font-semibold">Memory-Powered Interactions</h2>
              <p className="mt-2 text-sm text-neutral-400">
                Conversations rooted in real moments, drawing only from memories
                you've explicitly chosen to share.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h2 className="text-lg font-semibold">Ethical AI Framework</h2>
              <p className="mt-2 text-sm text-neutral-400">
                Built on principles of consent, transparency, and user sovereignty.
                Your data remains yours, always.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-white/10 p-8">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Concept Preview</h2>
              <div className="space-y-4 text-sm text-neutral-400">
                <p>• Voice pattern preservation</p>
                <p>• Memory-based conversation</p>
                <p>• User-approved likeness</p>
                <p>• End-to-end encryption</p>
                <p>• Granular consent controls</p>
              </div>
              <div className="rounded-lg bg-white/5 p-4 text-center text-sm">
                Coming Q4 2026 - Currently in development
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
