'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
        <p className="text-gray-500 text-sm mb-6">{error.message ?? "An unexpected error occurred."}</p>
        <button
          onClick={reset}
          className="px-6 py-2.5 rounded-full bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
