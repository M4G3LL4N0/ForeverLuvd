export default function VoicePage() {
  return (
    <main className="container-wrap py-12 md:py-16 lg:py-24">
      <div className="card p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4 bg-gradient-to-r from-[#ffd6c2] to-[#ff7b6b] bg-clip-text text-transparent">Voice Continuity</h1>
          <p className="mb-8 text-lg sm:text-xl text-neutral-400">
            Preserve and protect voice recordings with privacy-first continuity.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6 text-center">Preserved Recordings</h2>
            <p className="max-w-3xl mx-auto text-lg text-neutral-400 leading-relaxed text-center">
              ForeverLuvd provides secure storage and playback of voice recordings, ensuring they remain accessible over time.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/5 to-white/10 p-6 hover:bg-white/10 transition-all hover:-translate-y-1 transform-gpu">
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

          <section className="mt-16">
            <h2 className="text-3xl font-semibold tracking-tight text-center">Future Continuity</h2>
            <p className="mt-4 max-w-3xl mx-auto text-neutral-400 text-center">
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
