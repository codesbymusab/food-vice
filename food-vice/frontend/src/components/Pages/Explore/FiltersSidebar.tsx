export function FiltersSidebar() {
    return (
        <aside className="hidden lg:flex w-72 flex-col border-r border-primary/10 bg-background-light dark:bg-background-dark p-6 gap-8 sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <button className="text-xs font-semibold text-accent uppercase tracking-wider hover:underline">
                        Clear All
                    </button>
                </div>

                <div className="space-y-3">
                    <p className="text-xs font-bold text-slate-500 uppercase">Cuisine Type</p>
                    <div className="space-y-1">
                        <label className="flex items-center gap-3 p-2 rounded-lg bg-primary/10 text-primary cursor-pointer">
                            <span className="material-symbols-outlined text-xl">restaurant</span>
                            <span className="text-sm font-semibold">All Cuisines</span>
                            <input checked className="hidden" name="cuisine" type="radio" />
                        </label>
                        <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 cursor-pointer">
                            <span className="material-symbols-outlined text-xl text-slate-400">lunch_dining</span>
                            <span className="text-sm font-medium">Fast Food</span>
                            <input className="hidden" name="cuisine" type="radio" />
                        </label>
                        <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 cursor-pointer">
                            <span className="material-symbols-outlined text-xl text-slate-400">local_pizza</span>
                            <span className="text-sm font-medium">Italian</span>
                            <input className="hidden" name="cuisine" type="radio" />
                        </label>
                        <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 cursor-pointer">
                            <span className="material-symbols-outlined text-xl text-slate-400">eco</span>
                            <span className="text-sm font-medium">Healthy / Vegan</span>
                            <input className="hidden" name="cuisine" type="radio" />
                        </label>
                    </div>
                </div>
                <hr className="border-primary/5" />

                <div className="space-y-3">
                    <p className="text-xs font-bold text-slate-500 uppercase">Price Range</p>
                    <div className="flex gap-2">
                        <button className="flex-1 py-1.5 rounded border border-primary/20 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                            $
                        </button>
                        <button className="flex-1 py-1.5 rounded border border-primary/20 bg-primary text-white text-sm font-medium">
                            $$
                        </button>
                        <button className="flex-1 py-1.5 rounded border border-primary/20 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                            $$$
                        </button>
                        <button className="flex-1 py-1.5 rounded border border-primary/20 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                            $$$$
                        </button>
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="text-xs font-bold text-slate-500 uppercase">Minimum Rating</p>
                    <div className="flex items-center gap-2">
                        <input
                            className="w-full h-1.5 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                            max="5"
                            min="1"
                            step="0.5"
                            type="range"
                            defaultValue="4"
                        />
                        <span className="text-sm font-bold text-primary">4.0+</span>
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="text-xs font-bold text-slate-500 uppercase">Distance (km)</p>
                    <select className="w-full rounded-lg border-primary/10 bg-primary/5 text-sm py-2 px-3 focus:ring-primary/20 focus:border-primary">
                        <option>Under 2 km</option>
                        <option selected>Under 5 km</option>
                        <option>Under 10 km</option>
                        <option>City Wide</option>
                    </select>
                </div>
            </div>
        </aside>
    )
}