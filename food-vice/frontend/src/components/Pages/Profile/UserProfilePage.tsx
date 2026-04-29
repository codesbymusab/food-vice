import { useState} from "react";
import { ReelCard } from "../Home/Cards/ReelCard";
import { AchievementBadge, AchievementBadgeAlt } from "./AchievementBadge";
import { PostedReview } from "./PostedReview";
import { SavedRestaurant } from "./SavedRestaurant";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../../../context/AuthContext";

export function UserProfilePage() {

    const navigate=useNavigate()
    const [selectedTab, setSelectedTab] = useState<string>('restaurants')
    const {user}=useAuth()
    const params=useParams()
    
    function changeTab(tab: string): void {
        setSelectedTab(tab)
    }
    function editProfile(){
        navigate('edit')
    }
    return (
        <main className="max-w-4xl mx-auto px-4 py-10">

            <div className="bg-white dark:bg-slate-800/40 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden mb-8">
                <div className="p-8 flex flex-col md:flex-row items-center gap-8">

                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                        <div className="relative size-32 md:size-40 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden">
                            <img className="w-full h-full object-cover"  src={user?.profilePhoto} />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-accent text-white p-1.5 rounded-full border-4 border-white dark:border-slate-800 shadow-lg">
                            <span className="material-symbols-outlined text-sm block">verified</span>
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{user?.name}</h1>
                            <p className="text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center md:justify-start gap-1.5 mt-1">
                                <span className="material-symbols-outlined text-sm">location_on</span> {user?.address}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            
                        { params.id===user?.userId ? (<button className="inline-flex items-center gap-2 px-6 py-2 bg-accent-cyan text-white rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-md">
                            <span className="material-symbols-outlined text-sm">person_add</span> Follow
                        
                        </button>
                        )
                        :
                        (<button className="shadow-xl shadow-orange-500/5 inline-flex items-center gap-2 px-5 py-2 border border-slate-300 dark:border-slate-700 rounded-full text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" onClick={()=>editProfile()}>
                                <span className="material-symbols-outlined text-sm">edit</span> Edit Profile
                            </button>
                        )} 
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 min-w-[120px]">
                        <div className="bg-primary text-white px-4 py-2 rounded-xl text-center shadow-sm">
                            <p className="text-xl font-bold">840</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-90">Followers</p>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-xl text-center border border-slate-200 dark:border-slate-600">
                            <p className="text-xl font-bold text-slate-900 dark:text-slate-100">452</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Following</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mb-12">
                <div className="w-full max-w-md bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-primary/10 shadow-sm">
                    <div className="flex justify-between items-end mb-4">
                        <div className="text-left">
                            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Trust Score</p>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">850<span className="text-lg text-slate-400 font-normal">/1000</span></h3>
                        </div>
                        <div className="text-right">
                            <span className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">
                                <span className="material-symbols-outlined text-xs">auto_awesome</span> LEVEL {user?.level}
                            </span>
                        </div>
                    </div>
                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent transition-all" style={{ width: "85%" }}></div>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-3 italic text-center">Calculated based on review quality, community helpfulness, and verified visits.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-white dark:bg-slate-800/40 p-5 rounded-xl border border-slate-100 dark:border-slate-700 text-center hover:border-primary/30 transition-colors">
                    <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">128</p>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Reviews</p>
                </div>
                <div className="bg-white dark:bg-slate-800/40 p-5 rounded-xl border border-slate-100 dark:border-slate-700 text-center hover:border-primary/30 transition-colors">
                    <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">84</p>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Saved</p>
                </div>
            </div>

            <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">military_tech</span>
                        Achievements
                    </h2>
                    <button className="text-xs font-bold text-primary hover:underline">View All</button>
                </div>
                <div className="flex flex-wrap gap-4">
                    <AchievementBadge />
                    <AchievementBadgeAlt />
                    <AchievementBadgeAlt />
                    <AchievementBadge />
                    <AchievementBadgeAlt />
                </div>
            </div>

            <div className="mt-12">
                <div className="flex border-b border-slate-200 dark:border-slate-700 mb-8">

                    <button className={`px-6 md:px-8 py-4 text-sm font-medium ${selectedTab==='restaurants' ? 'border-b-2 border-primary text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'} transition-all`} 
                        onClick={() => changeTab('restaurants')}>
                            Saved Restaurants
                    </button>
                    <button  className={`px-6 md:px-8 py-4 text-sm font-medium ${selectedTab==='reviews' ? 'border-b-2 border-primary text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'} transition-all`} 
                        onClick={() => changeTab('reviews')}>
                            My Reviews
                    </button>
                    <button className={`px-6 md:px-8 py-4 text-sm font-medium ${selectedTab==='reels' ? 'border-b-2 border-primary text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'} transition-all`} 
                        onClick={() => changeTab('reels')}>
                            Reels
                    </button></div>

                {selectedTab === 'restaurants' && (<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <SavedRestaurant />
                    <SavedRestaurant />



                </div>
                )
                }

                {selectedTab === 'reviews' && (<div className="space-y-8">

                    <PostedReview />
                    <PostedReview />
                    <PostedReview />


                </div>
                )}
                {selectedTab === 'reels' && (

                    <div className="max-w-7xl mx-auto ">
                        <div className="mt-12 p-8 text-white bg-slate-900 rounded-2xl hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2 mb-8">
                                <span className="material-symbols-outlined text-primary text-3xl">camera</span>
                                <h3 className="text-2xl font-bold">Yours</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                <ReelCard />
                                <ReelCard />
                                <ReelCard />
                                <ReelCard />
                                <ReelCard />
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2 mb-8">
                                <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
                                <h3 className="text-2xl font-bold">Favorites</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-white">
                                <ReelCard />
                                <ReelCard />
                                <ReelCard />
                                <ReelCard />
                                <ReelCard />
                            </div>
                        </div>


                    </div>
                )}
                <div className="mt-8 text-center">
                    <button className="px-6 py-2 border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors">
                        Load More
                    </button>
                </div>
            </div>

        </main>
    )
}