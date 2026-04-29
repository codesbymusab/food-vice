import { useNavigate } from "react-router"

export type TopRatedRestaurant =
    {
        _id: string,
        name: string,
        distKm: number,
        avgOverall: number,
        cuisines: string[],
        priceCategory: string,
        isOpen?: boolean,
        openingTime?: string
        media?: {
            _id: string,
            url: string,
        },
        latitude:number,
        longitude:number

    }
export function RestaurantCard({restaurant}:{restaurant:TopRatedRestaurant}) {
    const navigate = useNavigate()
    return (
        <div className="group relative flex flex-col rounded-xl border border-primary/5 bg-white dark:bg-slate-800/50 shadow-sm overflow-hidden hover:shadow-xl transition-all" onClick={() => navigate(`/restaurant/${restaurant._id}`)}>
            <div
                className="h-48 bg-cover scale-105 hover:scale-110"
                
                style={{
                    backgroundImage: `url(${restaurant.media?.url})`
                }}
            >   
                
                
            </div>
            <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {restaurant.name}
                    </h3>
                    <span className="text-s font-bold text-slate-400">{restaurant.priceCategory}</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">{restaurant.cuisines}</p>
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                            <span className="material-symbols-outlined text-sm text-accent">location_pin</span> {restaurant.distKm.toFixed(1)} Km away
                        </span>
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-2">
                            <span className="material-symbols-outlined text-sm text-accent">schedule</span> {restaurant.isOpen && restaurant.isOpen? 'Open Now': `Opens ${restaurant.openingTime}`}
                        </span>
                    </div>
                    <button className="text-primary hover:scale-125">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                </div>
            </div>
        </div>
    )
}