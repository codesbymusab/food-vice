import type { SelectedTopic } from "./CommunityPage";

export function TopicsCard({selectedTopic: selectedTopic,setSelectedTopic: setSelectedTopic}:{selectedTopic:SelectedTopic,setSelectedTopic:React.Dispatch<React.SetStateAction<SelectedTopic>>}) {
    
    return (
        <div
            className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_stories</span>Topics
            </h3>
            <div className="flex flex-col gap-1">
                <div className={`flex items-center justify-between p-2 rounded-lg ${selectedTopic==='recpie' ? "bg-primary/10 text-primary" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"} font-medium group cursor-pointer`}
                    onClick={()=>setSelectedTopic('recpie')}>
                    <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl">menu_book</span>
                        Recipes</span>
                    <span className="text-xs opacity-60">2.4k</span>
                </div>
                <div className={`flex items-center justify-between p-2 rounded-lg ${selectedTopic==='review' ? "bg-primary/10 text-primary" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"} font-medium group cursor-pointer`}
                 onClick={()=>setSelectedTopic('review')}>
                    <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl">star</span>
                        Restaurant Reviews</span>
                    <span className="text-xs opacity-60">1.8k</span>
                </div>
                 <div className={`flex items-center justify-between p-2 rounded-lg ${selectedTopic==='discussion' ? "bg-primary/10 text-primary" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"} font-medium group cursor-pointer`}
                    onClick={()=>setSelectedTopic('discussion')}>
                    <span className="flex items-center gap-3"><span
                        className="material-symbols-outlined text-xl">chat</span> Discussions</span>
                    <span className="text-xs opacity-60">560</span>
                </div>
                <div className={`flex items-center justify-between p-2 rounded-lg ${selectedTopic==='street-food' ? "bg-primary/10 text-primary" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"} font-medium group cursor-pointer`}
                    onClick={()=>setSelectedTopic('street-food')}>
                    <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl">map</span>
                        Street Food</span>
                    <span className="text-xs opacity-60">942</span>
                </div>
                <div className={`flex items-center justify-between p-2 rounded-lg ${selectedTopic==='cooking-tip' ? "bg-primary/10 text-primary" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"} font-medium group cursor-pointer`}
                     onClick={()=>setSelectedTopic('cooking-tip')}>
                    <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl">lightbulb</span>
                        Cooking Tips</span>
                    <span className="text-xs opacity-60">1.1k</span>
                </div>
               
            </div>
        </div>

    )
}