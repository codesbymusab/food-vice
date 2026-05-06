import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { CommunityGuidelines } from "../CommunityGuidelinesCard"
import { CommunityCover } from "../CommunityCover"
import axios from "axios"

export function CreateThreadPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [community, setCommunity] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (id) {
            fetchCommunityDetails()
        }
    }, [id])

    const fetchCommunityDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/community/${id}`, { withCredentials: true })
            setCommunity(response.data)
        } catch (error) {
            console.error('Error fetching community details:', error)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post('http://localhost:3000/thread', {
                title,
                content,
                communityId: id
            }, { withCredentials: true })
            navigate(`/community/${id}`)
        } catch (error) {
            console.error('Error creating thread:', error)
            alert('Failed to create thread')
        } finally {
            setLoading(false)
        }
    }

    if (!community) return <div className="p-10 text-center">Loading Community...</div>

    return (
        <main className="flex-grow px-4 md:px-10 py-8 max-w-7xl mx-auto">
            <CommunityCover community={community} />

            <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                <div className="bg-white lg:col-span-8">
                    <div className="bg-surface rounded-xl shadow-2xl shadow-orange-500/5 p-8 md:p-12 border border-outline-variant/30">
                        <div className="mb-10">
                            <span className="text-accent-cyan font-bold uppercase tracking-widest text-xs">New Thread</span>
                            <h1 className="text-4xl font-black text-on-surface mt-2 tracking-tight">Share Your Culinary Find</h1>
                            <p className="text-on-surface-variant mt-2 text-lg">The Urban Epicurean thrives on shared secrets. What's on the menu today?</p>
                        </div>
                        <form className="space-y-10" onSubmit={handleSubmit}>

                            <div className="space-y-2">
                                <div className="flex items-center gap-3 mb-2 ml-4">
                                    <span className="p-2 bg-accent-cyan/20 text-accent-cyan rounded-full shrink-0 flex items-center justify-center w-10 h-10">
                                        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1;" }}>title</span>
                                    </span>
                                    <label className="text-xl font-bold tracking-tight">Title</label>
                                </div>
                                <input 
                                    className="w-full px-6 py-4 rounded-xl border-outline bg-gray-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                                    placeholder="e.g. The best hidden ramen spot in Neo-Tokyo..." 
                                    type="text" 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="">
                                <div className="flex justify-between items-center  mb-2">
                                    <div className="flex items-center gap-3 mb-2 ml-4">
                                        <span className="p-2 bg-accent-cyan/20 text-accent-cyan rounded-full shrink-0 flex items-center justify-center w-10 h-10">
                                            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1;" }}>edit_note</span>
                                        </span>
                                        <label className="text-xl font-bold tracking-tight">Details</label>
                                    </div>
                                    <div className="flex gap-2 text-stone-400">
                                        <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">format_bold</span>
                                        <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">format_italic</span>
                                        <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">link</span>
                                        <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">format_list_bulleted</span>
                                        <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">image</span>
                                    </div>
                                </div>
                                <textarea 
                                    className="w-full px-6 py-4 rounded-xl border-outline bg-gray-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none" 
                                    placeholder="Describe the atmosphere, the seasoning, the soul of the dish..." 
                                    rows={6}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-3 mb-2 ml-4">
                                    <span className="p-2 bg-accent-cyan/20 text-accent-cyan rounded-full shrink-0 flex items-center justify-center w-10 h-10">
                                        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1;" }}>image</span>
                                    </span>
                                    <label className="text-xl font-bold tracking-tight">Visual Feast (Optional)</label>
                                </div>
                                <div className="group relative w-full h-56 rounded-xl border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer overflow-hidden flex flex-col items-center justify-center bg-gray-100">
                                    <div className="relative z-10 text-center">
                                        <span className="material-symbols-outlined text-4xl text-primary mb-2">add_a_photo</span>
                                        <p className="text-on-surface font-bold uppercase tracking-widest text-sm">Drop images here or click to browse</p>
                                        <p className="text-xs text-on-surface-variant mt-1">Supports High-res JPG, PNG (Max 10MB)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 flex gap-3">
                                <button 
                                    className="w-full py-4 rounded-xl bg-primary text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50" 
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? 'Publishing...' : 'Publish'}
                                </button>
                                <button 
                                    className="w-full py-4 rounded-xl border-2 border-stone-100 text-stone-500 font-black uppercase tracking-widest text-xs hover:bg-red-200/70 active:scale-95 hover:scale-[1.02] transition-all" 
                                    type="button"
                                    onClick={() => navigate(`/community/${id}`)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="lg:col-span-4 space-y-8 md:mr-12">
                    <CommunityGuidelines guidelines={community.guidelines} />
                </div>
            </div>
        </main>
    )
}
