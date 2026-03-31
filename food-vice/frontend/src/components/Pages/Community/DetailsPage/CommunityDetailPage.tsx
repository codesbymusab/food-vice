import { AddCommentCard } from "./AddCommentCard"
import { RepliesCard } from "./RepliesCard"

export function CommunityDetailPage(){
    return(
        <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-4 md:px-10 lg:px-40 py-8 lg:flex-row gap-8">
            
            <div className="flex-1 space-y-8">
               
                <article
                    className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="flex gap-6">
                        
                        <div className="hidden sm:flex flex-col items-center gap-2 pt-2">
                            <button
                                className="p-1 rounded text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors">
                                <span className="material-symbols-outlined text-3xl leading-none">arrow_drop_up</span>
                            </button>
                            <span className="font-bold text-lg text-slate-900 dark:text-slate-100">1.2k</span>
                            <button
                                className="p-1 rounded text-slate-400 hover:text-blue-500 hover:bg-blue-500/10 transition-colors">
                                <span className="material-symbols-outlined text-3xl leading-none">arrow_drop_down</span>
                            </button>
                        </div>
                        <div className="flex-1">
                            
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20"
                                        data-alt="Avatar of Chef Julian profile picture"
                                        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfge_sKHwpfScZ6dTie3SjY73tCHrZQVw9Z-5JSSSnjDQJyA6MVeZMaAKrMnP0X-2EcaDhQTBjte8WZKhci6XVLdvnwLfd44-jOGLGE38SOlDDB62PnOdbLQoILzd3PnebG8Bej1obGU3O8EGRfxaBfmmuNi2R66vE6POf4Q6PAwMgmjezGTdjJgnBIeBGHPD3-NuIrikt28dY9AiQRfQzEEf7ckN6o1QTp1mp0z8XdvGYBB8xErBfksvp__cJ4bWUKIpzyn3hBds')"}}>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-slate-900 dark:text-slate-100">Chef
                                                Julian</span>
                                            <span
                                                className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tight">Expert</span>
                                        </div>
                                        <p className="text-xs text-slate-500">Posted in r/Nutrition • 4h ago</p>
                                    </div>
                                </div>
                                <button
                                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                                    <span>Follow</span>
                                </button>
                            </div>
                           
                            <h1
                                className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 dark:text-white mb-4">
                                Why fermented foods are the secret to gut health
                            </h1>
                            <div
                                className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed mb-6 space-y-4">
                                <p>I've been experimenting with homemade kimchi and kombucha for the last six months,
                                    and the changes in my energy levels are incredible. It's not just a trend; the
                                    probiotic diversity found in these foods significantly impacts the microbiome.</p>
                                <p>Has anyone else noticed a significant difference in their digestion after
                                    incorporating these into every meal? I've found that my afternoon energy slumps have
                                    almost completely vanished.</p>
                                <div
                                    className="w-full h-80 rounded-xl overflow-hidden my-6 border border-slate-200 dark:border-slate-800">
                                    <div className="w-full h-full bg-cover bg-center"
                                        data-alt="Vibrant array of fermented food jars like kimchi and pickles"
                                        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYEoX6StH3gkQlmDZLg887MTiAZ4WQJfrbUzI_PsaxsahQ-Qrydenq6WdydP25XDoZE_yUnGQQV96JHKC8foCNiEgbQntg_lr0tvrxUkpA1_XzTuSeVgjY-GtrUMk9lFnmqVdb6CCRT2mjlpIw0JTfo42GOSsNkoxrGzDqH-9tqf5Tu3YrFum9cxk-6AWzzuON4DFnLNRtb_jykA6KwkDX49D_9iOSsNgV_vQaxEHWkCAfmygywLrod9-hy5CK0F-_8ADi2JEB_kg')"}}>
                                    </div>
                                </div>
                                <p>Let's discuss the science and share some recipes! What are your go-to fermentation
                                    methods? Are you team Sauerkraut or team Kimchi?</p>
                            </div>
                          
                            <div
                                className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-1.5 text-slate-500">
                                        <span className="material-symbols-outlined text-xl">visibility</span>
                                        <span className="text-sm">24.5k</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-500">
                                        <span className="material-symbols-outlined text-xl">chat_bubble_outline</span>
                                        <span className="text-sm">158 Comments</span>
                                    </div>
                                    <button
                                        className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-xl">share</span>
                                        <span className="text-sm">Share</span>
                                    </button>
                                </div>
                                <button className="text-slate-400 hover:text-primary">
                                    <span className="material-symbols-outlined">bookmark_border</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
                
                <AddCommentCard />
                
                <RepliesCard />

            </div>
            
            <aside className="w-full lg:w-80 space-y-6">
               
                <div className="bg-primary rounded-xl p-6 text-white shadow-lg shadow-primary/20">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">groups</span>
                        r/Nutrition
                    </h3>
                    <p className="text-primary-100 text-sm leading-normal mb-4">
                        A community for sharing research-based nutrition information, diets, and metabolic health.
                    </p>
                    <div className="flex justify-between border-t border-white/20 pt-4 mb-4">
                        <div>
                            <p className="font-bold">450k</p>
                            <p className="text-[10px] uppercase tracking-wider opacity-80">Members</p>
                        </div>
                        <div>
                            <p className="font-bold">1.2k</p>
                            <p className="text-[10px] uppercase tracking-wider opacity-80">Online</p>
                        </div>
                    </div>
                    <button
                        className="w-full py-2 bg-white text-primary font-bold rounded-lg text-sm hover:bg-slate-100 transition-colors">Join
                        Community</button>
                </div>
                
                <div
                    className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <h3
                        className="font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
                        Related Discussions</h3>
                    <ul className="space-y-4">
                        <li className="group cursor-pointer">
                            <p
                                className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors line-clamp-2">
                                Best probiotics for people with lactose intolerance?</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] text-slate-400">85 comments • 12h ago</span>
                            </div>
                        </li>
                        <li className="group cursor-pointer">
                            <p
                                className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors line-clamp-2">
                                How to store homemade sauerkraut safely</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] text-slate-400">42 comments • 1d ago</span>
                            </div>
                        </li>
                        <li className="group cursor-pointer">
                            <p
                                className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors line-clamp-2">
                                Does cooking kill the probiotics in sourdough?</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] text-slate-400">128 comments • 2d ago</span>
                            </div>
                        </li>
                    </ul>
                    <button
                        className="w-full mt-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">View
                        All Related</button>
                </div>
              
                <div
                    className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">policy</span>
                        Community Guidelines
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-primary font-bold">1.</span>
                            <span>Be respectful and kind to others</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-primary font-bold">2.</span>
                            <span>No self-promotion or spamming</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-primary font-bold">3.</span>
                            <span>Cite sources for health claims</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-primary font-bold">4.</span>
                            <span>Stay on topic and keep it civil</span>
                        </li>
                    </ul>
                </div>
                
            </aside>
        </main>
    )
}