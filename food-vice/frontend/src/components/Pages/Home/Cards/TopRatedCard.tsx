import { useNavigate } from "react-router"
import type { TopRatedRestaurant } from "../../Explore/RestaurantCard"


export function TopRatedCard({restaurant}:{restaurant:TopRatedRestaurant}) {

    
    const navigate=useNavigate()
    return (
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow cursor-pointer" onClick={()=>navigate(`/restaurant/${restaurant._id}`)}>
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0" data-alt="restauran image">
                <img className="w-full h-full object-cover" src={restaurant.media?.url}/>
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h4 className="font-bold">{restaurant.name}</h4>
                    <span className="text-primary font-bold text-sm">{restaurant.avgOverall.toFixed(1)}</span>
                </div>
                <p className="text-xs text-slate-500 mb-2">{restaurant.cuisines} • Opens {restaurant.openingTime} • {restaurant.priceCategory}</p>
                <div className="flex items-center gap-1 text-xs font-semibold text-accent-cyan">
                    <span className="material-symbols-outlined text-sm">verified</span> Verified Quality
                </div>
            </div>
        </div>
    )
}