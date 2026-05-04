export function UploadProgressDialog({ progress }: { progress: number }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-outline/50 w-[90%] max-w-md">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-6 animate-pulse">
            <span className="material-symbols-outlined text-secondary text-4xl">
              cloud_upload
            </span>
          </div>
          <h2 className="text-xl font-black text-tertiary mb-2 font-headline tracking-tight uppercase">
            Uploading Reel
          </h2>
          <p className="text-on-surface-variant text-sm mb-6">
            Please wait while your video is being uploaded…
          </p>

          
          <div className="w-full bg-surface-container-high rounded-full h-3 mb-4">
            <div
              className="bg-primary h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
            {progress}% Complete
          </div>
        </div>
      </div>
    </div>
  );
}
