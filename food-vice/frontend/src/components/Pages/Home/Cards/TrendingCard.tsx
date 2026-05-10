import { useNavigate } from "react-router"
import type { TrendingRestaurant } from "../../../../apis/restaurants"

export function TrendingCard({restaurant}:{restaurant:TrendingRestaurant}) {
    const navigate=useNavigate()
    return (
        <div className="rounded-2xl bg-white min-w-[300px] snap-start group cursor-pointer hover:mt-5 transition-mt duration-300" onClick={()=>navigate(`/explore/restaurant/${restaurant._id}`)}>
            <div className="relative h-48 rounded-t-2xl overflow-hidden mb-3" data-alt="restaurant cover photo ">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={restaurant.media?.url} />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    {restaurant.avgOverall && (<><span className="material-symbols-outlined text-sm text-primary fill-current">star</span>
                    <span className="text-xs font-bold">{restaurant.avgOverall.toFixed(1)}</span></>)}
                </div>
            </div>
            <div className="mx-5 mb-5">
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{restaurant.name}</h4>
                <p className="text-sm text-slate-500">{restaurant.cuisines[0]}{restaurant.priceCategory !== '' ? ` • ${restaurant.priceCategory}` :''} • {restaurant.distKm.toFixed(1)}km away</p>
            </div>

        </div>
    )
}