import { Link } from 'react-router';
import { RestaurantCard } from './RestaurantCard';
import { FiltersSidebar } from './FiltersSidebar';

function ExplorePage() {
  return (
    <>

      <main className="flex flex-1">
        
        <FiltersSidebar />
        <section className="flex-1 flex flex-col p-6 lg:p-10 gap-8 overflow-y-auto max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Discover Delicious</h1>
              <p className="text-slate-500 font-medium">Top picks for your cravings in your Area</p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/explore/map" className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                <span className="material-symbols-outlined text-xl">map</span>
                <span>View on Map</span>
              </Link>
            </div>
          </div>

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
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
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
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
            </div>
          </div>
        </section>
      </main>



    </>
  );
};

export default ExplorePage;