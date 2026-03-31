import { useState } from "react";
import { NavLink } from "react-router";
import { NotificationsDropDown } from "./NotificationsDropdown";

export function Header() {

    const [showNotif, setShowNotif] = useState<boolean>(false)

    return (
        <header className="sticky top-0 z-40 bg-white dark:bg-background-dark/80 backdrop-blur-md border-primary/10 px-4 lg:px-10 py-3 border-b-primary/50 border-b-2">
            <div className="relative max-w-7xl mx-auto flex items-center justify-between gap-4">
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
                
                <div className="flex items-center gap-3">
                    

                    <button className={`${showNotif===true ? 'bg-primary/30 text-primary' : 'text-slate-600'} p-2 rounded-full hover:bg-primary/10  dark:text-slate-400 hover:text-primary transition-all relative`} onClick={() => { setShowNotif((prev) => !prev) }}>
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background-light"></span>
                    </button>
                    <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-primary/50 overflow-hidden cursor-pointer hover:scale-105 transition-transform" data-alt="User profile avatar circle">
                        <NavLink to="profile/1">

                            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgnm2tnCroCcH8dVdz_ddAmq6XVHiDf1KqLzc9Z2ydIEDw83rkwra5EBoN2607TpwytYDlY4DeOcekeU2sqer_l_ePRxDp3UHs41I-pC8B-uI15CfBI68xyGzV9MDgRuauLe4Byia9wuPQym_lS0bZZgzaBR5cvEbDDK5u4Kqtm_7ULLQHbM85NrLrDYFn6djnEZON5iv724PjlbGqplMK60LAnFL8LF_IgetW071ifVh9KxJH54gT5s6mmH8te-VcKVc-9jabLGY" />

                        </NavLink>
                    </div>
                    
                </div>

                <div
                    className={`${showNotif === true ? "flex flex-col" : "hidden"} max-w-96 absolute top-10 right-12 z-50 bg-white/95 dark:bg-slate-900/50 rounded-xl p-4 shadow-sm border border-primary/50 dark:border-slate-800 overflow-y-auto w-fit`} onMouseLeave={()=>setShowNotif((prev)=>!prev)}>
                    <NotificationsDropDown />
                </div>

            </div>


        </header>
    )
}