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
    </main>
  );
}
