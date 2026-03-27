import { NearByCard } from "../Cards/NearByCard";

export function Nearby() {
    return (
        <section className="px-4 mb-16">
            <h3 className="text-2xl font-bold mb-6">Nearby Restaurants</h3>
            <div className="flex flex-col lg:flex-row gap-6 h-[500px]">
                <div className="flex-1 overflow-y-auto pr-2 space-y-4 no-scrollbar p-8">
                    
                    <NearByCard />
                    <NearByCard />
                    <NearByCard />
                    
                </div>
                <div className="flex-[1.5] rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl relative min-h-[300px]">
                    <div className="absolute inset-0 bg-slate-200" data-location="New York City">

                        <div className="w-full h-full bg-slate-100 dark:bg-slate-900 relative">
                            <div className="absolute inset-0 opacity-20" ></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className="material-symbols-outlined text-primary text-5xl drop-shadow-lg">location_on</span>
                            </div>
                            <span className="material-symbols-outlined absolute top-1/4 left-1/3 text-accent-cyan text-3xl">restaurant</span>
                            <span className="material-symbols-outlined absolute top-2/3 right-1/4 text-accent-cyan text-3xl">local_cafe</span>
                            <span className="material-symbols-outlined absolute bottom-1/4 left-1/2 text-accent-cyan text-3xl">bakery_dining</span>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-3 rounded-xl shadow-lg border border-primary/20">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Searching in</p>
                        <h6 className="font-black text-primary">Upper East Side, NY</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}