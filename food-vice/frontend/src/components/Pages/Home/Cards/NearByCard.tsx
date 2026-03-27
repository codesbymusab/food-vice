export function NearByCard() {
    return (
        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl flex items-center gap-4 hover:ring-2 ring-primary/30 transition-all cursor-pointer border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-200" data-alt="Mexican street taco stand">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJz1vLZh1dje4EbjXx9j75MRLdUh8t7lAjoLMVQk4HQS1PWPVkl3MpXVZ3hyZSZpeEWCaHYmrkbC9a4KxjLaYxMNAG3hNW1eU89vKpIJOdorxNiVZKgAquo-wce5OXTELRyFTSRbPjjiNZvCtatgLrxidNHGt_3J9LAWqdWUiCiGEPagQaxDsRADueXKXAKUrOacn7nkmCTwCGncCdB7tJ_z4RntzPnnaqF7Lmg4scpNL1cZK4_QBk6Nj6lRiV2HZ2h6Er0OrqkG4" />
            </div>
            <div>
                <h5 className="font-bold">Taco Express</h5>
                <p className="text-sm text-slate-500">600m away • Closing Soon</p>
                <div className="mt-1 flex gap-1">
                    <span className="material-symbols-outlined text-xs text-primary fill-current">star</span>
                    <span className="material-symbols-outlined text-xs text-primary fill-current">star</span>
                    <span className="material-symbols-outlined text-xs text-primary fill-current">star</span>
                    <span className="material-symbols-outlined text-xs text-slate-300">star</span>
                    <span className="material-symbols-outlined text-xs text-slate-300">star</span>
                </div>
            </div>
        </div>
    )
}