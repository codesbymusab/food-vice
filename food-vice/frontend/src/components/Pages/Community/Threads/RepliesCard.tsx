interface Comment {
    _id: string;
    uid: {
        name: string;
    };
    content: string;
    createdAt: string;
}

export function RepliesCard({ comments }: { comments: Comment[] }) {
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
                {comments.length === 0 && <p className="text-slate-500 italic text-sm">No comments yet.</p>}
                {comments.map((comment) => (
                    <div key={comment._id} className="flex gap-4 border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0">
                        <div
                            className="flex-shrink-0 size-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">person</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-sm text-slate-900 dark:text-slate-100">{comment.uid?.name || 'Anonymous'}</span>
                                <span className="text-xs text-slate-500">• {new Date(comment.createdAt).toLocaleDateString()}</span>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
                                {comment.content}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1 bg-primary/5 rounded-full px-2 py-0.5">
                                    <button className="hover:text-primary"><span
                                        className="material-symbols-outlined text-base">thumb_up</span></button>
                                    <span className="text-xs font-bold">0</span>
                                    <button className="hover:text-primary"><span
                                        className="material-symbols-outlined text-base">thumb_down</span></button>
                                </div>
                                <button className="text-xs font-bold text-slate-500 hover:text-primary">Reply</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}