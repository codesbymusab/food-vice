import { useNavigate } from "react-router"

export function CreateCommunityPage() {

    const navigate=useNavigate()
    return (
        <main className="pt-20 pb-20 px-4 min-h-screen">
            <div className="max-w-3xl mx-auto bg-slate-800 text-white p-8 rounded-xl">
                <header className="mb-12 text-center">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight text-on-surface mb-4">
                        Start your own <span className="text-primary">Community.</span>
                    </h1>
                    <p className="text-on-surface-variant text-lg underline underline-offset-2">Build a space to connect, share, and feast.</p>
                </header>
                <div className="bg-slate-50 rounded-xl shadow-2xl shadow-orange-500/5 p-8 md:p-12 border-2 border-gray-200">
                    <form className="space-y-10 text-black">
                        <section className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="p-2 bg-accent-cyan/20 text-accent-cyan text-secondary rounded-xl">
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1;"}}>groups</span>
                                </span>
                                <h2 className="text-2xl font-bold tracking-tight">Identity</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">Community Name</label>
                                    <input className="w-full px-6 py-4 rounded-xl border-outline bg-gray-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. Midnight Ramen Society" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">Category</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none px-6 py-4 rounded-xl border-outline bg-gray-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none">
                                            <option>Recpies</option>
                                            <option>Restaurant Reviws</option>
                                            <option>Discussions</option>
                                            <option>Street Food</option>
                                            <option>Cooking Tips</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-6 top-4 text-on-surface-variant pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">Description</label>
                                <textarea className="w-full px-6 py-4 rounded-xl border-outline bg-gray-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none" placeholder="Tell the world what your collective is about..." rows={4}></textarea>
                            </div>
                        </section>
                        <section className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="p-2 bg-accent-cyan/20 text-accent-cyan text-secondary rounded-xl">
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1;"}}>image</span>
                                </span>
                                <h2 className="text-2xl font-bold tracking-tight">Visuals</h2>
                            </div>
                            <div className="group relative w-full h-56 rounded-xl border-2 border-dashed border-outline-variant hover:border-primary transition-colors cursor-pointer overflow-hidden flex flex-col items-center justify-center bg-gray-100">
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                    <img className="w-full h-full object-cover" data-alt="vibrant overhead shot of diverse gourmet food spread on a rustic wooden table with soft morning lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmYG0bVKf_mclqimLqSr6rZtJS4UoFX9tJ-Vro7BqKdmx9jBFPPOO2DRpxN7gdjB72_eniNp_sUQPxq4V-UQBNOrnQlzo3ftqm0Jj5Sf9zEHlPApapd-rWsAHREzkweiTw_N_WvscKo9qp4O25UDCACwS_txbuqFQj1NGDpk-VtMP_wUjh_PhLQlBEGKgjLOeBMdo-7jfYUpxalfn0x8m8_EhwUv2ZIM0DcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq" />
                                </div>
                                <div className="relative z-10 text-center">
                                    <span className="material-symbols-outlined text-4xl text-primary mb-2">cloud_upload</span>
                                    <p className="text-on-surface font-bold">Upload Cover Photo</p>
                                    <p className="text-xs text-on-surface-variant">Recommended size: 1200 x 480px</p>
                                </div>
                            </div>
                        </section>
                        <section className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="p-2 bg-accent-cyan/20 text-accent-cyan text-secondary rounded-xl">
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1;"}}>gavel</span>
                                </span>
                                <h2 className="text-2xl font-bold tracking-tight">Community Guidelines</h2>
                            </div>
                            <div className="p-6 bg-surface-container rounded-xl space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex-grow space-y-2">
                                        <input className="w-full px-6 py-3 rounded-xl border-outline bg-gray-100 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Rule #1: Be respectful to all chefs..." type="text" />
                                    </div>
                                    <button className="bg-accent-cyan text-white hover:shadow-lg transition-all active:scale-95 rounded-xl py-3 px-4" type="button">
                                        <span className="material-symbols-outlined m-auto">add</span>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-outline shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="text-primary font-black">01</span>
                                        <span className="text-sm font-medium">Authenticity over aesthetics: Share real kitchen moments.</span>
                                    </div>
                                    <button className="text-error hover:bg-red-100 px-2 py-1 rounded-xl transition-colors " type="button">
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                </div>
                            </div>
                        </section>
                         <div className="pt-4 flex gap-3">
                            <button className="w-full py-4 rounded-xl bg-primary text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all" type="submit">
                                Create
                            </button>
                            <button className="w-full py-4 rounded-xl border-2 border-stone-100 text-stone-500 font-black uppercase tracking-widest text-xs hover:bg-red-200/70 active:scale-95 hover:scale-[1.02] transition-all" onClick={()=>navigate('/community')}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}