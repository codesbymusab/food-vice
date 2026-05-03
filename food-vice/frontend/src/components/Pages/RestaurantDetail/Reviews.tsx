import { useEffect, useState, type Dispatch } from "react"
import { type Review, ReviewTile } from "./ReviewTile"
import { useParams } from "react-router"

type ReviewProps = {
    
    userReview: Review[] | null,
    setUserReview: Dispatch<React.SetStateAction<Review[] | null>>,
}
export function Reviews({ userReview, setUserReview }:ReviewProps) {
    const params=useParams()
    
    const [reviews, setReviews] = useState<Review[] | null>(null)

    async function fetchReviews() {
        try {
            const res = await fetch(
                `http://localhost:3000/reviews/${params.id}`,
                { credentials: "include" }
            );
            if (res.ok) {
                const {reviews} = await res.json();
                console.log(reviews)
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
        <section className="lg:col-span-2 space-y-10 p-8 rounded-xl">

            {userReview &&
                (
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-6">Your Review</h3>

                        <div className="space-y-8 bg-white rounded-3xl p-4">
                            {

                                userReview?.map((review) => {
                                    return <ReviewTile key={review._id} review={review} setReviews={setUserReview} />
                                })

                            }


                        </div>
                    </div>
                )}

            <div className="flex items-center justify-between mb-6 ">

                <h3 className="text-xl font-bold">Reviews</h3>

            </div>


            {reviews &&  reviews!.length > 0 ? <div className="space-y-8 bg-white rounded-3xl p-4">
                {
                    reviews!.map((review) => {
                        return <ReviewTile key={review._id} review={review} setReviews={setReviews} />
                    })
                }


            </div>
                :
                !userReview && <div className="mt-24 flex text-xl justify-center items-center text-slate-600 font-bold">
                    Be the first to review this restaurant
                </div>
            }
        </section>
    )
}