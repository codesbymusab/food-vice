import React from 'react';
import { Link } from 'react-router';

const ExplorePage: React.FC = () => {
  return (
    <>
      <script id="tailwind-config">
        {`
          tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "primary": "#ff8c00",
                  "accent": "#00bcd4",
                  "background-light": "#f8f7f5",
                  "background-dark": "#231a0f",
                },
                fontFamily: {
                  "display": ["Be Vietnam Pro"]
                },
                borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
              },
            },
          }
        `}
      </script>
      <style>
        {`
          body {
            font-family: "Be Vietnam Pro", sans-serif;
          }

          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        `}
      </style>
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
                <h1 className="text-3xl font-bold tracking-tight">Discover Delicious</h1>
                <p className="text-slate-500 font-medium">Top picks for your cravings in Downtown Area</p>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="group relative flex flex-col rounded-xl border border-primary/5 bg-white dark:bg-slate-800/50 shadow-sm overflow-hidden hover:shadow-xl transition-all">
                  <div
                    className="h-48 w-full bg-cover bg-center overflow-hidden"
                    data-alt="Close up of a gourmet juicy beef burger"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA926E_qh17omPsI6IQ3C_YRju5gue-3R4B8ak3Ek6omOU3W4bCZX-khhpmxNMYqw0RFtaPJ8ElMZd6h-6_L2FFpJ1UR4RLiYFLfipuPg1W5RM7Uedw4ORBKqNscL69Ptz69E0-eN7Z1rtIJ4_B1WNQmeQMLVqMvUHNFmm8tZPmGmJIJoSETlKXBKihB6CMbd40oA0n634Mic0iHeOYd0yg0G2acw5nVjqc-LIeJ5Rbop4SjNZ8Xh5DJTxF3CPkHKV8-9h-kuzQDfo")`,
                    }}
                  >
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur dark:bg-slate-900/90 rounded-full px-2 py-1 flex items-center gap-1 text-xs font-bold text-primary">
                      <span className="material-symbols-outlined text-sm fill-1">star</span> 4.8
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        The Burger Lab
                      </h3>
                      <span className="text-xs font-bold text-slate-400">$$</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">Gourmet Burgers • American • 1.2 km</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-sm text-accent">schedule</span> 15-25 min
                        </span>
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-2">
                          <span className="material-symbols-outlined text-sm text-accent">delivery_dining</span> Free
                        </span>
                      </div>
                      <button className="text-primary">
                        <span className="material-symbols-outlined">favorite</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="group relative flex flex-col rounded-xl border border-primary/5 bg-white dark:bg-slate-800/50 shadow-sm overflow-hidden hover:shadow-xl transition-all">
                  <div
                    className="h-48 w-full bg-cover bg-center overflow-hidden"
                    data-alt="Traditional wood-fired Neapolitan pizza with basil leaves"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPHE8T4P5q6NImh96AA_N3HegJZi06vBbQaC6V1dRAmkeGw2Kwk3uileVykzri7oDjZbV_FiJKSMp813AZ9YsK7MW7IgDK2MXZdA0X7l5glJedcvBLoKlEvKPnU0iVOsCf_T2qwsp5Xo8Ip7s2pCYjR8xxHXDVKy60uVGAG9Xz9pv4Oqjaz5CAEa_kxUnbijO-3-OkTSidrUNpisCvj7wO-jZDf3z6k-wYu05A_fPJBCZ7A0kNLwNw5YRcU3RiaaBnIapwvVdAH0U")`,
                    }}
                  >
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur dark:bg-slate-900/90 rounded-full px-2 py-1 flex items-center gap-1 text-xs font-bold text-primary">
                      <span className="material-symbols-outlined text-sm fill-1">star</span> 4.9
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        Napoli Crust
                      </h3>
                      <span className="text-xs font-bold text-slate-400">$$$</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">Italian • Wood-fired • 2.5 km</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-sm text-accent">schedule</span> 30-45 min
                        </span>
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-2">
                          <span className="material-symbols-outlined text-sm text-accent">delivery_dining</span> $2.00
                        </span>
                      </div>
                      <button className="text-slate-300 hover:text-primary">
                        <span className="material-symbols-outlined">favorite</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="group relative flex flex-col rounded-xl border border-primary/5 bg-white dark:bg-slate-800/50 shadow-sm overflow-hidden hover:shadow-xl transition-all">
                  <div
                    className="h-48 w-full bg-cover bg-center overflow-hidden"
                    data-alt="Colorful healthy sushi platter with ginger and wasabi"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLikU7JGXIlk9qOfGl4jDrk3OJM5r1n0ryW5E-NvI-4zw9_WvU8aHH1Zjku6xtzeIaTUBdbkIsKdDCv2w2gtYu-ONEeeFrReLbQtHqMyQ2sNMMCxOgXwxERi7IatHgYkUKK57jo88nBzwrjY0TPaqB3X-ZiQrp_cRrtbRqCZI8OWiT6S0LkNmBsGXREA63n1jZbnSSiib5SncLlsoPEjwNOZy96dtCjgtfPP-IddhO_0RFW18K0xSg9jghsZ3GIsTTJ_X1kgs1PDo")`,
                    }}
                  >
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur dark:bg-slate-900/90 rounded-full px-2 py-1 flex items-center gap-1 text-xs font-bold text-primary">
                      <span className="material-symbols-outlined text-sm fill-1">star</span> 4.7
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        Sushi Zen
                      </h3>
                      <span className="text-xs font-bold text-slate-400">$$</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">Japanese • Seafood • 0.8 km</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-sm text-accent">schedule</span> 20-30 min
                        </span>
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-2">
                          <span className="material-symbols-outlined text-sm text-accent">delivery_dining</span> Free
                        </span>
                      </div>
                      <button className="text-slate-300 hover:text-primary">
                        <span className="material-symbols-outlined">favorite</span>
                      </button>
                    </div>
                  </div>
                </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="flex flex-col gap-2 p-2 bg-white dark:bg-slate-800/50 rounded-lg border border-primary/5 hover:border-primary/20 transition-all">
                  <div
                    className="h-32 w-full rounded-md bg-cover bg-center"
                    data-alt="Plate of vibrant green healthy vegan salad"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJQ_BoUUUM9EOELKucT6kZ0vQaYE3O_WHNm4_XMaax3l6y0I2vxAE1n-92jFs5koLEyGDTIgrV1CD77Rjrx3bOWyDcHT01QQ3_nCL90ym8GIbf-gKxWoudkLmvspFfIGrPI41jb-pLfrqtq30AqdXpTNSmTwQoJCpOH2-H3E5ZqUjT_Bpt8DQsGKU1WkhO53ZmjWzZQu98mJGIWi5ro7zv3ueQtoUDl7BvLEGUaiMas6vhbowoGB-6ymnPzSRohvWomNWftzm6eiw")`,
                    }}
                  ></div>
                  <div className="px-1">
                    <h4 className="font-bold text-sm truncate">Green Leaf Salad</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Healthy • 1.5 km</span>
                      <span className="text-xs font-bold text-primary flex items-center">
                        <span className="material-symbols-outlined text-[12px] fill-1">star</span>4.9
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-2 bg-white dark:bg-slate-800/50 rounded-lg border border-primary/5 hover:border-primary/20 transition-all">
                  <div
                    className="h-32 w-full rounded-md bg-cover bg-center"
                    data-alt="Steaming bowl of spicy asian ramen noodles"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQtJgMARb4WvfeUcqAOft1AGef59ZlLNIjHBR3PsoVm-mjuV-FvLUDYDJ7vpZ-GY2tdsv2_3PqEedmuxwKe4YivAmWtUCyMskXjy8YVfJRIrmye7n5GNfIT-Bgn60nj7Sv9Aj70TS6Y4zRnQXaaYmDlqo83dxrSYedJtBj1i-zqCvM2hdP26-rhxmxLzmN_rRrwQTqWlNnONP_y359hfXFZWw3n_HLLzvVaO3RXxRr3ZN4UD6wDqrskREXP9WSZ1xQB2aQtWbKHCs")`,
                    }}
                  ></div>
                  <div className="px-1">
                    <h4 className="font-bold text-sm truncate">Ramen Nagi</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Asian • 2.1 km</span>
                      <span className="text-xs font-bold text-primary flex items-center">
                        <span className="material-symbols-outlined text-[12px] fill-1">star</span>4.7
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-2 bg-white dark:bg-slate-800/50 rounded-lg border border-primary/5 hover:border-primary/20 transition-all">
                  <div
                    className="h-32 w-full rounded-md bg-cover bg-center"
                    data-alt="Delicious chocolate fudge brownies on a plate"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVarrbHuGd3VUz8x2eh6iPq75_AWhFIY6JBVyAPIoHM2sylEqZl6fzbJIAtOgfJ2Ca2b52f7p21TnfoUI64068_V14gI6jwYcHZmRO7RBxECqgPqcNbsiJozSRDwUEz5DEyAN2wSe5zw8Z-VzMr01GOfyt-aOoQIpWX77AN6DODRR8lrekoBMNfIpKLhYiwGWigFkKiNDHEV76mprfULt8sIbssnk4wU_MtfXO2n8GZLaQTjyzFHt-Fs4c3JPYDarDz5_MdJVSwEY")`,
                    }}
                  ></div>
                  <div className="px-1">
                    <h4 className="font-bold text-sm truncate">Sugar Rush Bakery</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Desserts • 0.5 km</span>
                      <span className="text-xs font-bold text-primary flex items-center">
                        <span className="material-symbols-outlined text-[12px] fill-1">star</span>4.6
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-2 bg-white dark:bg-slate-800/50 rounded-lg border border-primary/5 hover:border-primary/20 transition-all">
                  <div
                    className="h-32 w-full rounded-md bg-cover bg-center"
                    data-alt="Spicy colorful street tacos with lime wedges"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6Yori6IIIyGyoNPhykzGdJRp-yQzjCk6PpMQgLumZ6Qr36UgfPPxkSPMAmEoAWYQRyZ_-UcwD_SJ_EwXDcKq6NHLZc0hoGpTNYUHFhoqIPU_DLkicdcmwE7qdBAnZVsihXrsS2IiY9blRsx64RnwPETf5OTkzz1D0pVUSU3aNuE-nMr2L49ZJbkkP3-CcEnftdx8MzSLisFy6VMC_2OsdSNWEtm5RFet4Fhs0cR7v1D1Zz0YDLhQ_9HtPcTe0QucSL-Beblzt1DY")`,
                    }}
                  ></div>
                  <div className="px-1">
                    <h4 className="font-bold text-sm truncate">Taco Fiesta</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Mexican • 3.2 km</span>
                      <span className="text-xs font-bold text-primary flex items-center">
                        <span className="material-symbols-outlined text-[12px] fill-1">star</span>4.8
                      </span>
                    </div>
                  </div>
                </div>
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
    </>
  );
};

export default ExplorePage;