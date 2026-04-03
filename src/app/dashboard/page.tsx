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
      {/* Hero Section */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Your Memory Vault
          </h1>
          <p className="mt-3 text-lg text-neutral-400">
            ForeverLuvd helps you preserve precious memories and stories of your loved ones in a private, secure space.
          </p>
        </div>
      </div>

      {/* Action Cards */}
      <div className="mb-12 grid gap-4 sm:grid-cols-2">
        <Link
          href="/loved-ones/new"
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Add Loved One</h3>
              <p className="mt-1 text-sm text-neutral-400">
                Create a private profile to preserve their legacy
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/memories/new"
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Add Memory</h3>
              <p className="mt-1 text-sm text-neutral-400">
                Capture moments, stories, and keepsakes
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
        {/* Loved Ones Section */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Your Loved Ones</h2>
            <Link href="/loved-ones/new" className="text-sm text-neutral-400 hover:text-white">
              Add New +
            </Link>
          </div>
          <div className="space-y-3">
            {lovedOnes?.length ? (
              lovedOnes.map((person) => (
                <Link
                  key={person.id}
                  href={`/loved-ones/${person.id}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.07]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-medium">
                    {person.name[0]}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{person.name}</p>
                    <p className="mt-1 text-sm text-neutral-400">
                      {person.relationship_type || "Loved one"}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-neutral-400 transition group-hover:text-white"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <p className="text-neutral-400">No loved ones yet</p>
                <p className="mt-2 text-sm text-neutral-500">
                  Start by creating a profile for someone special
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Memories Section */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Recent Memories</h2>
            <Link href="/memories/new" className="text-sm text-neutral-400 hover:text-white">
              Add New +
            </Link>
          </div>
          <div className="space-y-3">
            {memories?.length ? (
              memories.map((memory) => (
                <div
                  key={memory.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{memory.title}</p>
                    <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-neutral-400">
                      {memory.memory_type}
                    </span>
                  </div>
                  {memory.description && (
                    <p className="mt-2 text-sm text-neutral-400 line-clamp-2">
                      {memory.description}
                    </p>
                  )}
                  {memory.memory_date && (
                    <p className="mt-3 text-xs text-neutral-500">
                      {new Date(memory.memory_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <p className="text-neutral-400">No memories yet</p>
                <p className="mt-2 text-sm text-neutral-500">
                  Start preserving your special moments today
                </p>
              </div>
            )}
          </div>
          <div className="mt-6">
            <Link
              href="/chat"
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/[0.07]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
              </svg>
              Explore Memories with AI
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
