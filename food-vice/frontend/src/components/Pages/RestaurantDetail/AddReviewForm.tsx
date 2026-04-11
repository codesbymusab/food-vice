export function AddReviewForm({setShowReviewForm}:{setShowReviewForm:React.Dispatch<React.SetStateAction<boolean>>}) {
    
    
    return (
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-outline/50">
            <div className="mb-10">
                <h2 className="text-xl font-black text-tertiary mb-2 font-headline tracking-tight uppercase">Write a Review</h2>
                <p className="text-on-surface-variant">Share your culinary journey at L'Ambroisie Moderne with the community.</p>
            </div>
            <form className="space-y-12">
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface-container-low p-8 rounded-2xl">
                    
                    <div className="space-y-3">
                        <label className="block text-xs font-black uppercase tracking-widest text-on-surface-variant">Food Quality</label>
                        <div className="flex gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-zinc-300 text-3xl cursor-pointer" data-icon="star">star</span>
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <label className="block text-xs font-black uppercase tracking-widest text-on-surface-variant">Service</label>
                        <div className="flex gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-zinc-300 text-3xl cursor-pointer" data-icon="star">star</span>
                            <span className="material-symbols-outlined text-zinc-300 text-3xl cursor-pointer" data-icon="star">star</span>
                        </div>
                    </div>
                   
                    <div className="space-y-3">
                        <label className="block text-xs font-black uppercase tracking-widest text-on-surface-variant">Ambiance</label>
                        <div className="flex gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <label className="block text-xs font-black uppercase tracking-widest text-on-surface-variant">Value for Money</label>
                        <div className="flex gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1;"}}>star</span>
                            <span className="material-symbols-outlined text-zinc-300 text-3xl cursor-pointer" data-icon="star">star</span>
                            <span className="material-symbols-outlined text-zinc-300 text-3xl cursor-pointer" data-icon="star">star</span>
                            <span className="material-symbols-outlined text-zinc-300 text-3xl cursor-pointer" data-icon="star">star</span>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <label className="block text-sm font-black uppercase tracking-widest text-tertiary">The Detailed Review</label>
                    <div className="relative">
                        <textarea className="w-full rounded-2xl border-outline ring-2 ring-gray-200 bg-surface-container-low p-6 text-on-surface focus:border-primary focus:ring-4 focus:ring-primary/35 transition-all outline-none resize-none font-body" placeholder="Describe your dining experience, the signature dishes, and the atmosphere..." rows={6}></textarea>
                        <div className="absolute bottom-4 right-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Min 150 characters</div>
                    </div>
                </div>
             
                <div className="space-y-4">
                    <label className="block text-sm font-black uppercase tracking-widest text-tertiary">Photography</label>
                    <div className="border-4 border-dashed border-outline-variant rounded-2xl p-12 flex flex-col items-center justify-center bg-white hover:bg-surface-container-low transition-colors cursor-pointer group">
                        <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-secondary text-4xl" data-icon="add_a_photo">add_a_photo</span>
                        </div>
                        <h4 className="text-xl font-bold text-tertiary mb-1">Drag and drop your photos</h4>
                        <p className="text-on-surface-variant text-sm mb-6">Or click to browse from your device</p>
                        <div className="flex gap-4">
                            <div className="bg-surface-container-high px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant">JPG, PNG, WebP</div>
                            <div className="bg-surface-container-high px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant">Max 10MB each</div>
                        </div>
                    </div>
                </div>
          
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full py-4 rounded-xl bg-primary text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                Submit Review
                            </button>
                            <button className="w-full py-4 rounded-xl border-2 border-stone-100 text-stone-500 font-black uppercase tracking-widest text-xs hover:bg-red-200/70 transition-all" onClick={()=>setShowReviewForm((prev)=>!prev)}>
                                Cancel
                            </button>
                </div>
            </form>
        </div>
    )
}