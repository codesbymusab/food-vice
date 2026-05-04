import { RestaurantCard, type RecommendedRestaurant, type TopRatedRestaurant } from './RestaurantCard';
import { FiltersSidebar } from './FiltersSidebar';
import { useEffect, useState } from 'react';
import ExploreMapView from './ExploreMapView';
import { useAuth } from '../../../context/AuthContext';

export type Cuisine = {
  _id: string,
  name: string

}
export type Filter = {
  cuisine?: string,
  price?: string,
  rating?: number,
  distance?: number
}
function ExplorePage() {

  const { user } = useAuth()
  const [topRatedRestaurants, setTopRatedRestaurants] = useState<TopRatedRestaurant[] | null>(null);
  const [recommendedRestaurants, setRecommendedRestaurants] = useState<RecommendedRestaurant[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true)
  const [location, setLocation] = useState<[number, number] | null>(null);
  const [mapView, setMapView] = useState<boolean>(false)
  const [cuisines, setCuisines] = useState<Cuisine[] | null>(null)
  const [filters, setFilters] = useState<Filter>({
    cuisine: 'All',
    price: "",
    rating: 0,
    distance: 50,

  })

  function fetchLocation() {
    if (!navigator.geolocation) {
      console.error("Geolocation not supported");
      setLoading(false)
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation([latitude, longitude]);
        setLoading(false)
      },
      (error) => {
        console.error("Error getting user location:", error);
        setLoading(false)
      }
    );
  }

  async function fetchTopRatedRestaurants(location: [number, number] | null) {
    try {
      const res = await fetch(
        `http://localhost:3000/restaurant/toprated?lat=${location?.[0]}&lon=${location?.[1]}&cuisine=${filters.cuisine}&price=${filters.price}&rating=${filters.rating}&dist=${filters.distance}&userId=${user?.userId}`,
        { credentials: "include" }
      );
      if (res.ok) {
        const { details } = await res.json();
        setTopRatedRestaurants(details);

      }
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchRecommendedRestaurants(location: [number, number] | null) {
    try {
      const res = await fetch(
        `http://localhost:3000/restaurant/recommended?lat=${location?.[0]}&lon=${location?.[1]}&cuisine=${filters.cuisine}&price=${filters.price}&rating=${filters.rating}&dist=${filters.distance}&userId=${user?.userId}`,
        { credentials: "include" }
      );
      if (res.ok) {
        const { details } = await res.json();
        console.log(details)
        setRecommendedRestaurants(details);

      }
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchCuisines() {
    try {
      const res = await fetch(
        'http://localhost:3000/restaurant/cuisines',
        { credentials: "include" }
      );
      if (res.ok) {
        const cus = await res.json();
        setCuisines(cus.result);

      }
      else {
        throw new Error('Failed to get cuisines')
      }
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    fetchLocation();
  }, []);


  useEffect(() => {
    if (!loading) {

      fetchTopRatedRestaurants(location)
      fetchRecommendedRestaurants(location)
    }

  }, [loading]);

  useEffect(() => {

    fetchCuisines()


  }, []);


  async function applyFilters() {
    await fetchTopRatedRestaurants(location)
    await fetchRecommendedRestaurants(location)
  }



  if (!topRatedRestaurants) {
    return (
      <div>Loading....</div>
    )
  }


  return (
    <>

      <main className="flex flex-1">

        <FiltersSidebar cuisines={cuisines} filters={filters} setFilters={setFilters} applyFilters={applyFilters} />


        <section className="flex-1 flex flex-col p-4 gap-8 overflow-y-auto max-w-[1200px] mx-auto w-full">
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
                    topRatedRestaurants
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
                      topRatedRestaurants.map(restaurant => (
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

            <ExploreMapView topRatedRestaurants={topRatedRestaurants} location={location} />
          }
        </section>


      </main>



    </>
  );
};

export default ExplorePage;