import { CommunityGuidelines } from "../CommunityGuidelinesCard"
import { AddCommentCard } from "./AddCommentCard"
import { RepliesCard } from "./RepliesCard"
import { useCallback, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"
import axios from "axios"
import { useAuth } from "../../../../context/AuthContext"
import { likeThread, dislikeThread, type ThreadComment } from "../../../../apis/community"

interface ThreadDetailData {
    _id: string;
    title: string;
    content: string;
    uid: {
        _id: string;
        name: string;
        profilePhoto?: string;
    };
    media: {
        _id: string,
        url: string
    }[];
    communityId: string;
    likes?: string[];
    dislikes?: string[];
    views?: number;
    createdAt: string;
}

interface CommunityData {
    _id: string;
    name: string;
    description: string;
    guidelines?: string[];
}

export function ThreadDetailPage() {
    const { id, threadId } = useParams()
    const navigate = useNavigate()
    const [thread, setThread] = useState<ThreadDetailData | null>(null)
    const [community, setCommunity] = useState<CommunityData | null>(null)
    const [comments, setComments] = useState<ThreadComment[]>([])
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()

    const fetchThreadDetails = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:3000/thread/${threadId}`, { withCredentials: true })
        
            setThread(response.data)
        } catch (error) {
            console.error('Error fetching thread details:', error)
        }
    }, [threadId])

    const fetchCommunityDetails = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:3000/community/${id}`, { withCredentials: true })
            setCommunity(response.data)
        } catch (error) {
            console.error('Error fetching community details:', error)
        }
    }, [id])

    const fetchComments = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:3000/thread/${threadId}/comments`, { withCredentials: true })
            setComments(response.data)
        } catch (error) {
            console.error('Error fetching comments:', error)
        } finally {
            setLoading(false)
        }
    }, [threadId])

    useEffect(() => {
        if (threadId) {
            fetchThreadDetails()
            fetchComments()
        }
        if (id) {
            fetchCommunityDetails()
        }
    }, [id, threadId, fetchThreadDetails, fetchCommunityDetails, fetchComments])


    const handleLike = async () => {
        if (!threadId) return
        try {
            await likeThread(threadId)
            fetchThreadDetails()
        } catch (error) {
            console.error('Error liking thread:', error)
        }
    }

    const handleDislike = async () => {
        if (!threadId) return
        try {
            await dislikeThread(threadId)
            fetchThreadDetails()
        } catch (error) {
            console.error('Error disliking thread:', error)
        }
    }

    if (loading) return <div className="p-10 text-center">Loading Thread...</div>
    if (!thread) return <div className="p-10 text-center text-red-500">Thread not found</div>

    return (
        <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-4 md:px-10 lg:px-40 py-8 lg:flex-row gap-8">
           
            <div className="flex-1 space-y-8">
                
                <article
                    className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="flex gap-6">

                        <div className="hidden sm:flex flex-col items-center gap-2 pt-2">
                            <button
                                className={`p-1 rounded transition-colors ${thread.likes?.includes(user?.userId ?? '') ? 'bg-primary/20 text-primary' : 'text-slate-400 hover:text-primary hover:bg-primary/10'}`}
                                onClick={handleLike}
                            >
                                <span className="material-symbols-outlined text-3xl leading-none">arrow_drop_up</span>
                            </button>
                            <span className="font-bold text-lg text-slate-900 dark:text-slate-100">{(thread.likes?.length || 0) - (thread.dislikes?.length || 0)}</span>
                            <button
                                className={`p-1 rounded transition-colors ${thread.dislikes?.includes(user?.userId ?? '') ? 'bg-red-500/20 text-red-500' : 'text-slate-400 hover:text-red-500 hover:bg-red-500/10'}`}
                                onClick={handleDislike}>
                                <span className="material-symbols-outlined text-3xl leading-none">arrow_drop_down</span>
                            </button>
                        </div>
                        <div className="flex-1">

                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">


                                    <div className="w-10 h-10 rounded-full overflow-hidden" data-alt="Reviewer profile picture">
                                        <img className="w-full h-full object-cover" src={thread.uid.profilePhoto} />
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-slate-900 dark:text-slate-100">{thread.uid?.name || 'Anonymous'}</span>
                                        </div>
                                        <p className="text-xs text-slate-500">Posted in {community?.name} • {new Date(thread.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>

                            <h1
                                className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 dark:text-white mb-4">
                                {thread.title}
                            </h1>
                            <div
                                className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed mb-6 space-y-4">
                                <p>{thread.content}</p>
                            </div>

                            <div
                                className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-6">
                                    {/* <div className="flex items-center gap-1.5 text-slate-500">
                                        <span className="material-symbols-outlined text-xl">visibility</span>
                                        <span className="text-sm">{thread.views}</span>
                                    </div> */}
                                    <div className="flex items-center gap-1.5 text-slate-500">
                                        <span className="material-symbols-outlined text-xl">chat_bubble_outline</span>
                                        <span className="text-sm">{comments.length} Comments</span>
                                    </div>
                                    <button
                                        className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-xl">share</span>
                                        <span className="text-sm">Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {thread.media && thread.media.length > 0 && <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden shadow-xl mb-8">
                    <img

                        className="w-full h-full object-cover"
                        src={thread.media[0].url}
                    />
                </div>}

                <AddCommentCard threadId={threadId!} onCommentAdded={fetchComments} />

                <RepliesCard comments={comments} onCommentsUpdated={fetchComments} />

            </div>

            <aside className="w-full lg:w-80 space-y-6">

                {community && (
                    <div className="bg-primary rounded-xl p-6 text-white shadow-lg shadow-primary/20">
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined">groups</span>
                            {community.name}
                        </h3>
                        <p className="text-primary-100 text-sm leading-normal mb-4">
                            {community.description}
                        </p>
                        <button
                            className="w-full py-2 bg-white text-primary font-bold rounded-lg text-sm hover:bg-slate-100 transition-colors"
                            onClick={() => navigate(`/community/${community._id}`)}
                        >
                            View Community
                        </button>
                    </div>
                )}

                <CommunityGuidelines guidelines={community?.guidelines || []} />

            </aside>
        </main>
    )
}