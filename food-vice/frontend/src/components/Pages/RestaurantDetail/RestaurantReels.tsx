import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ReelCard } from "../Reels/ReelCard"

type Photo = {
    _id: string,
    url: string,
}
export function Reels() {
    const params = useParams()

    const [reels, setReels] = useState<Photo[] | null>(null)

    async function fetchReels() {
        try {
            const res = await fetch(
                `http://localhost:3000/restaurant/reels/${params.id}`,
                { credentials: "include" }
            );
            if (res.ok) {
                const { reels } = await res.json();
                console.log(reels)
                setReels(reels)
            }
            else {
                throw new Error('Failed to load Reels')
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchReels()
    }, [])

    return (
        <section className="lg:col-span-2 space-y-10 p-4 rounded-xl flex-1 overflow-y-auto dark:bg-black/20 md:p-6 snap-y snap-mandatory scroll-smooth">
                                        
            <div className="flex items-center justify-between mb-6 ">

                <h3 className="text-xl font-bold">Reels</h3>

            </div>


            {/* {reels && reels.length > 0 ? <>
                
                <ReelCard />
                <ReelCard />


            </>
            :
                <div className="mt-24 flex text-xl justify-center items-center text-slate-600 font-bold">
                    No Reels Uploaded
                </div>
            
            }    */}
        </section>
    )
}