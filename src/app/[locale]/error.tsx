'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="rcs-card text-center max-w-md px-8 py-10 rounded-2xl mx-4">
        <h2 className="font-display text-2xl font-bold text-primary mb-2">Something went wrong</h2>
        <p className="text-secondary text-sm mb-6">{error.message ?? "An unexpected error occurred."}</p>
        <button
          onClick={reset}
          className="rcs-button rcs-button-primary px-6 py-2.5 rounded-lg text-sm font-semibold"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
