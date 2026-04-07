import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/sign-in");
  }

  const [{ data: lovedOnes }, { data: memories }] = await Promise.all([
    supabase
      .from("loved_ones")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase
      .from("memories")
      .select("*")
      .order("memory_date", { ascending: false })
      .limit(8),
  ]);

  const lovedOnesCount = lovedOnes?.length ?? 0;
  const memoriesCount = memories?.length ?? 0;

  return (
    <main className="container-wrap py-10">
      <section className="card overflow-hidden p-8 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
              Legacy Control Center
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Memory Stewardship Platform
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-400">
              Your secure command center for preserving memories, voices, and identities 
              across generations. Every interaction strengthens your family's continuity.
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Protected by military-grade encryption and zero monetization policies.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/loved-ones/new" className="btn btn-secondary">
              Add loved one
            </Link>
            <Link href="/memories/new" className="btn btn-primary">
              Add memory
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-neutral-400">Loved ones</p>
            <p className="mt-3 text-3xl font-semibold">{lovedOnesCount}</p>
            <p className="mt-2 text-sm text-neutral-500">
              Private identity profiles under your stewardship.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-neutral-400">Recent memories</p>
            <p className="mt-3 text-3xl font-semibold">{memoriesCount}</p>
            <p className="mt-2 text-sm text-neutral-500">
              Timeline of preserved moments in your legacy vault.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-neutral-400">Protection status</p>
            <p className="mt-3 text-3xl font-semibold">Private</p>
            <p className="mt-2 text-sm text-neutral-500">
              Ownership and dignity stay with the family.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-neutral-400">Loved ones</p>
              <h2 className="mt-1 text-2xl font-semibold">Profiles</h2>
            </div>

            <Link href="/loved-ones/new" className="text-sm text-white underline">
              Add new
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {lovedOnes?.length ? (
              lovedOnes.map((person) => (
                <Link
                  key={person.id}
                  href={`/loved-ones/${person.id}`}
                  className="block rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-medium">{person.name}</p>
                      <p className="mt-1 text-sm text-neutral-400">
                        {person.relationship_type || "Loved one"}
                      </p>
                    </div>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                      Private
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="rounded-[24px] border border-dashed border-white/10 bg-white/5 p-6">
                <p className="text-lg font-medium text-white">No loved ones yet</p>
                <p className="mt-3 text-sm text-neutral-400">
                  Start by creating a private profile for someone important to you.
                </p>
                <div className="mt-5">
                  <Link href="/loved-ones/new" className="text-white underline">
                    Create the first profile
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="card p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-neutral-400">Recent memories</p>
              <h2 className="mt-1 text-2xl font-semibold">Timeline activity</h2>
            </div>

            <Link href="/chat" className="text-sm text-white underline">
              AI roadmap
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {memories?.length ? (
              memories.map((memory) => (
                <div
                  key={memory.id}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-medium">{memory.title}</h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-400">
                      {memory.memory_type || "memory"}
                    </span>
                  </div>

                  {memory.description ? (
                    <p className="mt-3 text-sm text-neutral-300">
                      {memory.description}
                    </p>
                  ) : null}

                  {memory.memory_date ? (
                    <p className="mt-4 text-xs text-neutral-500">
                      {memory.memory_date}
                    </p>
                  ) : null}
                </div>
              ))
            ) : (
              <div className="rounded-[24px] border border-dashed border-white/10 bg-white/5 p-6">
                <p className="text-lg font-medium text-white">No memories yet</p>
                <p className="mt-3 text-sm text-neutral-400">
                  Add your first memory to begin building a lasting archive.
                </p>
                <div className="mt-5">
                  <Link href="/memories/new" className="text-white underline">
                    Add the first memory
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
