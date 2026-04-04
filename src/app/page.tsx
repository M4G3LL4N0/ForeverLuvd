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
      <section className="container-wrap pt-24 pb-32">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="space-y-8">
            <h1 className="section-title max-w-3xl">
              Preserve the <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">essence</span> of those you love
            </h1>
            <p className="section-copy max-w-2xl">
              ForeverLuvd helps you capture and protect the voice, memories, and presence of your loved ones with uncompromising privacy and security.
            </p>
            <div className="flex gap-4">
              <Link href="/auth/sign-up" className="btn btn-primary">
                Start Preserving
              </Link>
              <Link href="/dashboard" className="btn btn-secondary">
                View Product
              </Link>
            </div>
          </div>
          <div className="card p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400">Memory Preview</p>
                <h2 className="mt-1 text-2xl font-semibold">Keep Them Close</h2>
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                Encrypted
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-400">Loved One</p>
                <p className="mt-1 text-lg font-medium">Mom</p>
                <p className="mt-2 text-sm text-neutral-300">
                  184 memories · 32 voice notes · 12 letters
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-400">Recent Memory</p>
                <p className="mt-1 font-medium">Birthday Voicemail</p>
                <p className="mt-2 text-sm text-neutral-300">
                  "I love you more than you know. I'm proud of you."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="container-wrap py-8">
        <div className="card flex flex-wrap justify-center gap-6 p-6 text-sm text-neutral-300">
          <span className="flex items-center gap-2">
            <LockKeyhole className="h-4 w-4" /> Private by Default
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" /> Encrypted Storage
          </span>
          <span className="flex items-center gap-2">
            <Heart className="h-4 w-4" /> Family-Owned Data
          </span>
          <span className="flex items-center gap-2">
            <MessageCircleHeart className="h-4 w-4" /> Consent-Based AI
          </span>
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
