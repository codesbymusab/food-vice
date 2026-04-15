import { Link } from 'react-router'
import { FiltersSidebar } from './FiltersSidebar';

function ExploreMapView() {
  return (

    <main className="flex flex-1">
      
      <FiltersSidebar />

      <section className="flex-1 flex flex-col p-6 lg:p-10 gap-8 overflow-y-auto max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Discover Delicious on Map</h1>
            <p className="text-slate-500 font-medium">Top picks for your cravings in Downtown Area</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/explore" className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
              <span className="material-symbols-outlined text-xl">list</span>
              <span>View List</span>
            </Link>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <span className="material-symbols-outlined text-6xl text-slate-400">map</span>
            <p className="text-slate-500 mt-4">Interactive Map View</p>
            <p className="text-sm text-slate-400">Map integration would go here (e.g., Google Maps, Mapbox)</p>
          </div>
        </div>
      </section>
    </main>

  )
}
export default ExploreMapView;