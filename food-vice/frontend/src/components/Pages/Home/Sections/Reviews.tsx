import { useState, useEffect, useCallback } from "react";
import type { Review } from "../../RestaurantDetail/ReviewTile";
import { ReviewCard } from "../Cards/ReviewCard";
import { ErrorScreen, SkeletonList } from "../../../Shared/Feedback";
import { fetchRecentReviews } from "../../../../apis/reviews";
import { useAuth } from "../../../../context/AuthContext";

export function Reviews() {

    const [reviews, setReviews] = useState<Review[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const {user}=useAuth()
    const loadReviews = useCallback(async () => {
            if (!user) return;
            setLoading(true)
            setError(null)
            try {
                const reviewsData = await fetchRecentReviews({userId:user!.userId});
                console.log(reviewsData)
                setReviews(reviewsData ?? null);
            } catch (error) {
                console.error(error);
                setError("Unable to load recent reviews. Please try again.");
            } finally {
                setLoading(false)
            }
        }, [user])
        
    
        useEffect(() => {
            if (!user) return;
            loadReviews()
        }, [loadReviews, user])
    
        
    return (
        <section className="px-4">
            <h3 className="text-2xl font-bold mb-8">Recent Reviews</h3>
            <div className="max-w-2xl mx-auto space-y-8">

                {
                loading ? (
                    <SkeletonList count={3} />
                ) : error ? (
                    <ErrorScreen title="Unable to load reviews" message={error} onRetry={loadReviews} />
                ) : reviews && reviews.length > 0 ? (
                    reviews.map((review)=>{
                        return <ReviewCard key={review._id} review={review} setReviews={setReviews}/>
                    })
                ) : (
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                        No reviews are available at the moment.
                    </div>
                )
                
            }
                
                
            </div>
        </section>
    )
}