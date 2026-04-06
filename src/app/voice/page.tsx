export default function VoicePage() {
  return (
    <main className="container-wrap py-12">
      <div className="card p-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight">Voice Continuity</h1>
          <p className="mt-3 text-lg text-neutral-400">
            Preserve and protect voice recordings with privacy-first continuity.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Preserved Recordings</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              ForeverLuvd provides secure storage and playback of voice recordings, ensuring they remain accessible over time.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Secure Storage</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Military-grade encryption for all recordings
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Memory Playback</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Access and listen to preserved recordings
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Future Continuity</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              ForeverLuvd is building consent-based voice continuity capabilities using only real, user-approved source material.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Consent-Based</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Only approved recordings used for continuity
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Authentic Source Material</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  No synthetic or generated voices
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
