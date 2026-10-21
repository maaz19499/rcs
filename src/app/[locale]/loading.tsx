export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-4 border-border border-t-brand-blue animate-spin" />
        <p className="text-sm text-secondary font-medium">Loading…</p>
      </div>
    </div>
  );
}
