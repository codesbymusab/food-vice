import { RestaurantCard, type RecommendedRestaurant, type TopRatedRestaurant } from './RestaurantCard';
import { FiltersSidebar } from './FiltersSidebar';
import { useEffect, useState } from 'react';
import ExploreMapView from './ExploreMapView';
import { useAuth } from '../../../context/AuthContext';
import { useAppLocation } from '../../../context/LocationContext';
import { ErrorScreen, SkeletonList } from '../../Shared/Feedback';
import { fetchTopRatedRestaurants as loadTopRatedRestaurantsAPI, fetchRecommendedRestaurants as loadRecommendedRestaurantsAPI } from '../../../apis/restaurants';
import { fetchCuisines } from '../../../apis/cuisines';

export type Cuisine = {
  _id: string,
  name: string

}
export type Filter = {
  cuisine?: string,
  price?: string,
  rating?: number,
  dist?: number
}
function ExplorePage() {

  const { user } = useAuth()
  const { location, loading: locationLoading, error: locationError, fetchLocation } = useAppLocation();
  const [topRatedRestaurants, setTopRatedRestaurants] = useState<TopRatedRestaurant[] | null>(null);
  const [recommendedRestaurants, setRecommendedRestaurants] = useState<RecommendedRestaurant[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [mapView, setMapView] = useState<boolean>(false)
  const [cuisines, setCuisines] = useState<Cuisine[] | null>(null)
  const [filters, setFilters] = useState<Filter>({
    cuisine: 'All',
    price: "",
    rating: 0,
    dist: 50,

  })

  async function loadTopRatedRestaurants(location: [number, number] | null) {
    try {
      const details = await loadTopRatedRestaurantsAPI({ userId: user?.userId ?? '', filters, location });
      setTopRatedRestaurants(details ?? null);
    } catch (error) {
      console.error(error);
      setError("Unable to load top rated restaurants. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function loadRecommendedRestaurants(location: [number, number] | null) {
    try {
      const details = await loadRecommendedRestaurantsAPI({ userId: user?.userId ?? '', filters, location });
      setRecommendedRestaurants(details ?? null);
    } catch (error) {
      console.error(error);
      setError("Unable to load recommended restaurants. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function loadCuisines() {
    try {
      const result = await fetchCuisines();
      setCuisines(result ?? null);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    loadCuisines();
  }, []);

  useEffect(() => {
    if (!locationLoading) {
      setLoading(true);
      setError(null);
      void Promise.all([loadTopRatedRestaurants(location), loadRecommendedRestaurants(location)]);
    }
  }, [locationLoading, location]);


  async function applyFilters() {
    setLoading(true);
    setError(null);
    await Promise.all([loadTopRatedRestaurants(location), loadRecommendedRestaurants(location)]);
  }



  const displayError = error ?? locationError;

  if (locationLoading && !topRatedRestaurants && !recommendedRestaurants) {
    return (
      <main className="flex flex-1 min-h-[calc(100vh-80px)] p-4">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <div className="h-12 w-3/4 rounded-full bg-slate-200 animate-pulse dark:bg-slate-800"></div>
          <div className="grid gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-100 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <div className="h-10 w-1/2 rounded-full bg-slate-200 animate-pulse dark:bg-slate-700"></div>
              <div className="h-4 rounded-full bg-slate-200 animate-pulse dark:bg-slate-700"></div>
              <div className="h-4 rounded-full bg-slate-200 animate-pulse dark:bg-slate-700"></div>
            </div>
            <div className="space-y-4">
              <SkeletonList count={3} />
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <>

      <main className="flex flex-1">

        <FiltersSidebar cuisines={cuisines} filters={filters} setFilters={setFilters} applyFilters={applyFilters} />


        <section className="flex-1 flex flex-col p-4 gap-8 overflow-y-auto max-w-[1200px] mx-auto w-full">
          {displayError ? (
            <div className="mb-6">
              <ErrorScreen title="Unable to load explore content" message={displayError} onRetry={() => void fetchLocation()} />
            </div>
          ) : null}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Discover Delicious</h1>
              <p className="text-slate-500 font-medium">Top picks for your cravings in your Area</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setMapView((prev) => !prev)} className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                {!mapView ? (
                  <><span className="material-symbols-outlined text-xl">map</span>
                    <span>View on Map</span></>

                ) : (
                  <><span className="material-symbols-outlined text-xl">list</span>
                    <span>View List</span></>

                )}
              </button>
            </div>
          </div>
          {!mapView ?
            <>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    Recommendations
                  </h2>
                  <a className="text-primary font-bold text-sm hover:underline" href="#">
                    View All
                  </a>
                </div>
                <div className="overflow-x-auto grid-rows-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {
                    recommendedRestaurants && recommendedRestaurants.map((restaurant) => {
                      return <RestaurantCard key={restaurant._id} restaurant={restaurant} setTopRatedRestaurants={setRecommendedRestaurants} />
                    })
                  }

                </div>
              </div>

              <div className="space-y-6 pt-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">award_star</span>
                    Top Rated Near You
                  </h2>
                  <a className="text-primary font-bold text-sm hover:underline" href="#">
                    View All
                  </a>
                </div>
                <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 overflow-x-auto">
                  { 
                    recommendedRestaurants ?
                    topRatedRestaurants && topRatedRestaurants
                      .filter(
                        top =>
                          !recommendedRestaurants.some(
                            rec => rec._id.toString() === top._id.toString()
                          )
                      )
                      .map(restaurant => (
                        <RestaurantCard
                          key={restaurant._id}
                          restaurant={restaurant}
                          setTopRatedRestaurants={setTopRatedRestaurants}
                        />
                      ))
                      :
                      topRatedRestaurants && topRatedRestaurants.map(restaurant => (
                        <RestaurantCard
                          key={restaurant._id}
                          restaurant={restaurant}
                          setTopRatedRestaurants={setTopRatedRestaurants}
                        />
                      ))
                  }
                </div>
              </div>
            </>
            :

            <ExploreMapView topRatedRestaurants={topRatedRestaurants!} location={location} />
          }
        </section>


      </main>



    </>
  );
};

export default ExplorePage;