export function SavedRestaurant(){
    return (
        <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern upscale restaurant interior with warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvjP_MPtrDD9uQZ4fP16ubcM-3jEQQnEsD-vt1gUilgkvVZTm_8a-ESviyHTUdI9rRlu9YqZZNXFzRot2walPWQQa6BjJeawrAhonMDIr-xaln97rxsdJCReF41HteGTODreb49IMCCKkXniQppxgwptqHz10riAwnXZcp96V_Qhc0uTr23-9Es-VCcLJ_aV8XqUMFzf5822-cvblfG2LAmZBE5NMpNKjSm6OlkaJD957KxUoFOloFOifZZKwwIMHy7DC59MFqmFA" />
                <div className="absolute top-3 right-3">
                    <button className="bg-white/90 backdrop-blur p-2 rounded-full text-primary shadow-sm">
                        <span className="material-symbols-outlined fill">bookmark</span>
                    </button>
                </div>
                <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide shadow-sm">
                    ITALIAN • $$$
                </div>
            </div>
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">La Piazza San Francisco</h4>
                    <div className="flex items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-sm fill-1">star</span>
                        <span className="text-sm font-bold">4.8</span>
                    </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">Authentic wood-fired pizzas and homemade pasta in a cozy, rustic atmosphere.</p>
                <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-700 flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-400">Saved 3 days ago</span>

                </div>
            </div>
        </div>
    )
}