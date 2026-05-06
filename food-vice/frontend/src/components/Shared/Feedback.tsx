import type { ReactNode } from "react";

export function LoadingDialog({ message = "Checking session..." }: { message?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white/95 p-8 text-center shadow-2xl shadow-slate-900/20 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary border-t-transparent text-primary animate-spin"></div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{message}</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Please wait while we finish loading your session.</p>
      </div>
    </div>
  );
}

export function OfflineScreen({ title = "No internet connection", subtitle = "Please reconnect and try again." }: { title?: string; subtitle?: string }) {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-16 text-center dark:bg-slate-950">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-4xl text-red-600 dark:bg-red-900/20">
          <span className="material-symbols-outlined">wifi_off</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">{subtitle}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:brightness-110"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export function ErrorScreen({
  title = "Something went wrong",
  message = "Unable to load this section. Please try again.",
  onRetry,
}: {
  title?: string;
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/20">
        <span className="material-symbols-outlined">error</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{message}</p>
      {onRetry ? (
        <button
          onClick={onRetry}
          className="mt-5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:brightness-110"
        >
          Retry
        </button>
      ) : null}
    </div>
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-3xl border border-slate-200 bg-slate-100 p-5 dark:border-slate-700 dark:bg-slate-800 ${className}`}>
      <div className="mb-4 h-44 rounded-3xl bg-slate-200 dark:bg-slate-700"></div>
      <div className="mb-3 h-4 w-3/4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
      <div className="mb-3 h-4 w-1/2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
      <div className="flex items-center gap-3">
        <div className="h-3 w-16 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        <div className="h-3 w-10 rounded-full bg-slate-200 dark:bg-slate-700"></div>
      </div>
    </div>
  );
}

export function SkeletonList({ count = 4 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
