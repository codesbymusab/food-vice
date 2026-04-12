import React from 'react';
import { Link } from 'react-router';

const ExploreMapView: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-4 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl font-bold">fastfood</span>
              <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                FoodVice
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
                Explore
              </a>
              <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
                Reels
              </a>
              <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
                Discussions
              </a>
            </nav>
          </div>
          <div className="flex-1 max-w-md hidden lg:block">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                search
              </span>
              <input
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Search restaurants, cuisines..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-primary/10 text-slate-600 dark:text-slate-400 hover:text-primary transition-all">
              <span className="material-symbols-outlined">add_circle</span>
            </button>
            <button className="p-2 rounded-full hover:bg-primary/10 text-slate-600 dark:text-slate-400 hover:text-primary transition-all relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background-light"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-primary/50 overflow-hidden cursor-pointer hover:scale-105 transition-transform" data-alt="User profile avatar circle">
              <img
                alt="Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgnm2tnCroCcH8dVdz_ddAmq6XVHiDf1KqLzc9Z2ydIEDw83rkwra5EBoN2607TpwytYDlY4DeOcekeU2sqer_l_ePRxDp3UHs41I-pC8B-uI15CfBI68xyGzV9MDgRuauLe4Byia9wuPQym_lS0bZZgzaBR5cvEbDDK5u4Kqtm_7ULLQHbM85NrLrDYFn6djnEZON5iv724PjlbGqplMK60LAnFL8LF_IgetW071ifVh9KxJH54gT5s6mmH8te-VcKVc-9jabLGY"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-1">
        <aside className="hidden lg:flex w-72 flex-col border-r border-primary/10 bg-background-light dark:bg-background-dark p-6 gap-8 sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">Filters</h3>
              <button className="text-xs font-semibold text-accent uppercase tracking-wider hover:underline">
                Clear All
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase">Cuisine Type</p>
              <div className="space-y-1">
                <label className="flex items-center gap-3 p-2 rounded-lg bg-primary/10 text-primary cursor-pointer">
                  <span className="material-symbols-outlined text-xl">restaurant</span>
                  <span className="text-sm font-semibold">All Cuisines</span>
                  <input checked className="hidden" name="cuisine" type="radio" />
                </label>
                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 cursor-pointer">
                  <span className="material-symbols-outlined text-xl text-slate-400">lunch_dining</span>
                  <span className="text-sm font-medium">Fast Food</span>
                  <input className="hidden" name="cuisine" type="radio" />
                </label>
                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 cursor-pointer">
                  <span className="material-symbols-outlined text-xl text-slate-400">local_pizza</span>
                  <span className="text-sm font-medium">Italian</span>
                  <input className="hidden" name="cuisine" type="radio" />
                </label>
                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 cursor-pointer">
                  <span className="material-symbols-outlined text-xl text-slate-400">eco</span>
                  <span className="text-sm font-medium">Healthy / Vegan</span>
                  <input className="hidden" name="cuisine" type="radio" />
                </label>
              </div>
            </div>
            <hr className="border-primary/5" />

            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase">Price Range</p>
              <div className="flex gap-2">
                <button className="flex-1 py-1.5 rounded border border-primary/20 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                  $
                </button>
                <button className="flex-1 py-1.5 rounded border border-primary/20 bg-primary text-white text-sm font-medium">
                  $$
                </button>
                <button className="flex-1 py-1.5 rounded border border-primary/20 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                  $$$
                </button>
                <button className="flex-1 py-1.5 rounded border border-primary/20 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                  $$$$
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase">Minimum Rating</p>
              <div className="flex items-center gap-2">
                <input
                  className="w-full h-1.5 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                  max="5"
                  min="1"
                  step="0.5"
                  type="range"
                  defaultValue="4"
                />
                <span className="text-sm font-bold text-primary">4.0+</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase">Distance (km)</p>
              <select className="w-full rounded-lg border-primary/10 bg-primary/5 text-sm py-2 px-3 focus:ring-primary/20 focus:border-primary">
                <option>Under 2 km</option>
                <option selected>Under 5 km</option>
                <option>Under 10 km</option>
                <option>City Wide</option>
              </select>
            </div>
          </div>
        </aside>

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

      <footer className="bg-slate-900 text-slate-400 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 text-primary mb-6">
                <span className="material-symbols-outlined text-3xl font-bold">fastfood</span>
                <h1 className="text-2xl font-black tracking-tight text-white">FoodVice</h1>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Discover the best culinary experiences in your city. Community driven reviews and reels for food lovers.
              </p>
              <div className="flex gap-4">
                <a className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-sm">public</span>
                </a>
                <a className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
                <a className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                </a>
              </div>
            </div>
            <div>
              <h6 className="text-white font-bold mb-6">Explore</h6>
              <ul className="space-y-4 text-sm">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Restaurants
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Cuisines
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Top Foodies
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Write a Review
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-bold mb-6">Company</h6>
              <ul className="space-y-4 text-sm">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Partner with Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-bold mb-6">Legal</h6>
              <ul className="space-y-4 text-sm">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Safety Guidelines
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-xs opacity-60">
            <p>© 2024 FoodVice Social. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExploreMapView;