export function CommunityGuidelines({ guidelines }: { guidelines: string[] }) {
    return (
        <div
            className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">policy</span>
                Community Guidelines
            </h3>
            <ul className="space-y-3">
                {guidelines?.map((rule, index) => (
                    <li key={index} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-primary font-bold">{index + 1}.</span>
                        <span>{rule}</span>
                    </li>
                ))}
                {(!guidelines || guidelines.length === 0) && (
                    <li className="text-sm text-slate-500 italic">No guidelines provided</li>
                )}
            </ul>
        </div>
    )
}