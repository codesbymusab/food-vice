import { useState } from "react";
import { ReelCard } from "./ReelCard";
import { SearchBar } from "../../SearchBar";

type ReelsMode='for-you'|'following'|'discover'

export function ReelsPage() {
    
    const [reelsMode,setReelsMode]=useState<ReelsMode>('for-you')
    
    function changeMode(mode:ReelsMode){
        setReelsMode(mode)
    }
    return (
        <main className="flex flex-1 max-w-[1440px] mx-auto w-full">
            <aside className="bg-white hidden lg:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 p-4 sticky top-[65px] h-[calc(100vh-65px)]">
                <div className="flex flex-col gap-1">
                    <button className={`flex items-center gap-3 px-3 py-3 ${reelsMode==='for-you' ? 'border-b-2 border-primary text-primary bg-primary/5': 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}  
                        onClick={()=>changeMode('for-you')}>
                            <span className="material-symbols-outlined">home</span>
                            <span className="font-bold">For You</span>
                    </button>
                    <button className={`flex items-center gap-3 px-3 py-3   ${reelsMode==='following' ? 'border-b-2 border-primary text-primary bg-primary/5' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}  
                        onClick={()=>changeMode('following')}>
                            <span className="material-symbols-outlined">group</span>
                            <span className="font-medium">Following</span>
                    </button>
                    <button className={`flex items-center gap-3 px-3 py-3   ${reelsMode==='discover' ? 'border-b-2 border-primary text-primary bg-primary/5' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}  
                        onClick={()=>changeMode('discover')}>
                            <span className="material-symbols-outlined">explore</span>
                            <span className="font-medium">Discover</span>
                    </button>
                </div>
                <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6">
                    <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Suggested Accounts</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 px-3 cursor-pointer hover:scale-110">
                            <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                                <img className="w-full h-full object-cover" data-alt="Female chef portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMZwUbpcv6sU_fuyfAcHkQygO5yJ-L5S7890fP7VUbBEIyGOo45SwdrtdWQoi4C2a_JJJv1fM5U2RP0FZrNQ095xqNC7TuyDStVc2revtNr5qQBBHWj5SsVzVDIJzz0b6wAleupz8Y87JjkFLrOVkWsIozQK0I8NowWJ3G6SelSk3U5N6RLyhy7MZCLJKEwMQPPFCKvhVPxUOP0KS2P4GRI51rv-hqzuU4E4g5qzZODysS0IgFSIPpjpCSrpTJbuFwuzAmuz51s_E" />
                            </div>
                            <div className="flex-1 min-w-0 hover:text-primary">
                                <p className="text-sm font-bold truncate ">Chef Isabella</p>
                                <p className="text-xs text-slate-500 truncate">Pasta Specialist</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-3 cursor-pointer hover:scale-110">
                            <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                                <img className="w-full h-full object-cover" data-alt="Male cook portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxJV5Mcv3xySfjJsKBq0g6Gk2GLv0Q40xj-PiijBkWPNptHdWUp4swrMItg1HKKyd6oFghB5pk5D8MVnYlX351xC8gxrJBbiDT2WFk6yIiDlNzfhr1AmwrZTZBbznFl3yI7HGdZt89s_yvILoXznduIKJ5VQ2_LIRb3ERNIMbbyckfQ8SujJqwi-VqCC1vUdwfDWDVDURvi8kgiwzUHUDbyt-qfb2__fuFuHnxnMStk4PR3Y4F-guH8-EuVnQvcCAkNtGqTy5Ov-g" />
                            </div>
                            <div className="flex-1 min-w-0 hover:text-primary">
                                <p className="text-sm font-bold truncate">GourmetGuy</p>
                                <p className="text-xs text-slate-500 truncate">Street Food Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <section className="flex-1 flex flex-col md:flex-row min-w-0 overflow-hidden mt-2">
                <div className="flex-1 overflow-y-auto dark:bg-black/20 p-4 md:p-6 snap-y snap-mandatory scroll-smooth">
                   
                    <SearchBar placeHolder="Search reels, creators, or food tags..."/>

                    <ReelCard />
                    <ReelCard />

                </div>
                <div className="mr-10 mt-6 hidden xl:flex w-[380px] flex-col rounded-2xl border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark overflow-y-auto sticky top-[0px] h-min">
                    
                    <div className="p-6 rounded-2xl bg-primary text-white">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-white">tag</span>
                            Popular Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm font-medium hover:bg-white hover:text-primary cursor-pointer transition-colors">#VeganLife</span>
                            <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm font-medium hover:bg-white hover:text-primary cursor-pointer transition-colors">#AirFryer</span>
                            <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm font-medium hover:bg-white hover:text-primary cursor-pointer transition-colors">#MealPrep</span>
                            <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm font-medium hover:bg-white hover:text-primary cursor-pointer transition-colors">#Baking</span>
                            <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm font-medium hover:bg-white hover:text-primary cursor-pointer transition-colors">#QuickDinner</span>
                            <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm font-medium hover:bg-white hover:text-primary cursor-pointer transition-colors">#ItalianFood</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}