import { useNavigate } from "react-router"

export function LatestDiscussion() {
    const navigte=useNavigate()
    return (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">forum</span> Latest Discussions
                </h3>
                <button className="text-xs font-bold text-slate-400 uppercase hover:text-primary" onClick={()=>navigte('/community')}>View All</button>
            </div>
            <div className="space-y-6">
                <div className="group cursor-pointer border-b border-slate-100 dark:border-slate-700 pb-4" onClick={()=>navigte('/community/name/1')}>
                    <h5 className="font-bold group-hover:text-primary transition-colors">Best pizza place for large groups in Brooklyn?</h5>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-1">Looking for a place that can seat 15 people without a 3-month lead time...</p>
                    <div className="mt-2 flex items-center gap-4 text-xs font-bold text-slate-400">
                        <span>24 replies</span>
                        <span>•</span>
                        <span>2 hours ago</span>
                    </div>
                </div>
                <div className="group cursor-pointer border-b border-slate-100 dark:border-slate-700 pb-4" onClick={()=>navigte('/community/name/1')}>
                    <h5 className="font-bold group-hover:text-primary transition-colors">Underrated ramen spots in the city?</h5>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-1">Everyone knows Ippudo, but where are the hidden gems?</p>
                    <div className="mt-2 flex items-center gap-4 text-xs font-bold text-slate-400">
                        <span>156 replies</span>
                        <span>•</span>
                        <span>5 hours ago</span>
                    </div>
                </div>
                <div className="group cursor-pointer border-b border-slate-100 dark:border-slate-700 pb-4" onClick={()=>navigte('/community/name/1')}>
                    <h5 className="font-bold group-hover:text-primary transition-colors">What is the secret to a perfect sourdough?</h5>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-1">I've been trying to get that perfect open crumb for months now...</p>
                    <div className="mt-2 flex items-center gap-4 text-xs font-bold text-slate-400">
                        <span>89 replies</span>
                        <span>•</span>
                        <span>1 day ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}