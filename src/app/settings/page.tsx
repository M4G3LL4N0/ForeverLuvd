export default function SettingsPage() {
  return (
    <main className="container-wrap py-12">
      <div className="card p-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight">Your Privacy & Trust Center</h1>
          <p className="mt-3 text-lg text-neutral-400">
            At ForeverLuvd, we believe your memories deserve the highest level of protection and respect. 
            This is your command center for data ownership, privacy controls, and account security.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          {/* Data Ownership Section */}
          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Your Data, Your Legacy</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              Every memory you create belongs exclusively to you. We're here to safeguard your legacy, 
              not to claim it. Our technology exists solely to preserve and honor your stories.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Complete Content Ownership</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      You retain full rights to all uploaded content and memories
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Memory Export & Backup</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Export your entire memory archive in standard formats
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-400">Launching Q3 2026</span>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Commitments Section */}
          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Our Ironclad Privacy Promise</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              We've built ForeverLuvd on a foundation of privacy-by-design. Your data is protected 
              by industry-leading security measures and ethical principles.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Zero Data Resale</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      We never sell or share your data with third parties
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">No Hidden AI Training</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Your memories are never used to train AI models
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">End-to-End Encryption</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      All data is encrypted in transit and at rest
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Transparent Data Practices</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Clear documentation of how we handle your information
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-400">Active</span>
                </div>
              </div>
            </div>
          </section>

          {/* Account Controls Section */}
          <section>
            <h2 className="text-3xl font-semibold tracking-tight">Account & Access Management</h2>
            <p className="mt-2 max-w-3xl text-neutral-400">
              Maintain complete control over your account and how your memories are accessed.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Full Account Deletion</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Permanently remove all account data and memories
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-400">Launching Q4 2026</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Granular AI Consent</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Control how AI interacts with your memories
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-400">Launching Q1 2027</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Family Access Controls</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Manage who can view and interact with memories
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-400">Launching Q2 2027</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Legacy Planning</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Designate memory custodians and access rules
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
