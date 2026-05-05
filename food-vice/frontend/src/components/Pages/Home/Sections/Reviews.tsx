import { useState, useEffect } from "react";
import type { Review } from "../../RestaurantDetail/ReviewTile";
import { ReviewCard } from "../Cards/ReviewCard";

export function Reviews() {

    const [reviews, setReviews] = useState<Review[] | null>(null)
    
        async function fetchReviews() {
            try {
                const res = await fetch(
                    `http://localhost:3000/reviews/recent/reviews`,
                    { credentials: "include" }
                );
                if (res.ok) {
                    const reviews = await res.json();
                    setReviews(reviews)
                    
                }
                else{
                    throw new Error('Failed to load reviews')
                }
            } catch (error) {
                console.error(error);
            }
        }
        
    
        useEffect(() => {
            fetchReviews()
        }, [])
    
        
    return (
        <section className="px-4">
            <h3 className="text-2xl font-bold mb-8">Recent Reviews</h3>
            <div className="max-w-2xl mx-auto space-y-8">

                {
                    reviews && reviews.map((review)=>{
                        return <ReviewCard key={review._id} review={review} setReviews={setReviews}/>
                    })
                }
                
                
            </div>
        </section>
    )
}