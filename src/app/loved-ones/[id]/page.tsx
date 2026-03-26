import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

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

  if (!user) redirect("/auth/sign-in");

  const { data: lovedOne } = await supabase
    .from("loved_ones")
    .select("*")
    .eq("id", id)
    .single();

  if (!lovedOne) notFound();

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
            <h1 className="mt-1 text-4xl font-semibold tracking-tight">{lovedOne.name}</h1>
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
                {memory.file_url ? (
                  <a
                    href={memory.file_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm text-white underline"
                  >
                    Open file
                  </a>
                ) : null}
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 p-6 text-neutral-400">
              No memories have been added for this person yet.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
