import { useState } from "react"

export function NotificationsDropDown() {

    const [selectedTab, setSelectedTab] = useState<string>('all')
    
        function changeTab(tab: string): void {
            setSelectedTab(tab)
        }
        
    return (
        <div className="max-h-[480px] overflow-y-auto">
            <h1 className="text-xl font-bold">Notifications</h1>
            <div className="flex border-b border-slate-200 dark:border-slate-700 mb-2">
                <button className={`px-4 md:px-8 py-4 text-xs font-medium ${selectedTab === 'all' ? 'border-b-2 border-primary text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'} transition-all`}
                    onClick={() => changeTab('all')}>
                    All
                </button>
                <button className={`px-4 md:px-8 py-4 text-xs font-medium ${selectedTab === 'mentions' ? 'border-b-2 border-primary text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'} transition-all`}
                    onClick={() => changeTab('mentions')}>
                    Mentions
                </button>
                <button className={`px-4 py-4 text-xs font-medium ${selectedTab === 'community' ? 'border-b-2 border-primary text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'} transition-all`}
                    onClick={() => changeTab('community')}>
                    Community
                </button>
            </div>

            <div className="px-6 py-4 flex gap-4 hover:bg-white/50 transition-colors cursor-pointer group">
                <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img data-alt="portrait of a male food influencer with a modern haircut and friendly expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnWfetn1ccMEMRIp5dH6kGyNzP4E7WvNCXV0xeT3ZzogdnCqdiie56Xqa1OqYMu2api4en8rcow1dzt82LI7JnPYqoP-gS-XrICnsPSVjGqaBCkiFudvPCsngVrVXMpsU63jHw2lZlQOPFtQoaYpqh6UTct9r-3oQNbVXpbISbumbboFa4X4uoFo2KVHlFg4K1C_mEP2HNMrTJ5I0sHbpYR5VNnxW3PaRvrC87Jk5gW_xrwL13Asp8MIpt2vQ-XlBHDBw3x3weTvM" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white ring-2 ring-white">
                        <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: 'FILL 1' }}>reply</span>
                    </div>
                </div>
                <div className="flex-grow">
                    <p className="text-sm text-on-surface leading-snug">
                        <span className="font-black">@foodie_traveller</span> replied to your <span className="text-primary font-bold">'Best Burgers'</span> comment
                    </p>
                    <span className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-tighter mt-1 block">2 minutes ago</span>
                </div>
                <div className="w-8 h-4 bg-primary rounded-full mt-2 self-start material-symbols-outlined"></div>
            </div>

            <div className="px-6 py-4 flex gap-4 hover:bg-white/50 transition-colors cursor-pointer group">
                <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "FILL 1" }}>stars</span>
                    </div>
                </div>
                <div className="flex-grow">
                    <p className="text-sm text-on-surface leading-snug">
                        Your review for <span className="font-black italic">'Saffron Bistro'</span> reached <span className="font-black text-primary">100 upvotes!</span>
                    </p>
                    <span className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-tighter mt-1 block">1 hour ago</span>
                </div>
                <div className="w-8 h-4 bg-primary rounded-full mt-2 self-start material-symbols-outlined"></div>
            </div>

            <div className="px-6 py-4 flex gap-4 hover:bg-white/50 transition-colors cursor-pointer group">
                <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden">
                        <img data-alt="vibrant street food skewers with smoke and warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuComZGvrGI3Fzm6rm5CKmW6rPbmUgZ5qulSRDeGRs3GH42hUxOjBcoi3elcAwjGsd8cG5v0KFmuGXqHI2R1y6cwIKC2dpCEfirglOV7euSkcdC3DeFY4xdFVLtN-ONr3fPiY4ogB9AGFWmH7gamozOVTxpKG4Kq6hUm_IfS2NsDNpkhZ06z5Le3vW-NSp8O13rFlgtnudcpT2_nSjnpLqOHI-QiLO2gKB50ejGXqnOnkpdy64XVfut4Iv-WCD6--nQcLrZ9vKthPDE" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "FILL 1" }}>play_circle</span>
                        </div>
                    </div>
                </div>
                <div className="flex-grow">
                    <p className="text-sm text-on-surface leading-snug">
                        New trending reel in your area: <span className="font-black">'Street Food Secrets'</span>
                    </p>
                    <span className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-tighter mt-1 block">3 hours ago</span>
                </div>
            </div>

            <div className="px-6 py-4 flex gap-4 hover:bg-white/50 transition-colors cursor-pointer group">
                <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-secondary text-2xl text-accent-cyan" style={{ fontVariationSettings: "FILL 1" }}>shield</span>
                    </div>
                </div>
                <div className="flex-grow">
                    <p className="text-sm text-on-surface leading-snug">
                        System update: Your profile <span className="font-bold text-secondary">trust score</span> increased to <span className="font-black text-accent-cyan">85!</span>
                    </p>
                    <span className="text-[11px] font-bold  uppercase tracking-tighter mt-1 block">Yesterday</span>
                </div>
            </div>
        </div>
    )
}