import { ReviewCard } from "../Cards/ReviewCard";

export function Reviews() {
    return (
        <section className="px-4 mb-16">
            <h3 className="text-2xl font-bold mb-8">Recent Reviews</h3>
            <div className="max-w-2xl mx-auto space-y-8">

                <ReviewCard />
                <ReviewCard />
                <div className="flex justify-center items-center">
                    <a className="text-primary font-bold text-md hover:text-accent-cyan underline mx-auto" href="#">View All</a>
                </div>
                
                
            </div>
        </section>
    )
}