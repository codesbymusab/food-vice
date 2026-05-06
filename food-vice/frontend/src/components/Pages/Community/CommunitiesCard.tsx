import { Link } from "react-router"

interface Community {
    _id: string;
    name: string;
}

export function CommunitiesCard({ title, communities }: { title: string, communities: Community[] }) {
    return (
        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">groups</span> {title}
            </h3>
            <div className="flex flex-col gap-4">
                {communities.length === 0 && <p className="text-xs text-slate-500 italic">No communities found</p>}
                {communities.map((community) => (
                    <Link key={community._id} className="group cursor-pointer flex items-center gap-3" to={`/community/${community._id}`}>
                        <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">groups</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-semibold group-hover:text-primary transition-colors">{community.name}</p>
                            <p className="text-[10px] text-slate-500">Member</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}