import { useState } from "react"
import axios from "axios"

export function AddCommentCard({ threadId, onCommentAdded }: { threadId: string, onCommentAdded: () => void }) {
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        if (!content.trim()) return
        setLoading(true)
        try {
            await axios.post(`http://localhost:3000/thread/${threadId}/comment`, { content }, { withCredentials: true })
            setContent('')
            onCommentAdded()
        } catch (error) {
            console.error('Error posting comment:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Add a comment</h3>
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div
                    className="flex items-center gap-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span
                        className="material-symbols-outlined text-lg">format_bold</span></button>
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span
                        className="material-symbols-outlined text-lg">format_italic</span></button>
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span
                        className="material-symbols-outlined text-lg">link</span></button>
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span
                        className="material-symbols-outlined text-lg">format_list_bulleted</span></button>
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span
                        className="material-symbols-outlined text-lg">image</span></button>
                </div>
                <textarea
                    className="w-full p-4 bg-transparent border-none focus:ring-0 min-h-[120px] text-slate-900 dark:text-slate-100 placeholder-slate-400"
                    placeholder="What are your thoughts?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
            <div className="flex justify-end mt-4">
                <button
                    className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 disabled:opacity-50"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? 'Posting...' : 'Post Comment'}
                </button>
            </div>
        </div>
    )
}