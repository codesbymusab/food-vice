import '../../../index.css'
import { Hero } from './Sections/Hero'
import { LatestDiscussion } from './Sections/LatestDiscussion'
import { Leaderbaord } from './Sections/Leaderboard'
import { Nearby } from './Sections/NearBy'
import { Reels } from './Sections/Reels'
import { Reviews } from './Sections/Reviews'
import { TopRated } from './Sections/TopRated'
import { Trending } from './Sections/Trending'

export function HomePage() {
    return (
        <main className="max-w-7xl mx-auto pb-20 pt-8">

            <Hero />

            <Trending />

            <Reels />

            <TopRated />

            <Nearby />

            <section className="px-4 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <LatestDiscussion />
                <Leaderbaord />
            </section>

            <Reviews />
            
        </main>
    )
}