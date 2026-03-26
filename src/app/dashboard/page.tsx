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
    supabase.from("loved_ones").select("*").order("created_at", { ascending: false }),
    supabase.from("memories").select("*").order("memory_date", { ascending: false }).limit(10),
  ]);

  return (
    <main className="container-wrap py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-neutral-400">Dashboard</p>
          <h1 className="mt-1 text-4xl font-semibold tracking-tight">ForeverLuvd</h1>
        </div>

        <div className="flex gap-3">
          <Link href="/loved-ones/new" className="btn btn-secondary">
            Add loved one
          </Link>
          <Link href="/memories/new" className="btn btn-primary">
            Add memory
          </Link>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[.9fr,1.1fr]">
        <section className="card p-6">
          <h2 className="text-2xl font-semibold">Loved ones</h2>
          <p className="mt-2 text-neutral-400">
            Private profiles for the people you want to preserve.
          </p>

          <div className="mt-6 space-y-4">
            {lovedOnes?.length ? (
              lovedOnes.map((person) => (
                <Link
                  key={person.id}
                  href={`/loved-ones/${person.id}`}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.07]"
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
              <div className="rounded-2xl border border-dashed border-white/10 p-6 text-neutral-400">
                No loved ones yet. Create one to start building a memory vault.
              </div>
            )}
          </div>
        </section>

        <section className="card p-6">
          <h2 className="text-2xl font-semibold">Recent memories</h2>
          <p className="mt-2 text-neutral-400">
            The latest moments, notes, and files you’ve preserved.
          </p>

          <div className="mt-6 space-y-4">
            {memories?.length ? (
              memories.map((memory) => (
                <div key={memory.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-medium">{memory.title}</p>
                    <span className="text-xs text-neutral-400">{memory.memory_type}</span>
                  </div>
                  {memory.description ? (
                    <p className="mt-2 text-sm text-neutral-400">{memory.description}</p>
                  ) : null}
                  {memory.memory_date ? (
                    <p className="mt-3 text-xs text-neutral-500">{memory.memory_date}</p>
                  ) : null}
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 p-6 text-neutral-400">
                No memories yet. Add your first memory now.
              </div>
            )}
          </div>

          <div className="mt-6">
            <Link href="/chat" className="btn btn-secondary">
              Open AI memory chat
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
