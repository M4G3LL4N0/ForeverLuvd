import Link from "next/link";
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Memory } from '@/lib/data/memories';
import { validateEnv } from '@/lib/utils/env';
import { LovedOne } from '@/lib/data/loved-ones';
import { Button } from '@/components/ui/button';

export default async function DashboardPage() {
  // Validate required environment variables
  validateEnv(['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY']);

  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError) {
    console.error('Auth error:', authError);
    redirect('/error?code=auth_failed');
  }

  if (!user) {
    redirect("/auth/sign-in");
  }

  const [
    { data: lovedOnes, error: lovedOnesError },
    { data: memories, error: memoriesError },
    { data: insights, error: insightsError }
  ] = await Promise.all([
    supabase
      .from("loved_ones")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase
      .from("memories")
      .select("*, loved_ones!inner(name)")
      .order("memory_date", { ascending: false })
      .limit(8),
    supabase
      .rpc('get_memory_insights')
      .select('memory_id, emotional_depth, descriptive_richness, relationship_context')
  ]);

  if (lovedOnesError || memoriesError || insightsError) {
    console.error('Error fetching dashboard data:', {
      lovedOnesError,
      memoriesError,
      insightsError
    });
    redirect('/error?code=dashboard_fetch');
  }

  // Ensure we have valid arrays even if data is null
  const safeLovedOnes = lovedOnes || [];
  const safeMemories = memories || [];
  const safeInsights = insights || [];

  const lovedOnesCount = lovedOnes?.length ?? 0;
  const memoriesCount = memories?.length ?? 0;
  type MemoryInsight = {
    memory_id: string;
    emotional_depth: number;
    descriptive_richness: number;
    relationship_context: string;
  };

  interface MemoryWithInsight extends Memory {
    loved_ones: { name: string } | null;
    insight?: MemoryInsight;
  }

  const enrichedMemories: MemoryWithInsight[] = safeMemories.map(mem => ({
    ...mem,
    insight: safeInsights.find(ins => ins.memory_id === mem.id),
    loved_ones: mem.loved_ones || { name: 'Unknown' } // Add fallback for loved_ones
  }));

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
            <Button asChild variant="secondary">
              <Link href="/loved-ones/new">Add loved one</Link>
            </Button>
            <Button asChild>
              <Link href="/memories/new">Add memory</Link>
            </Button>
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
              <p className="text-sm text-neutral-400">Memory insights</p>
              <h2 className="mt-1 text-2xl font-semibold">Emotional patterns</h2>
            </div>
          </div>

          <div className="mt-6 space-y-6">
            {(insights || []).slice(0, 3).map((insight) => (
              <div key={insight.memory_id} className="space-y-2">
                <div className="flex justify-between text-sm text-neutral-400">
                  <span>Emotional depth</span>
                  <span>{Math.round(insight.emotional_depth * 100)}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#ff7b6b] to-[#4f6bff]" 
                    style={{ width: `${(insight.emotional_depth * 100)}%` }}
                  />
                </div>
                {insight.relationship_context && (
                  <p className="text-sm text-neutral-300 mt-2">
                    "{insight.relationship_context}"
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
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
            {enrichedMemories?.length ? (
              enrichedMemories.map((memory) => (
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

                  <div className="mt-4 flex items-center gap-4">
                    {memory.memory_date && (
                      <span className="text-xs text-neutral-500">
                        {memory.memory_date}
                      </span>
                    )}
                    {memory.insight && (
                      <div className="flex items-center gap-2">
                        <div 
                          className="h-2 w-16 rounded-full bg-white/5 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#ff7b6b] to-[#4f6bff]" 
                            style={{ width: `${(memory.insight.emotional_depth * 100)}%` }}
                          />
                        </div>
                        <span className="text-xs text-neutral-400">
                          {Math.round(memory.insight.emotional_depth * 100)}%
                        </span>
                      </div>
                    )}
                  </div>
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

      <section className="mt-6">
        <div className="card p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-neutral-400">Recent activity</p>
              <h2 className="mt-1 text-2xl font-semibold">Timeline</h2>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {enrichedMemories?.slice(0, 5).map((memory) => (
              <div key={memory.id} className="flex gap-4 items-start">
                <div className="mt-1 h-2 w-2 rounded-full bg-white/20 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">
                    {new Date(memory.created_at).toLocaleDateString()}
                  </p>
                  <p className="font-medium">
                    Added {memory.memory_type || 'memory'} for {memory.loved_ones?.name || 'loved one'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
