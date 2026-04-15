export function RestaurantCard() {
    return (
        <div className="group relative flex flex-col rounded-xl border border-primary/5 bg-white dark:bg-slate-800/50 shadow-sm overflow-hidden hover:shadow-xl transition-all">
            <div
                className="h-48 w-full bg-cover bg-center overflow-hidden"
                data-alt="Close up of a gourmet juicy beef burger"
                style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj1Kvc8EVJLk3cDxJ9Cr-xXMpOPZ04--Xnb7GxMmPgic0foRpbVtAtOyxA3j-V2qx23Si87VxTs3fqTQEFqkSdSvTiQOSWXyhRGGhi-E5G6cxsFKaABpmSVL-OZ9HBk96LOsDDjYRF_UyQfufbQXIA1oLT5bGUz6kq1vytOCDMXxEUmd5_LeovTdF3YMKEc1RJxG2bWowLbpQ0N95gLvNL9CUSagFtJrTZcVPmgu_q1AS49fiBsyRUbPG6sITdvI8Rxkxy1emzZVI")`,
                }}
            >
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur dark:bg-slate-900/90 rounded-full px-2 py-1 flex items-center gap-1 text-xs font-bold text-primary">
                    <span className="material-symbols-outlined text-sm fill-1">star</span> 4.8
                </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        The Burger Lab
                    </h3>
                    <span className="text-xs font-bold text-slate-400">$$</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">Gourmet Burgers • American • 1.2 km</p>
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                            <span className="material-symbols-outlined text-sm text-accent">schedule</span> 15-25 min
                        </span>
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-2">
                            <span className="material-symbols-outlined text-sm text-accent">delivery_dining</span> Free
                        </span>
                    </div>
                    <button className="text-primary">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                </div>
            </div>
        </div>
    )
}