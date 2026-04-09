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

  const [
    { data: lovedOnes, count: lovedOnesCount }, 
    { data: memories, count: memoriesCount },
    { data: memoryTypes },
    { data: recentActivity },
    { data: stats }
  ] = await Promise.all([
    supabase
      .from("loved_ones")
      .select("*", { count: 'exact' })
      .order("created_at", { ascending: false }),
    supabase
      .from("memories")
      .select("*", { count: 'exact' })
      .order("memory_date", { ascending: false })
      .limit(8),
    supabase
      .from("memories")
      .select("memory_type")
      .not("memory_type", "is", null)
      .limit(5),
    supabase
      .from("activity_log")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5),
    supabase
      .rpc("get_user_stats", { user_id: user.id })
  ]);

  // Get unique memory types
  const uniqueMemoryTypes = [...new Set(
    memoryTypes?.map(m => m.memory_type).filter(Boolean)
  )] as string[];

  // Process stats
  const {
    total_memories = 0,
    total_voice_minutes = 0,
    total_photos = 0,
    total_videos = 0,
    total_letters = 0
  } = stats?.[0] || {};

  return (
    <main className="container-wrap py-10">
      <section className="card overflow-hidden p-8 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
              Dashboard
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Your private continuity vault.
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-300">
              Preserve the people you love through stories, voice notes, photos,
              letters, and moments that deserve more than a camera roll.
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
            <p className="mt-3 text-3xl font-semibold text-white">{lovedOnesCount}</p>
            <p className="mt-2 text-sm text-neutral-500">
              Private profiles you are preserving.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-neutral-400">Total memories</p>
            <p className="mt-3 text-3xl font-semibold text-white">{total_memories}</p>
            <div className="mt-2 space-y-1">
              <p className="text-sm text-neutral-500">
                Breakdown of preserved moments:
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="text-xs rounded-full bg-white/5 px-2 py-0.5 text-neutral-400">
                  {total_photos} photos
                </span>
                <span className="text-xs rounded-full bg-white/5 px-2 py-0.5 text-neutral-400">
                  {total_videos} videos
                </span>
                <span className="text-xs rounded-full bg-white/5 px-2 py-0.5 text-neutral-400">
                  {total_letters} letters
                </span>
                <span className="text-xs rounded-full bg-white/5 px-2 py-0.5 text-neutral-400">
                  {total_voice_minutes} voice mins
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-neutral-400">Recent activity</p>
            <div className="mt-3 space-y-2">
              {recentActivity?.map(activity => (
                <div key={activity.id} className="text-sm text-neutral-300">
                  {activity.description}
                  <span className="block text-xs text-neutral-500 mt-1">
                    {new Date(activity.created_at).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-neutral-400">Loved ones</p>
              <h2 className="mt-1 text-2xl font-semibold text-white">Profiles</h2>
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
                      <p className="text-lg font-medium text-white">{person.name}</p>
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
              <h2 className="mt-1 text-2xl font-semibold text-white">Timeline activity</h2>
            </div>

            <div className="flex gap-4">
              <Link href="/memories/new" className="text-sm text-white underline">
                Add memory
              </Link>
              <Link href="/chat" className="text-sm text-white underline">
                AI roadmap
              </Link>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {memories?.length ? (
              memories.map((memory) => (
                <div
                  key={memory.id}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-medium text-white">{memory.title}</h3>
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
