import { ReelCard } from "../Cards/ReelCard";

export function Reels() {
    return (
        <section className="px-4 mb-16 bg-slate-900 -mx-4 py-12 lg:rounded-3xl lg:mx-4 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-2 mb-8">
                    <span className="material-symbols-outlined text-primary text-3xl">play_circle</span>
                    <h3 className="text-2xl font-bold">Food Reels</h3>
                    <span className="ml-auto px-3 py-1 bg-primary text-xs font-bold rounded-full uppercase tracking-tighter">Trending</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <ReelCard />
                <ReelCard />
                <ReelCard />
                <ReelCard />
                <ReelCard />
                </div>
            </div>
        </section>
    )
}