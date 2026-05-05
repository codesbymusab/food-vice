import { useEffect, useState } from "react";
import type { TopRatedRestaurant } from "../../Explore/RestaurantCard";
import { TopRatedCard } from "../Cards/TopRatedCard";
import { useAuth } from "../../../../context/AuthContext";

export function TopRated({location}:{location:[number,number]}) {

    const [topRatedRestaurants, setTopRatedRestaurants] = useState<TopRatedRestaurant[] | null>(null);
    const {user} = useAuth()
    
    
  

  async function fetchTopRatedRestaurants(location: [number, number] | null) {
    try {
      const res = await fetch(
        `http://localhost:3000/restaurant/toprated?lat=${location?.[0]}&lon=${location?.[1]}&userId=${user!.userId}`,
        { credentials: "include" }
      );
      if (res.ok) {
        const { details } = await res.json();
        setTopRatedRestaurants(details);

      }
      else{
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
            <h3 className="text-2xl font-bold mb-6">Top Rated This Week</h3>
            <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                <button className="px-6 py-2 rounded-full bg-primary text-white font-bold text-sm">All</button>
                <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary/30 transition-colors font-bold text-sm">Pizza</button>
                <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary/30 transition-colors font-bold text-sm">Cafes</button>
                <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary/30 transition-colors font-bold text-sm">Desserts</button>
                <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary/30 transition-colors font-bold text-sm">Street Food</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
                topRatedRestaurants && topRatedRestaurants.map((restaurant)=>{
                    return <TopRatedCard key={restaurant._id} restaurant={restaurant}/>
                })
            }
           
                
            </div>
        </section>
    )
}