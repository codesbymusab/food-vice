import { useState, useEffect } from "react";
import { useAuth } from "../../../../context/AuthContext";
import type { TopRatedRestaurant } from "../../Explore/RestaurantCard";
import { NearByCard } from "../Cards/NearByCard";
import { Marker } from "../../Explore/ExploreMapView";
import GoogleMapReact from "google-map-react";

export function Nearby({ location }: { location: [number, number] }) {

    const [nearbyRestaurants, setNearbyRestaurants] = useState<TopRatedRestaurant[] | null>(null);
    const { user } = useAuth()




    async function fetchTopRatedRestaurants(location: [number, number] | null) {
        try {
            const res = await fetch(
                `http://localhost:3000/restaurant/toprated?lat=${location?.[0]}&lon=${location?.[1]}&userId=${user!.userId}&dist=3&limitCount=3`,
                { credentials: "include" }
            );
            if (res.ok) {
                const { details } = await res.json();
                setNearbyRestaurants(details);

            }
            else {
                throw new Error('Failed to load top rated restaurants')
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchTopRatedRestaurants(location)
    }, []);



    return (
        <section className="px-4 mb-16">
            <h3 className="text-2xl font-bold mb-6">Nearby Restaurants</h3>
            <div className="flex flex-col lg:flex-row gap-6 h-[500px]">
                <div className="flex-1 overflow-y-auto pr-2 space-y-4 no-scrollbar p-8">

                    {
                        nearbyRestaurants && nearbyRestaurants.map((restaurant) => {
                            return <NearByCard restaurant={restaurant} />
                        })
                    }

                </div>
                <div className="flex-[1.5] rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl relative min-h-[300px]">
                    { nearbyRestaurants && location ? <GoogleMapReact
                            bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_KEY as string}}
                            defaultZoom={13}
                            defaultCenter={{ lat: location[0], lng: location[1] }}>
                            {
                              nearbyRestaurants.map((restaurant) => {
                                return <Marker key={restaurant._id} lat={restaurant.latitude} lng={restaurant.longitude} restaurant={restaurant} />
                              })
                            }
                    
                          </GoogleMapReact>
                          :
                          <h3 className="text-3xl font-bold">Location not Supported</h3>}
                </div>
            </div>
        </section>
    )
}