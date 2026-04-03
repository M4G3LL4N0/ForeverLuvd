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
    <main className="container-wrap py-12">
      <div className="card p-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-[800px]">
            <p className="text-sm text-neutral-400 font-medium tracking-wider">IN MEMORIAM</p>
            <h1 className="mt-2 text-5xl font-semibold tracking-tight">
              Remembering {lovedOne.name}
            </h1>
            <div className="mt-4 space-y-2 text-neutral-400">
              <p className="text-sm">
                {lovedOne.relationship_type || "Beloved"} · Private Memorial Profile
              </p>
              {lovedOne.birth_date && (
                <p className="text-sm">
                  Born {new Date(lovedOne.birth_date).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>

          <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
            Forever Protected · End-to-End Encrypted
          </div>
        </div>
      </div>

      <section className="mt-8 card p-8">
        <div className="max-w-[800px]">
          <h2 className="text-3xl font-semibold tracking-tight">Life's Timeline</h2>
          <p className="mt-3 text-neutral-400">
            Cherished memories and moments celebrating {lovedOne.name}'s life.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {memories?.length ? (
            memories.map((memory) => (
              <div
                key={memory.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-medium">{memory.title}</p>
                    {memory.memory_date && (
                      <p className="mt-1 text-xs text-neutral-400">
                        {new Date(memory.memory_date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300">
                    {memory.memory_type}
                  </span>
                </div>
                {memory.description && (
                  <p className="mt-3 text-neutral-400 leading-relaxed">
                    {memory.description}
                  </p>
                )}
                {memory.file_url && (
                  <a
                    href={memory.file_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition-colors"
                  >
                    <span>View Memory</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
              <p className="text-neutral-400">
                This memorial is waiting for its first memory. Would you like to{' '}
                <a
                  href={`/memories/new?lovedOneId=${id}`}
                  className="text-white underline hover:text-neutral-300 transition-colors"
                >
                  add one
                </a>
                ?
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
