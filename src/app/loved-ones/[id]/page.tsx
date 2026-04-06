import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Timeline from "@/components/timeline";

export default async function LovedOneDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/sign-in");
  }

  const { data: lovedOne } = await supabase
    .from("loved_ones")
    .select("*")
    .eq("id", id)
    .single();

  if (!lovedOne) {
    notFound();
  }

  const { data: memories } = await supabase
    .from("memories")
    .select("*")
    .eq("loved_one_id", id)
    .order("memory_date", { ascending: false });

  return (
    <main className="container-wrap py-10">
      <div className="card p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-neutral-400">Loved one</p>
            <h1 className="mt-1 text-4xl font-semibold tracking-tight">
              {lovedOne.name}
            </h1>
            <p className="mt-3 text-neutral-400">
              {lovedOne.relationship_type || "Loved one"} · private profile
            </p>
          </div>

          <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
            Encrypted-first architecture
          </div>
        </div>
      </div>

      <section className="mt-6 card p-8">
        <h2 className="text-2xl font-semibold">Timeline</h2>
        <p className="mt-2 text-neutral-400">
          Memories, messages, and moments tied to {lovedOne.name}.
        </p>

        <div className="mt-8">
          <Timeline items={memories || []} lovedOneId={id} />
        </div>
      </section>

      <section className="mt-6 card p-8">
        <h2 className="text-2xl font-semibold">Identity Reconstruction</h2>
        <p className="mt-2 text-neutral-400">
          ForeverLuvd is building a structured understanding of {lovedOne.name} based on your preserved memories.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card bg-white/5 p-6">
            <h3 className="text-lg font-semibold">How It Works</h3>
            <div className="mt-3 space-y-3 text-sm text-neutral-400">
              <p>• Analyzes patterns across your memories</p>
              <p>• Captures communication style and traits</p>
              <p>• Identifies recurring themes and phrases</p>
              <p>• Builds understanding over time</p>
            </div>
          </div>

          <div className="card bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Preservation Framework</h3>
            <div className="mt-3 space-y-3 text-sm text-neutral-400">
              <p>• Only uses your approved memories</p>
              <p>• No hidden AI training</p>
              <p>• Future family-safe architecture</p>
              <p>• Designed for generational continuity</p>
              <p>• Private and encrypted by default</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
