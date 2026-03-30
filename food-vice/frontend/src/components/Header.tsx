import { NavLink } from "react-router";

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-background-dark/80 backdrop-blur-md border-primary/10 px-4 lg:px-10 py-3 border-b-primary/50 border-b-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-8">
                    <NavLink to="home">
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-3xl font-bold">fastfood</span>
                            <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-slate-100">FoodVice</h1>
                        </div>
                    </NavLink>

                    <nav className="hidden md:flex items-center gap-6">
                        <NavLink className="text-sm font-semibold hover:text-primary transition-colors" to="explore">Explore</NavLink>
                        <NavLink className="text-sm font-semibold hover:text-primary transition-colors" to="reels">Reels</NavLink>
                        <NavLink className="text-sm font-semibold hover:text-primary transition-colors" to="community">Community</NavLink>
                    </nav>
                </div>
                <div className="flex-1 max-w-md hidden lg:block">
                    <div className="relative group ">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                        <input className=" w-full bg-slate-100 dark:bg-slate-800 rounded-full py-2 pl-10 pr-4 text-sm  transition-all" placeholder="Search restaurants, cuisines..." type="text" />
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
                        <NavLink to="profile/1">

                            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgnm2tnCroCcH8dVdz_ddAmq6XVHiDf1KqLzc9Z2ydIEDw83rkwra5EBoN2607TpwytYDlY4DeOcekeU2sqer_l_ePRxDp3UHs41I-pC8B-uI15CfBI68xyGzV9MDgRuauLe4Byia9wuPQym_lS0bZZgzaBR5cvEbDDK5u4Kqtm_7ULLQHbM85NrLrDYFn6djnEZON5iv724PjlbGqplMK60LAnFL8LF_IgetW071ifVh9KxJH54gT5s6mmH8te-VcKVc-9jabLGY" />

                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}