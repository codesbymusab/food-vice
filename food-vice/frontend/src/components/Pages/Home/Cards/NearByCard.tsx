import { useNavigate } from "react-router"
import type { TopRatedRestaurant } from "../../Explore/RestaurantCard"

export function NearByCard({ restaurant }: { restaurant: TopRatedRestaurant }) {
    const navigate = useNavigate()
    return (
        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl flex items-center gap-4 hover:ring-2 ring-primary/30 transition-all cursor-pointer border border-slate-100 dark:border-slate-800 shadow-sm" onClick={() => navigate(`/restaurant/${restaurant._id}`)}>
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-200" data-alt="Mexican street taco stand">
                <img className="w-full h-full object-cover" src={restaurant.media?.url} />
            </div>
            <div>
                <h5 className="font-bold">{restaurant.name}</h5>
                <p className="text-sm text-slate-500">{restaurant.distKm.toFixed(1)} km away • Opens {restaurant.openingTime}</p>
                <div className="mt-1 flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span
                            key={i}
                            className={`material-symbols-outlined ${i < Math.floor(restaurant.avgOverall) ? "fill-1 text-primary" : "text-gray-300"
                                }`}
                        >
                            star
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}