export type Rating = {
    overallRating: number,
    foodRating: number,
    serviceRating: number,
    ambienceRating: number,
    valueRating: number,
    totalReviews: number

};

export function RatingSummaryCard({ rating }: { rating: Rating }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="text-center md:border-r border-slate-200 dark:border-slate-800 md:pr-12">
                <div className="text-5xl font-bold text-primary mb-1">{(rating!.overallRating / 2).toFixed(1)}</div>
                <div className="flex justify-center text-primary mb-2">
                    
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star_half</span>
                
                </div>
                <p className="text-xs font-bold uppercase text-slate-500">Global Score</p>
            </div>
            <div className="flex-1 w-full space-y-4">
                <div>
                    <div className="flex justify-between text-sm font-bold mb-1">
                        <span>Food</span>
                        <span className="text-primary">{rating.foodRating}</span>
                    </div>
                    <div
                        className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${(rating.foodRating * 10).toFixed(0)}%` }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm font-bold mb-1">
                        <span>Service</span>
                        <span className="text-primary">{rating.serviceRating}</span>
                    </div>
                    <div
                        className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${(rating.serviceRating * 10).toFixed(0)}%` }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm font-bold mb-1">
                        <span>Ambiance</span>
                        <span className="text-primary">{rating.ambienceRating}</span>
                    </div>
                    <div
                        className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${(rating.ambienceRating * 10).toFixed(0)}%` }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm font-bold mb-1">
                        <span>Value</span>
                        <span className="text-primary">{rating.valueRating}</span>
                    </div>
                    <div
                        className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${(rating.valueRating * 10).toFixed(0)}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}