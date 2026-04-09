export default function FamilyPage() {
  return (
    <main className="container-wrap py-16 md:py-24">
      <div className="card p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-light tracking-tight mb-4 bg-gradient-to-r from-[#ffd6c2] to-[#ff7b6b] bg-clip-text text-transparent">Family Continuity</h1>
          <p className="mb-8 text-xl text-neutral-400">
            Preserve and protect memories together through trusted family collaboration.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Shared Preservation</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              ForeverLuvd enables families to collectively preserve and protect memories through secure, permission-based collaboration.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Trusted Contributors</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Invite family members to help preserve memories
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Shared Archives</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Collaborate on preserving one person from many perspectives
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Family Stewardship</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              Maintain precise control over who can access memories and how they're preserved across generations.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Permission-Based Access</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Granular control over family member permissions
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">Multi-Person Continuity</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Preserve relationships across family members
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
