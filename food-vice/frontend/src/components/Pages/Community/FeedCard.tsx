import { useNavigate } from "react-router"
import axios from "axios"

interface Thread {
    _id: string;
    title: string;
    content: string;
    uid: {
        _id: string;
        name: string;
        profilePicture?: string;
    };
    likes: string[];
    createdAt: string;
    communityId: string;
}

export function FeedCard({ thread, onUpdate }: { thread?: Thread, onUpdate?: () => void }) {
    const navigate = useNavigate()

    if (!thread) {
        // Fallback or placeholder if no thread is passed (for initial UI compatibility)
        return (
            <article className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm opacity-50 italic">
                No thread data available
            </article>
        )
    }

    function goToDetailsPage() {
        navigate(`/community/${thread.communityId}/${thread._id}`)
    }

    const handleLike = async () => {
        try {
            await axios.post(`http://localhost:3000/thread/${thread._id}/like`, {}, { withCredentials: true })
            if (onUpdate) onUpdate()
        } catch (error) {
            console.error('Error liking thread:', error)
        }
    }

    return (
        <article
            className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-6">
                <div className="flex flex-col items-center gap-1">
                    <button 
                        className="p-1 rounded hover:bg-primary/10 text-primary transition-colors"
                        onClick={handleLike}
                    >
                        <span className="material-symbols-outlined">expand_less</span>
                    </button>
                    <span className="text-base font-bold">{thread.likes?.length || 0}</span>
                    <button className="p-1 rounded hover:bg-cyan-500/10 text-cyan-500 transition-colors">
                        <span className="material-symbols-outlined">expand_more</span>
                    </button>
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="size-8 rounded-full bg-cover bg-gray-200" 
                            style={{backgroundImage: thread.uid?.profilePicture ? `url('${thread.uid.profilePicture}')` : "none"}}>
                            {!thread.uid?.profilePicture && <span className="material-symbols-outlined text-slate-400 m-auto">person</span>}
                        </div>
                        <span className="text-sm font-semibold">@{thread.uid?.name || 'anonymous'}</span>
                        <span className="text-xs text-slate-500">• {new Date(thread.createdAt).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 hover:text-primary cursor-pointer transition-colors" onClick={goToDetailsPage}>
                        {thread.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                        {thread.content}
                    </p>
                    <div className="flex items-center gap-6">
                        <button
                            className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm font-medium transition-colors" 
                            onClick={goToDetailsPage}
                        >
                            <span className="material-symbols-outlined text-lg">chat_bubble_outline</span> Comments
                        </button>
                        <button
                            className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm font-medium transition-colors">
                            <span className="material-symbols-outlined text-lg">share</span> Share
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}