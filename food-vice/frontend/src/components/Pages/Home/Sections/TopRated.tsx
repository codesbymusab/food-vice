import { useEffect, useState } from "react";
import type { TopRatedRestaurant } from "../../Explore/RestaurantCard";
import { TopRatedCard } from "../Cards/TopRatedCard";
import { useAuth } from "../../../../context/AuthContext";
import { ErrorScreen, SkeletonList } from "../../../Shared/Feedback";
import { fetchTopRatedRestaurants } from "../../../../apis/restaurants";

export function TopRated({location}:{location:[number,number] | null}) {

    const [topRatedRestaurants, setTopRatedRestaurants] = useState<TopRatedRestaurant[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const {user} = useAuth()
    
    
  

  async function loadTopRatedRestaurants(location: [number, number] | null) {
    setLoading(true);
    setError(null);
    try {
      const details = await fetchTopRatedRestaurants({
        userId: user!.userId,
        filters: { cuisine: 'All', price: '', rating: 0, dist: 50 },
        location,
      });
      setTopRatedRestaurants(details);
    } catch (error) {
      console.error(error);
      setError("Unable to load top rated restaurants. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
      loadTopRatedRestaurants(location)
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
                loading ? (
                    <SkeletonList count={3} />
                ) : error ? (
                    <div className="col-span-full">
                        <ErrorScreen title="Unable to load top rated restaurants" message={error} onRetry={() => loadTopRatedRestaurants(location)} />
                    </div>
                ) : topRatedRestaurants && topRatedRestaurants.length > 0 ? (
                    topRatedRestaurants.map((restaurant)=>{
                        return <TopRatedCard key={restaurant._id} restaurant={restaurant}/>
                    })
                ) : (
                    <div className="col-span-full rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                        No top rated restaurants are available yet.
                    </div>
                )
            }
           
                
            </div>
        </section>
    )
}