export default function TechnologyPage() {
  return (
    <main className="container-wrap py-12">
      <div className="card p-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight">Technology</h1>
          <p className="mt-3 text-lg text-neutral-400">
            ForeverLuvd's technical architecture is designed for privacy, security, and long-term continuity.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Platform Architecture</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              ForeverLuvd's technology stack is built on three core layers:
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Archive Layer</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Secure storage and preservation of memories
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Identity Layer</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Structured preservation of identity and relationships
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Orchestration Layer</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Consent-based interaction and continuity
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Privacy & Consent</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              ForeverLuvd's technical architecture is designed to protect privacy and ensure consent at every level.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Zero Data Monetization</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Your memories are never sold or shared
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Consent-Based AI</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  AI only interacts with explicit permission
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
