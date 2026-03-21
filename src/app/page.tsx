import Link from "next/link";
import { Check } from "lucide-react";
import { Heart, Album, AudioLines, MessageSquare, Clock, Upload } from "lucide-react";
import { Nav } from "@/components/Nav";
import { useState } from "react";

async function uploadFile(file: File) {
  const { data, error } = await supabase
    .storage
    .from('memories')
    .upload(`user-uploads/${Date.now()}-${file.name}`, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) throw error;
  return data;
}

async function getSignedUrl(filePath: string) {
  const { data, error } = await supabase
    .storage
    .from('memories')
    .createSignedUrl(filePath, 3600); // 1 hour expiration

  if (error) throw error;
  return data.signedUrl;
}

const stats = {
  lovedOnes: 5,
  totalMemories: 184,
  recentUploads: 12,
  voiceNotes: 32
};

const recentMemories = [
  {
    id: "1",
    title: "Mom's birthday party",
    date: "2026-03-15",
    type: "Photo album",
    lovedOne: "Mom"
  },
  {
    id: "2",
    title: "Dad's favorite story",
    date: "2026-03-10",
    type: "Voice note",
    lovedOne: "Dad"
  },
  {
    id: "3", 
    title: "Grandma's recipe",
    date: "2026-03-05",
    type: "Document",
    lovedOne: "Grandma"
  }
];

interface LovedOneProfile {
  id: string
  name: string
  relationship: string
  bio: string
  avatarUrl: string
  stats: {
    memories: number
    voiceNotes: number
    letters: number
    timelineEvents: number
  }
  timeline: Array<{
    id: string
    date: string
    title: string
    description: string
    type: 'memory' | 'voice' | 'letter' | 'milestone'
  }>
}

const sampleProfile: LovedOneProfile = {
  id: "1",
  name: "Mom",
  relationship: "Mother",
  bio: "The most loving and caring person I've ever known. Her wisdom and kindness shaped who I am today.",
  avatarUrl: "/avatars/mom.jpg",
  stats: {
    memories: 184,
    voiceNotes: 32,
    letters: 12,
    timelineEvents: 228
  },
  timeline: [
    {
      id: "1",
      date: "2026-03-15",
      title: "Mom's birthday party",
      description: "Celebrated her 65th birthday with family and friends",
      type: 'memory'
    },
    {
      id: "2",
      date: "2026-03-10",
      title: "Dad's favorite story",
      description: "Recorded Dad telling his favorite story about Mom",
      type: 'voice'
    },
    {
      id: "3",
      date: "2026-03-05",
      title: "Grandma's recipe",
      description: "Scanned and preserved Grandma's handwritten recipe book",
      type: 'letter'
    }
  ]
}

