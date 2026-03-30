export function FeedCard() {
    return (
        <article
            className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-6">
                <div className="flex flex-col items-center gap-1">
                    <button className="p-1 rounded hover:bg-primary/10 text-primary transition-colors">
                        <span className="material-symbols-outlined">expand_less</span>
                    </button>
                    <span className="text-base font-bold">215</span>
                    <button className="p-1 rounded hover:bg-cyan-500/10 text-cyan-500 transition-colors">
                        <span className="material-symbols-outlined">expand_more</span>
                    </button>
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="size-8 rounded-full bg-cover" data-alt="User profile avatar small"
                            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC45ciGZOzUsIN17ua4yjDNoE9OSnz45VuMt864SUu86Hty3nCuA-Je7rKHRUwNUH7noXgadKUi_u7kv_s1xFS1TSQ9-GfgBxkJkJj2v7cwdFn1YE4YsNhAeDa9kmzb1A7BwNxL_NEhAaeB0jlr2P7KvPsXCB6RmqkMowuBKKjDi0PAfAoWLwoK9CogZ1ZGq7EzUoxmEJ0Rvo5v7mW-Sm5Cc8yJJYgRD8OY4Qk8HpSWb-c670JvIxT0sxkdNHqrFHD2M5shrfWPjdg')"}}>
                        </div>
                        <span className="text-sm font-semibold">@bakery_enthusiast</span>
                        <span className="text-xs text-slate-500">• 1d ago</span>
                        <span className="ml-auto flex gap-2">
                            <span
                                className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Recipes</span>
                        </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 hover:text-primary cursor-pointer transition-colors">Rate my first
                        attempt at sourdough bread!</h2>
                    <div className="w-full aspect-video rounded-xl bg-center bg-cover my-4"
                        data-alt="Close up of a freshly baked sourdough loaf with golden crust"
                        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAai3NAJZWt1UhJ0AXQ7coZjcASAQFGdXxD-PWbtpqOkAgr5X9XPzzx0R0hFfL_UAEODK9ftLJHqmo8owNeTi94dHoa3w4967_iI-kymz0lDbitxjlnKX5q4AcJRixBjonySzQVHU_nYjomtQr4oDiR1T4_h8AAq9MVSor5WtduxJL-CE8c5xIypwoPnt-2P-cTDG3WpXJ6nMeEoVtu_5BnD6IruIy3It233dYT0x2kEqiVO3AJASDVRrseEODoWey9xosVEIVSfls')"}}>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                        Spent 3 days on this starter. I think the crumb looks okay but the ear didn't quite pop. Any
                        advice on scoring techniques?
                    </p>
                    <div className="flex items-center gap-6">
                        <button
                            className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm font-medium transition-colors">
                            <span className="material-symbols-outlined text-lg">chat_bubble_outline</span> 112 Comments
                        </button>
                        <button
                            className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm font-medium transition-colors">
                            <span className="material-symbols-outlined text-lg">share</span> Share
                        </button>
                    </div>
                </div>
            </div>
        </article>

    )
}