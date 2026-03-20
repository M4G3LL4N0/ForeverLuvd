import Link from "next/link";
import Nav from "@/components/Nav";
import {
  LockKeyhole,
  Heart,
  AudioLines,
  ShieldCheck,
  GalleryVertical,
  MessageCircleHeart
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Loved ones profiles",
    copy: "Create a private space for each person you want to preserve, honor, and remember."
  },
  {
    icon: GalleryVertical,
    title: "Memory vault",
    copy: "Store photos, videos, voice notes, letters, and moments in one secure timeline."
  },
  {
    icon: AudioLines,
    title: "Voice-ready foundation",
    copy: "Capture the audio and stories that matter now, before they are lost."
  },
  {
    icon: MessageCircleHeart,
    title: "Future AI conversations",
    copy: "Build toward a private, consent-based conversational experience rooted in real memories."
  },
  {
    icon: LockKeyhole,
    title: "You own the data",
    copy: "Your family’s memories are never sold, scraped, or used without your explicit permission."
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first by design",
    copy: "Encrypted architecture, protected storage, and trust-centered defaults from day one."
  }
];

export default function HomePage() {
  return (
    <main className="pb-20">
      <Nav />
      
      <section className="container-wrap py-8">
        <h1 className="text-3xl font-semibold">Your Memory Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-medium">Loved Ones</h3>
            </div>
            <p className="mt-2 text-3xl font-bold">{stats.lovedOnes}</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-3">
              <Album className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-medium">Total Memories</h3>
            </div>
            <p className="mt-2 text-3xl font-bold">{stats.totalMemories}</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-medium">Recent Uploads</h3>
            </div>
            <p className="mt-2 text-3xl font-bold">{stats.recentUploads}</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-3">
              <AudioLines className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-medium">Voice Notes</h3>
            </div>
            <p className="mt-2 text-3xl font-bold">{stats.voiceNotes}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
          <div className="lg:col-span-2 card p-6 overflow-hidden">
            <h2 className="text-xl font-semibold mb-4">Recent Memories</h2>
            <div className="space-y-4">
              {recentMemories.map((memory) => (
                <div key={memory.id} className="flex items-center gap-4 p-3 hover:bg-muted rounded-lg transition-colors">
                  <div className="flex-1">
                    <h3 className="font-medium}>{memory.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {memory.type} · {memory.lovedOne}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(memory.date).toLocaleDateString()}
                  </div>
                  <Link href={`/memories/${memory.id}`} className="text-sm text-primary">
                    View
                  </Link>
                </div>
              ))}
            </div>
            <Link 
              href="/memories" 
              className="mt-4 flex items-center justify-center text-sm text-primary"
            >
              View all memories →
            </Link>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Quick Actions</h2>
            </div>
            <div className="space-y-3">
              <Link href="/add-memory" className="btn btn-primary w-full">
                Add Memory
              </Link>
              <Link href="/add-loved-one" className="btn btn-outline w-full">
                Add Loved One
              </Link>
              <Link href="/record-voice" className="btn btn-outline w-full">
                Record Voice Note
              </Link>
            </div>
          </div>
        </div>
      </section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="animate-fade-in">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-neutral-400">
              Private memory preservation for the people you love
            </p>
            <h1 className="section-title max-w-4xl bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              They may be gone one day.
              <br />
              Their voice, memories, and presence don’t have to be.
            </h1>
            <p className="section-copy mt-6 max-w-2xl">
              ForeverLuvd helps families preserve photos, videos, voice notes, stories,
              and the emotional essence of the people they love — with privacy, ownership,
              and encrypted protection built into the core product.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link 
                href="/auth/sign-up" 
                className="btn btn-primary px-8 py-4 text-lg font-semibold"
              >
                Start preserving →
              </Link>
              <Link 
                href="/dashboard" 
                className="btn btn-secondary px-8 py-4 text-lg font-semibold hover:bg-white/5"
              >
                Explore features
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-400">
              <span>Private by default</span>
              <span>Family-owned data</span>
              <span>Consent-centered AI roadmap</span>
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400">Memory vault preview</p>
                <h2 className="mt-1 text-2xl font-semibold">Keep them with you</h2>
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                Encrypted
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-400">Loved one</p>
                <p className="mt-1 text-lg font-medium">Mom</p>
                <p className="mt-2 text-sm text-neutral-300">
                  184 memories · 32 voice notes · 12 letters
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-400">Recent memory</p>
                <p className="mt-1 font-medium">Birthday voicemail</p>
                <p className="mt-2 text-sm text-neutral-300">
                  “I love you more than you know. I’m proud of you.”
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-400">AI layer</p>
                <p className="mt-1 font-medium">Coming soon</p>
                <p className="mt-2 text-sm text-neutral-300">
                  Private, opt-in, consent-based voice and memory interaction built from real archived moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="container-wrap py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            How it works
          </h2>
          <p className="section-copy mt-5 text-lg leading-relaxed">
            Start with preservation first. Build trust first. Then expand into voice, legacy,
            and AI interaction later.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Create a loved one", "Start a private profile for someone important in your life."],
            ["Upload memories", "Add photos, videos, audio, stories, and written notes."],
            ["Build their timeline", "Organize the moments that define who they are and what they meant to you."]
          ].map(([title, copy]) => (
            <div key={title} className="card p-6">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-neutral-400">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wrap py-14">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card p-6">
                <Icon className="h-6 w-6" />
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-neutral-400">{feature.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="privacy" className="container-wrap py-14">
        <div className="card grid gap-8 p-8 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Privacy first</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Your loved one’s likeness should never belong to a platform.
            </h2>
          </div>
          <div className="space-y-4 text-neutral-300">
            <p>ForeverLuvd is built on the principle that memory is sacred.</p>
            <p>You own the data. Your family controls the access. Encryption and protected storage are defaults, not add-ons.</p>
            <p>No resale. No hidden training. No exploiting grief.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="container-wrap py-14">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">Simple pricing</h2>
          <p className="section-copy mt-4">
            Start with a clean consumer plan now. Add family and legacy tiers after launch.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Starter", "Free", "1 loved one profile, basic memory uploads, private dashboard"],
            ["Personal", "$12/mo", "More storage, unlimited memory entries, better organization"],
            ["Family", "$29/mo", "Multiple loved ones, shared family access, future legacy features"],
          ].map(([name, price, copy]) => (
            <div key={name} className="card p-6">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="mt-3 text-3xl font-bold">{price}</p>
              <p className="mt-4 text-neutral-400">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
