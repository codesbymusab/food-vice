import { useEffect, useState } from "react";
import type { Reel } from "../../Reels/ReelsPage";
import { ReelCard } from "../Cards/ReelCard";
import { useAuth } from "../../../../context/AuthContext";

export function Reels() {


    const [reels, setReels] = useState<Reel[] | null>(null)
    const {user}=useAuth()
    async function fetchRecentReels() {
        try {

            const res = await fetch(
                `http://localhost:3000/reels/recent?userId=${user!.userId}`,
                { credentials: "include" }
            );
            if (res.ok) {
                const reels = await res.json();
                console.log(reels)
                setReels(reels)
            }
            else {
                throw new Error('Failed to load recent reels')
            }
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        fetchRecentReels()
    }, [])



    return (
        <section className="px-4 mb-16 bg-slate-900 -mx-4 py-12 lg:rounded-3xl lg:mx-4 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-2 mb-8">
                    <span className="material-symbols-outlined text-primary text-3xl">play_circle</span>
                    <h3 className="text-2xl font-bold">Food Reels</h3>
                    <span className="ml-auto px-3 py-1 bg-primary text-xs font-bold rounded-full uppercase tracking-tighter">Trending</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

                    {
                        reels && reels.length>0 && reels.map((reel) => {
                            return <ReelCard reel={reel} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}