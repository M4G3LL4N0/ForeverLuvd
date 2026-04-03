export default function SettingsPage() {
  return (
    <main className="container-wrap py-12">
      <div className="card p-8">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy & Trust Center</h1>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Your safety, control, and peace of mind are our top priorities. Manage your data, privacy, and account settings here.
        </p>

        <div className="mt-8 grid gap-6">
          {/* Data Ownership Section */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Your Data, Your Control</h2>
            <p className="mt-2 text-neutral-400">
              You maintain full ownership of all content you create on ForeverLuvd. We never claim rights to your memories or likeness.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Content ownership</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Memory export</span>
                <span className="text-sm text-yellow-400">Coming Q3 2026</span>
              </div>
            </div>
          </div>

          {/* Privacy Commitments Section */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Our Privacy Promise</h2>
            <p className="mt-2 text-neutral-400">
              We're committed to protecting your privacy and treating your memories with the utmost care.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">No data resale</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">No hidden AI training</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">End-to-end encryption</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
            </div>
          </div>

          {/* Account Controls Section */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Account Management</h2>
            <p className="mt-2 text-neutral-400">
              Maintain complete control over your account and data.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Account deletion</span>
                <span className="text-sm text-yellow-400">Coming Q4 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">AI consent settings</span>
                <span className="text-sm text-yellow-400">Coming Q1 2027</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Family access controls</span>
                <span className="text-sm text-yellow-400">Coming Q2 2027</span>
              </div>
            </div>
          </div>

          {/* Trust & Safety Section */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Trust & Safety</h2>
            <p className="mt-2 text-neutral-400">
              We're here to ensure your experience is safe and respectful.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Content moderation</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Grief support resources</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Ethical AI guidelines</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
