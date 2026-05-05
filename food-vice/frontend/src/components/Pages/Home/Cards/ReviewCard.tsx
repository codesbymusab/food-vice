import { useNavigate } from "react-router"
import type { Review } from "../../RestaurantDetail/ReviewTile"
import type { Dispatch, SetStateAction } from "react"
import { useAuth } from "../../../../context/AuthContext"

export function ReviewCard({ review, setReviews }: { review: Review, setReviews: Dispatch<SetStateAction<Review[] | null>> }) {
    
    const navigate = useNavigate()
    const {user} =useAuth()
    
        async function toggleLikeReview(
        userId: string,
        reviewId: string,
        currentLiked: boolean

    ) {

        setReviews(prev =>
            prev
                ? prev.map(r =>
                    r._id === reviewId ? { ...r, isLikedByUser: !currentLiked,likeCount: currentLiked ? r.likeCount-1 : r.likeCount+1 } : r
                )
                : prev
        );

        try {
            const res = await fetch("http://localhost:3000/like/review", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: userId, reviewId: reviewId }),
                credentials: "include",
            });

            if (!res.ok) {
                throw new Error("Failed to update like");
            }

            console.log(await res.json());
        } catch (err) {
            console.error(err);

            setReviews(prev =>
                prev
                    ? prev.map(r =>
                        r._id === reviewId ? { ...r, isLikedByUser: currentLiked, likeCount: currentLiked ? r.likeCount+1 : r.likeCount-1 } : r
                    )
                    : prev
            );
        }
    }
    
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow"  >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden" data-alt="Reviewer profile picture">
                        <img className="w-full h-full object-cover" src={review.user.profilePhoto} />
                    </div>
                    <div >
                        <h6 className="font-bold text-sm hover:text-accent-cyan cursor-pointer" onClick={()=>navigate(`/profile/1`)}>{review.user.name}</h6>
                        <p className="text-xs text-slate-500" onClick={()=>navigate('/restaurant/1')}>reviewed <span className="text-primary font-bold cursor-pointer hover:underline">The Burger House</span></p>
                    </div>
                </div>
                <div className="flex gap-0.5">
                    <span className="material-symbols-outlined text-sm text-primary fill-current">star</span>
                    <span className="material-symbols-outlined text-sm text-primary fill-current">star</span>
                    <span className="material-symbols-outlined text-sm text-primary fill-current">star</span>
                    <span className="material-symbols-outlined text-sm text-primary fill-current">star</span>
                    <span className="material-symbols-outlined text-sm text-slate-300">star</span>
                </div>
            </div>
            <div className="cursor-pointer" onClick={()=>navigate('/restaurant/1')}>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 ">
                    {review.text}
                </p>
                <div className="rounded-2xl overflow-hidden" data-alt="Close up photo of a gourmet burger">
                    {review.photos.map((photo) => {return <img key={photo._id} className="w-full h-64 object-cover" src={photo.url}/>})}
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-400">
                    <button className={`flex items-center gap-1 text-lg ${review.isLikedByUser ? 'text-primary hover:text-slate-500' : 'hover:text-primary text-slate-500'}  transition-colors`}
                    onClick={async () => await toggleLikeReview(user!.userId, review._id, review.isLikedByUser)}
                ><span className="material-symbols-outlined text-xl">thumb_up</span> {review.likeCount}</button>
                <button className="flex items-center gap-1 text-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">chat_bubble</span> 2</button>
                </div>
                <span className="text-xs text-slate-400">1 hour ago</span>
            </div>
        </div>
    )
}