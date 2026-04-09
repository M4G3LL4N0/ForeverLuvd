export default function LegacyPage() {
  return (
    <main className="container-wrap py-16 md:py-24">
      <div className="card p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-light tracking-tight mb-4 bg-gradient-to-r from-[#ffd6c2] to-[#ff7b6b] bg-clip-text text-transparent">Legacy Continuity</h1>
          <p className="mb-8 text-xl text-neutral-400">
            Preserve and protect memories across generations through structured legacy planning.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Long-Term Preservation</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              ForeverLuvd provides the infrastructure to preserve memories and relationships across generations.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Archive Preservation</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Secure, long-term storage of memories
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Future Access</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Ensure memories remain accessible over time
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Legacy Planning</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              Designate custodians and establish continuity preferences for your digital legacy.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Custodian Designation</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Assign trusted individuals to manage your legacy
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Continuity Preferences</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Establish guidelines for future access and stewardship
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
