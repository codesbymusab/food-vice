import { TopRatedCard } from "../Cards/TopRatedCard";

export function TopRated() {
    return (
        <section className="px-4 mb-16">
            <h3 className="text-2xl font-bold mb-6">Top Rated This Week</h3>
            <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                <button className="px-6 py-2 rounded-full bg-primary text-white font-bold text-sm">All</button>
                <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary/30 transition-colors font-bold text-sm">Pizza</button>
                <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary/30 transition-colors font-bold text-sm">Cafes</button>
                <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary/30 transition-colors font-bold text-sm">Desserts</button>
                <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary/30 transition-colors font-bold text-sm">Street Food</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <TopRatedCard />
            <TopRatedCard />
            <TopRatedCard />
            <TopRatedCard />
            <TopRatedCard />
                

                
            </div>
        </section>
    )
}