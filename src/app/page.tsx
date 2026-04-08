import Link from "next/link";
import Nav from "@/components/Nav";
import {
  LockKeyhole,
  Heart,
  AudioLines,
  ShieldCheck,
  GalleryVertical,
  MessageCircleHeart,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Loved ones profiles",
    copy: "Create a private space for each person you want to preserve, honor, and remember.",
  },
  {
    icon: GalleryVertical,
    title: "Memory vault",
    copy: "Store photos, videos, voice notes, letters, and meaningful moments in one secure timeline.",
  },
  {
    icon: AudioLines,
    title: "Voice-ready foundation",
    copy: "Capture audio and stories now, before they are lost to time.",
  },
  {
    icon: MessageCircleHeart,
    title: "Consent-based AI",
    copy: "Build toward future conversational experiences rooted only in user-approved memories.",
  },
  {
    icon: LockKeyhole,
    title: "You own the data",
    copy: "Your family’s memories and likeness are never sold, scraped, or exploited.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first by design",
    copy: "Encrypted architecture, protected storage, and trust-centered defaults from day one.",
  },
];

const trustItems = [
  "Private by default",
  "You own the data",
  "Encrypted foundation",
  "Consent-based AI roadmap",
];

const steps = [
  {
    title: "Create a loved one",
    copy: "Start a private profile for someone important in your life.",
  },
  {
    title: "Preserve memories",
    copy: "Upload photos, videos, audio, letters, and stories that matter.",
  },
  {
    title: "Build their timeline",
    copy: "Organize moments into a lasting archive of voice, presence, and memory.",
  },
];

export default function HomePage() {
  return (
    <main className="pb-24">
      <Nav />

      <section className="container-wrap pt-24 pb-32">
        <div className="card overflow-hidden p-8 md:p-12 lg:p-16 bg-gradient-to-br from-white/5 to-transparent">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.32em] text-neutral-400">
                Private memory preservation for the people you love
              </p>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-4xl">
                Preserve their{" "}
                <span className="bg-gradient-to-r from-[#ff7b6b] via-[#ff8f6b] to-[#4f6bff] bg-clip-text text-transparent">
                  voice, memories,
                </span>
                <br />
                and presence.
              </h1>

              <p className="mt-6 max-w-2xl text-neutral-300 text-lg leading-relaxed">
                ForeverLuvd helps families preserve photos, videos, voice notes,
                letters, and the emotional essence of the people they love —
                with privacy, ownership, and protection built into the core
                product.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="/auth/sign-up" 
                  className="btn btn-primary hover:bg-gradient-to-br hover:from-[#ff7b6b] hover:via-[#ff8f6b] hover:to-[#4f6bff] transition-all duration-200"
                >
                  Start preserving
                </Link>
                <Link href="/dashboard" className="btn btn-secondary">
                  View product
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {trustItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#4f6bff]/20 via-transparent to-[#ff8f6b]/20 blur-3xl" />
              <div className="card relative p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Memory vault preview</p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">Keep them with you</h2>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300 bg-white/5">
                    Encrypted
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                    <p className="text-sm text-neutral-400">Loved one</p>
                    <p className="mt-1 text-lg font-medium text-white">Mom</p>
                    <p className="mt-2 text-sm text-neutral-300">
                      <span className="animate-pulse">●</span> 184 memories · 32 voice notes · 12 letters
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                    <p className="text-sm text-neutral-400">Recent memory</p>
                    <p className="mt-1 font-medium text-white">Birthday voicemail</p>
                    <p className="mt-2 text-sm text-neutral-300">
                      “I love you more than you know. I’m proud of you.”
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                    <p className="text-sm text-neutral-400">Future AI layer</p>
                    <p className="mt-1 font-medium text-white">Private and opt-in</p>
                    <p className="mt-2 text-sm text-neutral-300">
                      Conversational memory experiences built only from real,
                      user-approved archived moments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wrap pb-8">
        <div className="grid gap-4 md:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="card px-5 py-4 text-sm text-neutral-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Platform Modules Section */}
      <section className="container-wrap py-20">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
            Platform Modules
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            A Complete Continuity System
          </h2>
          <p className="section-copy mt-4">
            ForeverLuvd combines multiple preservation layers into one private platform.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Memory Archive",
              copy: "Secure storage for photos, videos, letters and meaningful moments",
              href: "/dashboard"
            },
            {
              title: "Identity Engine", 
              copy: "Structured preservation of personality, traits and relationships",
              href: "/loved-ones"
            },
            {
              title: "Voice Continuity",
              copy: "Preserved recordings and future voice capabilities",
              href: "/voice"
            },
            {
              title: "Family Layer",
              copy: "Trusted collaboration for shared memory preservation",
              href: "/family"
            },
            {
              title: "Legacy System",
              copy: "Multi-generational access and stewardship tools",
              href: "/legacy"  
            },
            {
              title: "Privacy Infrastructure",
              copy: "Encrypted architecture with full data ownership",
              href: "/technology"
            }
          ].map((module) => (
            <Link 
              key={module.title}
              href={module.href}
              className="card p-6 hover:bg-white/10 transition-all duration-200 hover:-translate-y-[4px] transform-gpu ease-out"
            >
              <h3 className="text-xl font-semibold">{module.title}</h3>
              <p className="mt-3 text-neutral-400">{module.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="container-wrap py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
            How it works
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Start with preservation first.
          </h2>
          <p className="section-copy mt-4">
            Build trust first. Capture what matters now. Expand into voice,
            legacy, and AI interaction later.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="card p-6">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-neutral-400">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wrap py-14">
        <div className="card p-8 mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                Memory diversity
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Preserve every dimension
              </h2>
              <p className="mt-4 text-neutral-300">
                Capture the full spectrum of memories - from voice notes to letters, 
                creating a multidimensional legacy.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {['Photos', 'Videos', 'Voice', 'Letters', 'Stories', 'Moments'].map((type) => (
                <div 
                  key={type}
                  className="aspect-square rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-sm"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
            Why ForeverLuvd
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            More than storage.
          </h2>
          <p className="section-copy mt-4">
            This is a private continuity layer for the people you love — built
            around memory, voice, ownership, and dignity.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-neutral-400">{feature.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-wrap py-14">
        <div className="card grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              Emotional continuity
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Photos are not the same as presence.
            </h2>
          </div>

          <div className="space-y-4 text-neutral-300">
            <p>
              People don’t just lose images when someone passes. They lose a
              voice. A rhythm. A way of speaking. A thousand small details.
            </p>
            <p>
              ForeverLuvd is designed to preserve the things that make someone
              feel real — their stories, recordings, letters, memories, and the
              emotional texture of who they were.
            </p>
            <p>
              And it does that without taking ownership away from the people who
              loved them.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="container-wrap py-14">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Start simply.
          </h2>
          <p className="section-copy mt-4">
            Launch with a clean consumer plan now. Expand into family and legacy
            tiers after traction.
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

      <section className="container-wrap pt-10 pb-24">
        <div className="card p-8 text-center lg:p-14">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
            Start now
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Preserve what matters before it becomes impossible to recover.
          </h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            Build a private vault for the people you love — with memory,
            ownership, and dignity at the center.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/auth/sign-up" className="btn btn-primary">
              Start preserving
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
