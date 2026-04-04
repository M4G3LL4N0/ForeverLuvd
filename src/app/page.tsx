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
    title: "Loved Ones",
    copy: "Create private profiles to honor and remember those who matter most."
  },
  {
    icon: GalleryVertical,
    title: "Memory Vault",
    copy: "Securely store photos, videos, voice notes, and written memories."
  },
  {
    icon: AudioLines,
    title: "Voice Legacy",
    copy: "Preserve the unique sound of their voice and stories forever."
  },
  {
    icon: MessageCircleHeart,
    title: "AI Conversations",
    copy: "Future opt-in interactions rooted in real memories and consent."
  },
  {
    icon: LockKeyhole,
    title: "Your Data",
    copy: "Complete ownership and control over all stored memories."
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    copy: "End-to-end encryption and protected storage by default."
  }
];

export default function HomePage() {
  return (
    <main className="pb-20">
      <Nav />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center container-wrap py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold leading-tight tracking-tight">
              Keep their voice, <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-purple-300 to-pink-600 bg-clip-text text-transparent">
                presence and essence
              </span>
              <br className="hidden lg:block" /> 
              with you forever
            </h1>
            <p className="text-xl text-neutral-300 max-w-xl leading-relaxed">
              Preserve the most precious parts of those you love - their voice, memories, 
              and personality - in a private, encrypted vault you control.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/auth/sign-up" className="btn btn-primary px-12">
                Start Preserving
              </Link>
              <Link href="/dashboard" className="btn btn-secondary px-12">
                View Product
              </Link>
            </div>
          </div>
          <div className="card aspect-square h-full max-w-lg p-8 mx-auto opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(400px_at_50%_40%,rgba(167,139,250,.2),transparent)] opacity-0 hover:opacity-100 transition-all duration-300" />
            <div className="relative h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400">Forever Preserved</p>
                  <h2 className="mt-1 text-2xl font-semibold">Mom's Memory Timeline</h2>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                  Private Vault
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-neutral-400">Today's Memory</p>
                  <p className="mt-1 text-lg font-medium">Her Birthday Message</p>
                  <p className="mt-2 text-sm text-neutral-300 truncate">
                    "I love you more than you know. I'm so proud of..."
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-neutral-400">Recently Added</p>
                  <p className="mt-1 font-medium">Old Recipes</p>
                  <p className="mt-2 text-sm text-neutral-300 truncate">
                    Her famous chocolate cake recipe, in her handwriting
                  </p>
                </div>
              </div>
              <p className="text-xs text-center text-neutral-500 pt-6">
                End-to-end encrypted • Only you hold the keys
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="container-wrap mb-32">
        <div className="card flex justify-center divide-x divide-white/5 py-6 lg:py-8">
          <div className="flex-1 px-8 text-center">
            <LockKeyhole className="mx-auto h-5 w-5 mb-3 text-purple-400" />
            <span className="text-sm font-medium">Private by Default</span>
          </div>
          <div className="flex-1 px-8 text-center">
            <ShieldCheck className="mx-auto h-5 w-5 mb-3 text-purple-400" />
            <span className="text-sm font-medium">Your Data</span>
          </div>
          <div className="flex-1 px-8 text-center">
            <Heart className="mx-auto h-5 w-5 mb-3 text-purple-400" />
            <span className="text-sm font-medium">Encrypted</span>
          </div>
          <div className="flex-1 px-8 text-center">
            <MessageCircleHeart className="mx-auto h-5 w-5 mb-3 text-purple-400" />
            <span className="text-sm font-medium">Consent-Based AI</span>
          </div>
        </div>
      </section>
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

      <section id="how-it-works" className="container-wrap py-14">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
          <p className="section-copy mt-4">
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

      {/* Feature Grid */}
      <section className="container-wrap mb-48">
        <div className="mb-20 text-center">
          <h2 className="section-title">Preservation Beyond Photos</h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-300">
            Capture the multidimensional essence of those you love - not just what they looked like, but who they were.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card group p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="relative">
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-purple-800/40 to-pink-600/40 opacity-0 blur-md transition-all duration-300 group-hover:opacity-100" />
                <feature.icon className="relative z-10 h-8 w-8 bg-gradient-to-br from-purple-300 to-pink-400 bg-clip-text text-transparent" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-4 text-neutral-400">{feature.copy}</p>
            </div>
          ))}
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
