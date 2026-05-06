import { CommunitiesCard } from "./CommunitiesCard";
import { FeedCard } from "./FeedCard";
import { TopicsCard } from "./TopicsCard";
import { SearchBar } from "../../SearchBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export type SelectedTopic = 'recpie' | 'review' | 'discussion' | 'street-food' | 'cooking-tip'

export function CommunitiesPage() {
    const [selectedTopic, setSelectedTopic] = useState<SelectedTopic>('recpie')
    const [searchQuery, setSearchQuery] = useState('')
    const [joinedCommunities, setJoinedCommunities] = useState([])
    const [recommendedCommunities, setRecommendedCommunities] = useState([])
    const [recommendedThreads, setRecommendedThreads] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchJoinedCommunities()
        fetchRecommendedCommunities()
        fetchRecommendedThreads()
    }, [])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchRecommendedCommunities()
        }, 300)

        return () => clearTimeout(delayDebounceFn)
    }, [searchQuery])

    const fetchJoinedCommunities = async () => {
        try {
            const response = await axios.get('http://localhost:3000/community/joined', { withCredentials: true })
            setJoinedCommunities(response.data)
        } catch (error) {
            console.error('Error fetching joined communities:', error)
        }
    }

    const fetchRecommendedCommunities = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/community?name=${searchQuery}`, { withCredentials: true })
            setRecommendedCommunities(response.data)
        } catch (error) {
            console.error('Error fetching recommended communities:', error)
        }
    }

    const fetchRecommendedThreads = async () => {
        try {
            // For now, let's just fetch some threads. 
            // In a real app, this would be a recommendation engine endpoint.
            const response = await axios.get('http://localhost:3000/thread/community/all', { withCredentials: true })
            setRecommendedThreads(response.data)
        } catch (error) {
            console.error('Error fetching recommended threads:', error)
        }
    }

    return (
        <main className="flex-1 px-4 md:px-10 py-8 max-w-7xl mx-auto">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                <aside className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
                    <button
                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] hover:border-slate-800 hover:brightness-110 transition-all shadow-lg shadow-primary/20" 
                        onClick={() => navigate('create')}
                    >
                        <span className="material-symbols-outlined">add_circle</span>
                        <span>Start a Community</span>
                    </button>

                    <TopicsCard selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
                    
                    <CommunitiesCard title="Joined Communities" communities={joinedCommunities} />
                    <CommunitiesCard title="Recommendations" communities={recommendedCommunities} />

                </aside>

                <div className="lg:col-span-9 order-1 lg:order-2 flex flex-col gap-6">
                    <SearchBar 
                        placeHolder="Search for communities..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <div className="flex flex-col gap-4">
                        {/* Recommendation cards in community section will actually contain threads and communities */}
                        {recommendedThreads.length === 0 && <p className="text-center py-10 text-slate-500 italic">No threads found</p>}
                        {recommendedThreads.map((thread: any) => (
                            <FeedCard key={thread._id} thread={thread} onUpdate={fetchRecommendedThreads} />
                        ))}
                    </div>

                    <div className="flex justify-center pt-4">
                        <button
                            className="px-8 py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
                            Load More Discussions
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
