export function TrendingCard() {
    return (
        <div className="rounded-2xl bg-white min-w-[300px] snap-start group cursor-pointer hover:mt-5 transition-mt duration-300">
            <div className="relative h-48 rounded-t-2xl overflow-hidden mb-3" data-alt="Fresh assorted sushi platter on a slate plate">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj1Kvc8EVJLk3cDxJ9Cr-xXMpOPZ04--Xnb7GxMmPgic0foRpbVtAtOyxA3j-V2qx23Si87VxTs3fqTQEFqkSdSvTiQOSWXyhRGGhi-E5G6cxsFKaABpmSVL-OZ9HBk96LOsDDjYRF_UyQfufbQXIA1oLT5bGUz6kq1vytOCDMXxEUmd5_LeovTdF3YMKEc1RJxG2bWowLbpQ0N95gLvNL9CUSagFtJrTZcVPmgu_q1AS49fiBsyRUbPG6sITdvI8Rxkxy1emzZVI" />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-sm text-primary fill-current">star</span>
                    <span className="text-xs font-bold">4.6</span>
                </div>
            </div>
            <div className="mx-5 mb-5">
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Sushiko Zen</h4>
                <p className="text-sm text-slate-500">Japanese • $$$ • 2.5km away</p>
            </div>

        </div>
    )
}