export default function LovedOneProfilePage() {
  return (
    <ProfileLayout
      heroContent={
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <img 
              src={sampleProfile.avatarUrl}
              alt={sampleProfile.name}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/10"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl md:text-4xl font-bold">
                {sampleProfile.name}
              </h1>
              <div className="bg-white/10 px-3 py-1 rounded-full text-sm">
                Premium Profile
              </div>
            </div>
            <p className="mt-2 text-muted-foreground">
              {sampleProfile.relationship}
            </p>
            <p className="mt-4 text-lg">
              {sampleProfile.bio}
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard 
                label="Memories" 
                value={sampleProfile.stats.memories}
                icon={Icons.Album}
              />
              <StatCard 
                label="Voice Notes" 
                value={sampleProfile.stats.voiceNotes}
                icon={Icons.Mic}
              />
              <StatCard 
                label="Letters" 
                value={sampleProfile.stats.letters}
                icon={Icons.Mail}
              />
              <StatCard 
                label="Timeline Events" 
                value={sampleProfile.stats.timelineEvents}
                icon={Icons.Calendar}
              />
            </div>
          </div>
        </div>
      }
    >
      <Nav />
      
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Timeline</h2>
            <div className="space-y-4">
              {sampleProfile.timeline.map(event => (
                <TimelineEvent key={event.id} event={event} />
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <label className="btn btn-outline w-full cursor-pointer">
                <Upload className="mr-2 h-4 w-4" />
                Upload Memory
                <input 
                  type="file"
                  className="hidden"
                  accept="image/*,video/*,audio/*"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      try {
                        const uploadData = await uploadFile(file);
                        const signedUrl = await getSignedUrl(uploadData.path);
                        // Handle the signed URL (e.g., save to database)
                        console.log('File uploaded successfully:', signedUrl);
                      } catch (error) {
                        console.error('Upload failed:', error);
                      }
                    }
                  }}
                />
              </label>
              <Button className="w-full" variant="outline">
                <Icons.Mic className="mr-2 h-4 w-4" />
                Record Voice Note
              </Button>
              <Button className="w-full" variant="outline">
                <Icons.Pen className="mr-2 h-4 w-4" />
                Write Letter
              </Button>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">AI Presence</h2>
          <div className="text-muted-foreground">
            Coming soon: Interact with your loved one's AI presence based on their preserved memories and voice notes.
          </div>
        </div>
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

      <section id="testimonials" className="container-wrap py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Stories of love preserved
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              quote: "ForeverLuvd helped me preserve my father's voice and stories. Now I can share them with my children.",
              name: "Sarah T.",
              location: "Chicago, IL"
            },
            {
              quote: "After losing my mom, I thought her memories were gone too. ForeverLuvd gave me a way to keep her spirit alive.",
              name: "Michael R.",
              location: "Austin, TX"
            },
            {
              quote: "Being able to hear my grandmother's voice again... there are no words for how much that means to me.",
              name: "Emily C.",
              location: "Seattle, WA"
            }
          ].map((testimonial) => (
            <div key={testimonial.name} className="card p-6">
              <p className="text-lg italic">"{testimonial.quote}"</p>
              <div className="mt-4">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-neutral-400">{testimonial.location}</p>
              </div>
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

      <section id="faq" className="container-wrap py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Your questions, answered
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ["Is my data really private?", "Yes. We use end-to-end encryption and never sell or share your data. Your memories belong only to you and your family."],
            ["Can I access this from anywhere?", "Your memories are securely stored in the cloud and accessible from any device, anytime you need them."],
            ["What if I'm not tech-savvy?", "We've designed ForeverLuvd to be simple and intuitive. Our support team is always here to help if you need it."],
            ["Can I share with family members?", "Yes, you can securely share access with trusted family members while maintaining full control over permissions."],
            ["What file types can I upload?", "We support photos, videos, audio recordings, documents, and more. If it's meaningful to you, we'll preserve it."],
            ["How does the AI work?", "Our AI is opt-in only and trained solely on your uploaded content. It helps organize and interact with memories in meaningful ways."]
          ].map(([question, answer]) => (
            <div key={question} className="card p-6">
              <h3 className="text-xl font-semibold">{question}</h3>
              <p className="mt-3 text-neutral-400">{answer}</p>
            </div>
          ))}
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
            {
              name: "Starter",
              price: "Free",
              description: "Begin preserving one loved one's legacy",
              features: [
                "1 loved one profile",
                "Basic memory uploads",
                "Private dashboard",
                "Essential preservation tools"
              ],
              cta: "Start preserving"
            },
            {
              name: "Personal",
              price: "$12/mo",
              description: "For comprehensive memory keeping",
              features: [
                "Unlimited memory entries",
                "Enhanced organization",
                "Priority support",
                "Basic AI features"
              ],
              cta: "Preserve more"
            },
            {
              name: "Family",
              price: "$29/mo",
              description: "Share and protect family legacies",
              features: [
                "Multiple loved ones",
                "Shared family access",
                "Advanced AI features",
                "Legacy planning tools"
              ],
              cta: "Protect family"
            }
          ].map((plan) => (
            <div key={plan.name} className="card p-6">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-3 text-3xl font-bold">{plan.price}</p>
              <p className="mt-4 text-neutral-400">{plan.description}</p>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/auth/sign-up"
                className="mt-6 btn btn-primary w-full"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section id="final-cta" className="container-wrap py-20">
        <div className="card p-8 md:p-12 text-center">
          <h2 className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Don't wait until it's too late
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-300">
            Memories fade, but with ForeverLuvd, your loved ones' essence can live on. Start preserving their stories, voice, and legacy today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link 
              href="/auth/sign-up" 
              className="btn btn-primary px-8 py-4 text-lg font-semibold"
            >
              Start preserving →
            </Link>
            <Link 
              href="/features" 
              className="btn btn-secondary px-8 py-4 text-lg font-semibold hover:bg-white/5"
            >
              Learn more
            </Link>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            Your memories deserve protection. Start today, before it's too late.
          </p>
        </div>
      </section>
    </main>
  );
}
