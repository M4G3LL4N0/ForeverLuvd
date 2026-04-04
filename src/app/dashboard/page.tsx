import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ChevronRightIcon, FileIcon, MessageCircleIcon, PlusIcon, UserIcon } from "lucide-react";

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
    <main className="container-wrap py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Your Legacy Dashboard
        </h1>
        <p className="mt-3 text-lg text-white/70">
          Beautifully preserve and revisit cherished moments
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-lg transition hover:border-white/50">
          <div className="text-sm text-white/70">Loved Ones</div>
          <div className="mt-2 text-3xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            {lovedOnes?.length || 0}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-lg transition hover:border-white/50">
          <div className="text-sm text-white/70">Memories</div>
          <div className="mt-2 text-3xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            {memories?.length || 0}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-lg transition hover:border-white/50">
          <div className="text-sm text-white/70">Last Activity</div>
          <div className="mt-2 text-3xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            {memories?.[0]?.memory_date 
              ? new Date(memories[0].memory_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
              : 'Never'}
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="mb-12 grid gap-6 sm:grid-cols-2">
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
      <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
        {/* Loved Ones Section */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Your Loved Ones
            </h2>
            <Link
              href="/loved-ones/new"
              className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/20 hover:text-blue-300"
            >
              <PlusIcon className="h-4 w-4" />
              Add New
            </Link>
          </div>
          <div className="space-y-3">
            {lovedOnes?.length ? (
              lovedOnes.map((person) => (
                <Link
                  key={person.id}
                  href={`/loved-ones/${person.id}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/10 p-5 transition hover:border-white/25 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 text-lg font-bold">
                    {person.name[0]}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">{person.name}</p>
                    <p className="mt-1 text-sm text-white/60">
                      {person.relationship_type || "Loved one"}
                    </p>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-white/40 transition group-hover:text-white/80" />
                </Link>
              ))
            ) : (
              <div className="flex flex-col items-center rounded-2xl border-2 border-dashed border-white/10 p-10 text-center bg-gradient-to-b from-white/5 to-white/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20">
                  <UserIcon className="h-8 w-8 text-white/60" />
                </div>
                <p className="mt-4 text-lg font-medium text-white/80">No loved ones yet</p>
                <p className="mt-2 text-sm text-white/50 max-w-[240px]">
                  Create your first profile to begin preserving memories
                </p>
                <Link
                  href="/loved-ones/new"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  <PlusIcon className="h-4 w-4" />
                  Add Loved One
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Memories Section */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Recent Memories
            </h2>
            <Link
              href="/memories/new"
              className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/20 hover:text-blue-300"
            >
              <PlusIcon className="h-4 w-4" />
              Add New
            </Link>
          </div>
          <div className="space-y-3">
            {memories?.length ? (
              memories.map((memory) => (
                <div
                  key={memory.id}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
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
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center rounded-2xl border-2 border-dashed border-white/10 p-10 text-center bg-gradient-to-b from-white/5 to-white/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20">
                  <FileIcon className="h-8 w-8 text-white/60" />
                </div>
                <p className="mt-4 text-lg font-medium text-white/80">No memories yet</p>
                <p className="mt-2 text-sm text-white/50 max-w-[240px]">
                  Capture special moments to revisit later
                </p>
                <Link
                  href="/memories/new"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  <PlusIcon className="h-4 w-4" />
                  Add Memory
                </Link>
              </div>
            )}
          </div>
          <div className="mt-8">
            <Link
              href="/chat"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/25 hover:shadow-lg"
            >
              <MessageCircleIcon className="h-4 w-4" />
              Explore Memories with AI
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
