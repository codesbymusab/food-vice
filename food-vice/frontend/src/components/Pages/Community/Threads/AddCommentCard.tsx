export function AddCommentCard() {
    return (
        <div
            className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Add a comment</h3>
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div
                    className="flex items-center gap-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span
                        className="material-symbols-outlined text-lg">format_bold</span></button>
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span
                        className="material-symbols-outlined text-lg">format_italic</span></button>
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span
                        className="material-symbols-outlined text-lg">link</span></button>
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span
                        className="material-symbols-outlined text-lg">format_list_bulleted</span></button>
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span
                        className="material-symbols-outlined text-lg">image</span></button>
                </div>
                <textarea
                    className="w-full p-4 bg-transparent border-none focus:ring-0 min-h-[120px] text-slate-900 dark:text-slate-100 placeholder-slate-400"
                    placeholder="What are your thoughts?"></textarea>
            </div>
            <div className="flex justify-end mt-4">
                <button
                    className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">Post
                    Comment</button>
            </div>
        </div>
    )
}