import GoogleMapReact from "google-map-react";
import { useNavigate } from "react-router";
import type { TopRatedRestaurant } from "./RestaurantCard";
import { useState } from "react";

interface MarkerProps {
  restaurant: TopRatedRestaurant;
  lat: number;
  lng: number;
}

export function Marker({ restaurant }: MarkerProps) {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-full cursor-pointer"
      onClick={() => setShowDetails(!showDetails)}

    >

      <div className="relative flex flex-col items-center">
        <span className={`absolute -top-4 ${showDetails ? 'left-20' : 'left-8'} w-20 text-blue-900 text-[0.8rem] font-extrabold`} onClick={() => setShowDetails(!showDetails)}
        >{restaurant.name}</span>

        <div className="w-6 h-6 bg-primary rounded-full shadow-md border border-white"></div>
        <div className="w-0 h-0 border-l-3 border-r-3 border-t-6 border-transparent border-t-primary mx-auto"></div>
      </div>

      {showDetails && (
        <div
          className="z-50 absolute -top-32 left-1/2 -translate-x-1/2 w-24 rounded-full border border-primary/10 bg-white dark:bg-slate-800 shadow-lg p-3"
          onMouseLeave={() => setShowDetails(!showDetails)}
          onClick={() => navigate(`/restaurant/${restaurant._id}`)}
        >
          <div
            className="h-20 bg-cover mb-2 rounded-full"
            style={{ backgroundImage: `url(${restaurant.media?.url})` }}
          />
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-slate-400">{restaurant.priceCategory}</span>
          </div>
          <p className="text-xs text-slate-500 truncate mb-1">{restaurant.cuisines}</p>
          <div className="flex-col justify-between text-xs text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-accent">location_pin</span>
              {restaurant.distKm.toFixed(1)} Km
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-accent">schedule</span>
              {restaurant.isOpen ? "Open Now" : `Opens ${restaurant.openingTime}`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function ExploreMapView({ topRatedRestaurants, location }: { topRatedRestaurants: TopRatedRestaurant[], location: [number, number]|null }) {
  return (

    <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-3xl flex items-center justify-center">
      { location ? <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_KEY as string}}
        defaultZoom={13}
        defaultCenter={{ lat: location[0], lng: location[1] }}>
        {
          topRatedRestaurants.map((restaurant) => {
            return <Marker key={restaurant._id} lat={restaurant.latitude} lng={restaurant.longitude} restaurant={restaurant} />
          })
        }

      </GoogleMapReact>
      :
      <h3 className="text-3xl font-bold">Location not Supported</h3>
}
    </div>



  )
}
export default ExploreMapView;