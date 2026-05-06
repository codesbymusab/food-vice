import { useEffect, useState, useRef } from 'react'
import '../../../index.css'
import { Hero } from './Sections/Hero'
import { LatestDiscussion } from './Sections/LatestDiscussion'
import { Leaderbaord } from './Sections/Leaderboard'
import { Nearby } from './Sections/NearBy'
import { Reels } from './Sections/Reels'
import { Reviews } from './Sections/Reviews'
import { TopRated } from './Sections/TopRated'
import { Trending } from './Sections/Trending'
import { HomeSkelton } from '../Skeltons/HomeSkelton'
import { useAppLocation } from '../../../context/LocationContext'

export function HomePage() {
    
    const { location, loading: locationLoading } = useAppLocation();
    const [dataLoading, setDataLoading] = useState(false);
    const prevLocationRef = useRef<[number, number] | null>(null);

    useEffect(() => {
        if (prevLocationRef.current && location && 
            (prevLocationRef.current[0] !== location[0] || prevLocationRef.current[1] !== location[1])) {
            setDataLoading(true);
            // Reset after a short delay to show loading state
            const timer = setTimeout(() => setDataLoading(false), 1000);
            return () => clearTimeout(timer);
        }
        prevLocationRef.current = location;
    }, [location]);

  if(locationLoading || dataLoading){
    return (
      <HomeSkelton />
    )
  }
    return (
        <main className="max-w-7xl mx-auto pb-20 pt-8">

            <Hero />

            <Trending />

            <Reels />

            <TopRated location={location} />

            <Nearby location={location}/>

            <section className="px-4 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <LatestDiscussion />
                <Leaderbaord />
            </section>

            <Reviews />
            
        </main>
    )
}