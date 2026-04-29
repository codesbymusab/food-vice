
export type Review = {
    _id: string,
    text: string,
    createdAt: string,
    user: {
        username: string,
        name: string,
        profilePhoto?: string,
        level: number,
        reviewCount:number
    }
    photos: {
        _id: string,
        url: string
    }[],
    isLikedByUser:boolean 

}
export function ReviewTile({ review }: { review: Review }) {
    return (
        <div className="border-b-2 border-slate-200 dark:border-slate-800 pb-2 bg-white">
            <div className="flex items-center gap-4 mb-4">
                {review.user.profilePhoto && (<div className="size-12 rounded-full overflow-hidden bg-slate-200">
                    <img alt={review.user.username}
                        src={review.user.profilePhoto} />
                </div>
                )
                }
                <div>
                    <h4 className="font-bold">{review.user.name}</h4>
                    <p className="text-xs text-slate-500"><span className="text-primary font-semibold">Level {review.user.level} Foodie</span> • {review.user.reviewCount} reviews</p>
                </div>
                <div className="ml-auto flex text-primary text-sm">
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
                {review.text}
            </p>
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
                {
                    review.photos.map((photo) => {
                        return (
                            <img key={photo._id} className="mb-3 size-24 rounded-lg object-cover flex-shrink-0" 

                                src={photo.url} />

                        )
                    })

                }
            </div>
            <div className="flex items-center gap-4 text-slate-400">
                    <button className={`flex items-center gap-1 text-xs ${review.isLikedByUser ? 'text-primary hover:text-slate-500' : 'hover:text-primary' }  transition-colors`}><span className="material-symbols-outlined text-lg">thumb_up</span> 18</button>
                    <button className="flex items-center gap-1 text-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">chat_bubble</span> 2</button>
                </div>
        </div>
    )
}