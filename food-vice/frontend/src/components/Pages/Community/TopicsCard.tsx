import type { SelectedTopic } from "./CommunitiesPage";
import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import { getTopics, type Topic } from "../../../apis/community";

export function TopicsCard({selectedTopic: selectedTopic,setSelectedTopic: setSelectedTopic}:{selectedTopic:SelectedTopic,setSelectedTopic:Dispatch<SetStateAction<SelectedTopic>>}) {
    
    const [topics, setTopics] = useState<Topic[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const fetchedTopics = await getTopics();
                setTopics(fetchedTopics);
            } catch (error) {
                console.error('Error fetching topics:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopics();
    }, []);

    if (loading) {
        return (
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">auto_stories</span>Topics
                </h3>
                <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_stories</span>Topics
            </h3>
            <div className="flex flex-col gap-1">
                <div className={`flex items-center justify-between p-2 rounded-lg ${selectedTopic==='all' ? "bg-primary/10 text-primary" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"} font-medium group cursor-pointer`}
                    onClick={()=>setSelectedTopic('all')}>
                    <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl">forum</span>
                        All Topics</span>
            
                </div>
                {topics.map((topic) => (
                    <div key={topic._id} className={`flex items-center justify-between p-2 rounded-lg ${selectedTopic===topic._id ? "bg-primary/10 text-primary" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"} font-medium group cursor-pointer`}
                        onClick={()=>setSelectedTopic(topic._id)}>
                        <span className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-xl">
                                {topic.name === 'Recipes' ? 'menu_book' :
                                 topic.name === 'Restaurant Reviews' ? 'star' :
                                 topic.name === 'Discussions' ? 'chat' :
                                 topic.name === 'Street Food' ? 'map' :
                                 topic.name === 'Cooking Tips' ? 'lightbulb' : 'topic'}
                            </span>
                            {topic.name}
                        </span>
                        
                    </div>
                ))}
               
            </div>
        </div>
    )
}