interface Community {
    name: string;
    description: string;
    coverPhoto?: string;
}

export function CommunityCover({ community }: { community: Community }) {
    return (
        <div className="relative w-full h-48 md:h-64 rounded-3xl overflow-hidden shadow-xl mb-8">
            <img 
                alt={community.name} 
                className="w-full h-full object-cover" 
                src={community.coverPhoto || "https://lh3.googleusercontent.com/aida-public/AB6AXuBNiH55cSNbmfn0Tt3rC9uGLD7o7d2th-Dhi0fXNWpYucqLlYclFwo4uYpTWPAjxjFgFlukxLQ-T5qFCFb9B2es0LwmaoqNUzhlKIvq-JjXPnjNG1uUp-6zIADl6H0wSOTqwOJc_EuNwTlb6cdgLWnb-Ao1zuyVr3bBzx0Fr8EXtKCGZGsfwBc-tOU5Jmje68o9UvvHn16ibT0v-hQSBfpEEJAf4LqaWM-tDMP1t1sZU-ukHponvyOJ4CT9DtPMt4WZJCqE1riy7fw"} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">{community.name}</h1>
                        <p className="text-slate-200 text-sm md:text-base max-w-xl font-medium drop-shadow-md">{community.description}</p>
                    </div>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 shrink-0">
                        <div className="flex flex-col">
                            <span className="text-primary font-black text-lg leading-tight">1</span>
                            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Members</span>
                        </div>
                        <div className="w-px h-8 bg-white/20"></div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                                <span className="text-cyan-400 font-black text-lg leading-tight">1</span>
                            </div>
                            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Online Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}