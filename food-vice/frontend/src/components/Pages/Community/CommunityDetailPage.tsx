import { FeedCard } from "./FeedCard";
import { SearchBar } from "../../SearchBar";
import { useNavigate } from "react-router";
import { CommunityGuidelines } from "./CommunityGuidelinesCard";
import { CommunityCover } from "./CommunityCover";

export function CommunityDetailPage() {

    const navigate = useNavigate()
    return (
        <main className="flex-1 px-4 md:px-10 py-8 max-w-7xl mx-auto">

            <CommunityCover />

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                <aside className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">



                    <button
                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 border-2 border-primary text-white bg-primary  gap-2 text-base font-bold leading-normal tracking-[0.015em] hover:brightness-110 transition-all shadow-lg shadow-primary/20" onClick={()=>navigate('create')}>
                        <span className="material-symbols-outlined">add</span>
                        <span>Create Thread</span>
                    </button>

                    <CommunityGuidelines />

                </aside>

                <div className="lg:col-span-9 order-1 lg:order-2 flex flex-col gap-6">


                    <SearchBar placeHolder="Search for threads..." />




                    <div className="flex flex-col gap-4">

                        <FeedCard />
                        <FeedCard />


                    </div>

                    <div className="flex justify-center pt-4">
                        <button
                            className="px-8 py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
                            Load More Discussions
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}