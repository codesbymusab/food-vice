import { TrendingCard } from "../Cards/TrendingCard";

export function Trending(){
    return (
        <section className="px-4 mb-16">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">trending_up</span> Trending Restaurants
                </h3>
                <a className="text-primary font-bold text-sm hover:underline" href="#">View All</a>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x">

                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />

            </div>
        </section>
    )
}