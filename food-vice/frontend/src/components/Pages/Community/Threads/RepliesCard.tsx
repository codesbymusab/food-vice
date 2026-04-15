export function RepliesCard() {
    return (
        <div className="space-y-6 bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800" >
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Top Replies</h2>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span>Sort by:</span>
                    <button className="flex items-center gap-1 font-bold text-slate-900 dark:text-slate-100">
                        Best <span className="material-symbols-outlined text-sm">expand_more</span>
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex gap-4">
                    <div
                        className="flex-shrink-0 size-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">person</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-sm text-slate-900 dark:text-slate-100">SarahWhisk</span>
                            <span className="text-xs text-slate-500">• 3h ago</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
                            Kimchi was a game changer for me too! I started making a batch every Sunday. One
                            tip: don't forget the ginger, it really helps with the anti-inflammatory properties.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 bg-primary/5 rounded-full px-2 py-0.5">
                                <button className="hover:text-primary"><span
                                    className="material-symbols-outlined text-base">thumb_up</span></button>
                                <span className="text-xs font-bold">42</span>
                                <button className="hover:text-primary"><span
                                    className="material-symbols-outlined text-base">thumb_down</span></button>
                            </div>
                            <button className="text-xs font-bold text-slate-500 hover:text-primary">Reply</button>
                        </div>

                        <div className="mt-4 pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-4">
                            <div className="flex gap-4">
                                <div
                                    className="flex-shrink-0 size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-xs text-slate-500">person</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span
                                            className="font-bold text-xs text-slate-900 dark:text-slate-100">BioHacker_Max</span>
                                        <span className="text-xs text-slate-500">• 2h ago</span>
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-2">
                                        How long do you usually ferment yours for? I find 5 days on the counter
                                        is my sweet spot.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1 text-slate-500">
                                            <button className="hover:text-primary"><span
                                                className="material-symbols-outlined text-sm">thumb_up</span></button>
                                            <span className="text-xs font-bold">12</span>
                                        </div>
                                        <button
                                            className="text-xs font-bold text-slate-500 hover:text-primary">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div
                        className="flex-shrink-0 size-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">person</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-sm text-slate-900 dark:text-slate-100">GreenEats</span>
                            <span className="text-xs text-slate-500">• 1h ago</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
                            Is it possible to over-ferment? I tried making kombucha and it tasted like pure
                            vinegar after a week.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 bg-primary/5 rounded-full px-2 py-0.5">
                                <button className="hover:text-primary"><span
                                    className="material-symbols-outlined text-base">thumb_up</span></button>
                                <span className="text-xs font-bold">8</span>
                                <button className="hover:text-primary"><span
                                    className="material-symbols-outlined text-base">thumb_down</span></button>
                            </div>
                            <button className="text-xs font-bold text-slate-500 hover:text-primary">Reply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}