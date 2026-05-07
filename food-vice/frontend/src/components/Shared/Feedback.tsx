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

export function ConfirmationDialog({
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isLoading = false,
  isDangerous = false,
}: {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
  isDangerous?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-2xl shadow-slate-900/20 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95">
        <div className="mb-6">
          <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${
            isDangerous 
              ? "bg-red-100 text-red-600 dark:bg-red-900/20" 
              : "bg-blue-100 text-blue-600 dark:bg-blue-900/20"
          }`}>
            <span className="material-symbols-outlined">
              {isDangerous ? "warning" : "help"}
            </span>
          </div>
          <h2 className="text-xl font-bold text-center text-slate-900 dark:text-white">{title}</h2>
        </div>
        <p className="mb-8 text-center text-slate-600 dark:text-slate-400">{message}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl border-2 border-slate-200 text-slate-700 dark:border-slate-600 dark:text-slate-300 font-bold uppercase tracking-widest text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-xl text-white font-bold uppercase tracking-widest text-xs shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 ${
              isDangerous
                ? "bg-red-600 hover:bg-red-700 shadow-red-600/20"
                : "bg-primary hover:bg-orange-600 shadow-primary/20"
            }`}
          >
            {isLoading ? "Processing..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export function OperationLoadingDialog({ message = "Processing your request..." }: { message?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white/95 p-8 text-center shadow-2xl shadow-slate-900/20 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">hourglass_empty</span>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{message}</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Please wait a moment.</p>
      </div>
    </div>
  );
}
