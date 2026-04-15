export function CommunityGuidelines() {
    return (
        <div
            className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">policy</span>
                Community Guidelines
            </h3>
            <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-primary font-bold">1.</span>
                    <span>Be respectful and kind to others</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-primary font-bold">2.</span>
                    <span>No self-promotion or spamming</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-primary font-bold">3.</span>
                    <span>Cite sources for health claims</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-primary font-bold">4.</span>
                    <span>Stay on topic and keep it civil</span>
                </li>
            </ul>
        </div>
    )
}