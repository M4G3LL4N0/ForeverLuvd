export default function SettingsPage() {
  return (
    <main className="container-wrap py-12">
      <div className="card p-8">
        <h1 className="text-4xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Privacy, ownership, and consent controls will live here.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold">Data ownership</h2>
            <p className="mt-2 text-neutral-400">
              ForeverLuvd is built so users retain ownership over memories, likeness, and preserved context.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold">Privacy commitments</h2>
            <p className="mt-2 text-neutral-400">
              No resale. No hidden model training. No grief exploitation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold">Future controls</h2>
            <p className="mt-2 text-neutral-400">
              Export data, delete account, AI consent settings, and family access controls are coming soon.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
