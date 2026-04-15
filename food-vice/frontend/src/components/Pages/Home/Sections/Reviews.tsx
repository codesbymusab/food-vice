import { ReviewCard } from "../Cards/ReviewCard";

export function Reviews() {
    return (
        <section className="px-4">
            <h3 className="text-2xl font-bold mb-8">Recent Reviews</h3>
            <div className="max-w-2xl mx-auto space-y-8">

                <ReviewCard />
                <ReviewCard />
                
                
            </div>
        </section>
    )
}