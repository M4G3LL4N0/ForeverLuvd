import Link from "next/link";
import Nav from "@/components/Nav";
import {
  LockKeyhole,
  Heart,
  AudioLines,
  ShieldCheck,
  GalleryVertical,
  MessageCircleHeart,
  Cpu,
  Mic,
  Users,
  Landmark,
} from "lucide-react";

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
    title: "Build continuity",
    copy: "Organize moments into a lasting archive of voice, presence, and identity over time.",
  },
];

const platformCards = [
  {
    icon: GalleryVertical,
    chip: "Archive Layer",
    title: "Memory Archive",
    copy: "Securely preserve photos, videos, voice notes, letters, and the moments that define a person.",
  },
  {
    icon: Heart,
    chip: "Identity Layer",
    title: "Identity Engine",
    copy: "Turn preserved memories into structured context about tone, themes, personality, and emotional presence.",
  },
  {
    icon: Mic,
    chip: "Voice Layer",
    title: "Voice Continuity",
    copy: "Build toward future continuity rooted only in real, user-approved recordings and voice memories.",
  },
  {
    icon: Users,
    chip: "Family Layer",
    title: "Family Stewardship",
    copy: "Enable trusted contributors to help preserve a shared archive while ownership and permissions remain clear.",
  },
  {
    icon: Landmark,
    chip: "Legacy Layer",
    title: "Legacy System",
    copy: "Support long-term archive stewardship, future access, and continuity preferences over time.",
  },
  {
    icon: LockKeyhole,
    chip: "Trust Layer",
    title: "Privacy + Ownership",
    copy: "No hidden training. No resale. No platform ownership of likeness, memory, or preserved family context.",
  },
  {
    icon: Cpu,
    chip: "Technology",
    title: "AI Orchestration",
    copy: "Prepare identity context, prompt scaffolds, and continuity systems for future respectful interaction.",
  },
  {
    icon: ShieldCheck,
    chip: "Control Layer",
    title: "Consent Boundaries",
    copy: "Define what can be used, what stays private, and how future continuity features must remain constrained.",
  },
];

export default function HomePage() {
  return (
    <main className="pb-24">
      <Nav />

      <section className="container-wrap pt-8 pb-16">
        <div className="card overflow-hidden p-8 md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.32em] text-neutral-400">
                Private memory preservation for the people you love
              </p>

              <h1 className="section-title max-w-4xl">
                Preserve their{" "}
                <span className="bg-gradient-to-r from-[#ff9f7a] via-[#c48eff] to-[#6f8cff] bg-clip-text text-transparent">
                  voice, memories,
                </span>
                <br />
                and presence.
              </h1>

              <p className="section-copy mt-6 max-w-2xl">
                ForeverLuvd helps families preserve photos, videos, voice notes,
                letters, and the emotional essence of the people they love —
                with privacy, ownership, and protection built into the core
                product.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/onboarding" className="btn btn-primary">
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
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#5f7cff]/20 via-transparent to-[#ff8a6b]/20 blur-3xl" />
              <div className="card relative p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Memory vault preview</p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">Keep them with you</h2>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                    Encrypted
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-neutral-400">Loved one</p>
                    <p className="mt-1 text-lg font-medium text-white">Mom</p>
                    <p className="mt-2 text-sm text-neutral-300">
                      184 memories · 32 voice notes · 12 letters
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-neutral-400">Recent memory</p>
                    <p className="mt-1 font-medium text-white">Birthday voicemail</p>
                    <p className="mt-2 text-sm text-neutral-300">
                      “I love you more than you know. I’m proud of you.”
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-neutral-400">Future AI layer</p>
                    <p className="mt-1 font-medium text-white">Private and opt-in</p>
                    <p className="mt-2 text-sm text-neutral-300">
                      Conversational continuity built only from real, user-approved archived moments.
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

      <section className="container-wrap py-14">
        <div className="card p-8 lg:p-10">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
              Platform layers
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A continuity platform, not just storage.
            </h2>
            <p className="section-copy mt-4">
              ForeverLuvd is being built as a multi-layer system for preserving
              memory, identity, voice, family-held context, and long-term continuity.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {platformCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="card p-6">
                  <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                    {card.chip}
                  </div>

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-300">{card.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="container-wrap py-14">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
            How it works
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
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
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-neutral-300">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wrap py-14">
        <div className="card grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              Why ForeverLuvd
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              More than a memory vault.
            </h2>
          </div>

          <div className="space-y-4 text-neutral-300">
            <p>
              People do not only lose photos when someone is gone. They lose a
              voice, a rhythm, a way of speaking, and a thousand small signals that made that person feel real.
            </p>
            <p>
              ForeverLuvd is being designed to preserve those signals with ownership,
              privacy, and future continuity at the center.
            </p>
            <p>
              The long-term vision is not imitation. It is respectful continuity built from real, user-approved memory.
            </p>
          </div>
        </div>
      </section>

      <section className="container-wrap pt-10 pb-24">
        <div className="card p-8 text-center lg:p-14">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
            Start now
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Preserve what matters before it becomes impossible to recover.
          </h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            Build a private vault for the people you love — with memory,
            ownership, dignity, and future continuity at the center.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/onboarding" className="btn btn-primary">
              Start preserving
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
