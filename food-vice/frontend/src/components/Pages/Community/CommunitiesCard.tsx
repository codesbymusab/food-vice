export function CommunitiesCard() {
    return (
        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-primary">groups</span> Communities</h3>
            <div className="flex flex-col gap-4"><div className="group cursor-pointer flex items-center gap-3">
                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">groups</span>
                </div>
                <div className="flex-1">
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors">Bakers United</p>
                    <p className="text-[10px] text-slate-500">12.4k members</p>
                </div>
            </div>
                <div className="group cursor-pointer flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">groups</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-semibold group-hover:text-primary transition-colors">Street Food Hunters</p>
                        <p className="text-[10px] text-slate-500">8.2k members</p>
                    </div>
                </div>
                <div className="group cursor-pointer flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">groups</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-semibold group-hover:text-primary transition-colors">Vegan Vibes</p>
                        <p className="text-[10px] text-slate-500">15.1k members</p>
                    </div>
                </div>
                <div className="group cursor-pointer flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">groups</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-semibold group-hover:text-primary transition-colors">Fine Dining Enthusiasts</p>
                        <p className="text-[10px] text-slate-500">5.6k members</p>
                    </div>
                </div>
                <div className="group cursor-pointer flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">groups</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-semibold group-hover:text-primary transition-colors">Home Chef Collective</p>
                        <p className="text-[10px] text-slate-500">21.3k members</p>
                    </div>
                </div></div>
        </div>
    )
}