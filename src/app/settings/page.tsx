export default function SettingsPage() {
  return (
    <main className="container-wrap py-12">
      <div className="card p-8">
        <div className="max-w-4xl">
          <div className="border-b border-white/10 pb-8">
            <h1 className="text-4xl font-semibold tracking-tight">ForeverLuvd Trust Center</h1>
            <p className="mt-3 text-lg text-neutral-400">
              Our sacred commitment to protecting your most precious memories. 
              Every technical and ethical decision we make begins here.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-4 border-b border-white/10 pb-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-medium">Irrevocable Data Ownership</h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Your memories always belong to you. ForeverLuvd's role is strictly custodial.
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  ✓
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-medium">Consent-First AI</h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    No automated processing. Every AI interaction requires your explicit permission.
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  ✓
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-medium">Zero Data Monetization</h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Nobody profits from your memories—not even us.
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  ✓
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-medium">Military-Grade Encryption</h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    AES-256 + zero-access architecture protects everything.
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8">
          {/* Data Sovereignty Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-semibold tracking-tight">Complete Data Sovereignty</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              Your memories belong exclusively to you. We're custodians, not owners. Every byte of data 
              you entrust to us remains under your complete control.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Absolute Ownership</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Full legal rights to all content and memories
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Export & Backup</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Full memory archive export in standard formats
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-400">Launching Q3 2026</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Data Portability</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Move your memories to any compatible platform
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-400">Launching Q4 2026</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Legacy Planning</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Designate custodians for your digital legacy
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-400">Launching Q1 2027</span>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Security Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-semibold tracking-tight">Uncompromising Privacy & Security</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              Your memories are protected by industry-leading security measures and ethical principles. 
              We go beyond compliance to ensure your peace of mind.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Zero Data Monetization</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      We never sell, share, or monetize your data
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Consent-Based AI</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      AI only interacts with your explicit consent
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Military-Grade Encryption</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      AES-256 encryption for all data at rest and in transit
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Transparent Operations</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Full visibility into our data practices
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
            </div>
          </section>

          {/* Access & Control Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-semibold tracking-tight">Granular Access Controls</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              Maintain precise control over who can access your memories and how they're used. 
              From family sharing to legacy planning, you're in complete control.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Complete Account Deletion</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Permanently erase all account data and memories
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-400">Launching Q4 2026</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">AI Interaction Controls</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Fine-tune how AI engages with your memories
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-400">Launching Q1 2027</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Family Sharing Settings</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Manage family access to specific memories
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-400">Launching Q2 2027</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Legacy Custodians</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Designate trusted individuals to manage your legacy
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-400">Launching Q3 2027</span>
                </div>
              </div>
            </div>
          </section>

          {/* Trust & Safety Section */}
          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Trust & Safety</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              We're committed to creating a safe, respectful environment for preserving memories.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Content Moderation</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Proactive protection against harmful content
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Grief Support Resources</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Access to professional support and guidance
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Ethical AI Guidelines</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Strict adherence to responsible AI practices
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">24/7 Support</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Immediate assistance for any concerns
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
