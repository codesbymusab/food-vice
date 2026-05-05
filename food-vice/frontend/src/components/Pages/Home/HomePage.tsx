import { useEffect, useState } from 'react'
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
    
    const [location, setLocation] = useState<[number, number] | null>(null);
    const [loading, setLoading] = useState<boolean>(true)
  
    function fetchLocation() {
    if (!navigator.geolocation) {
      console.error("Geolocation not supported");
      setLoading(false)
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation([latitude, longitude]);
        setLoading(false)
      },
      (error) => {
        console.error("Error getting user location:", error);
        setLoading(false)
        throw new Error("Error getting user location")
        
      }
    );
  }

  useEffect(()=>{
    fetchLocation()
  },[])

  if(loading){
    return <div>Loading...</div>
  }
    return (
        <main className="max-w-7xl mx-auto pb-20 pt-8">

            <Hero />

            <Trending />

            <Reels />

            <TopRated location={location!} />

            <Nearby location={location!}/>

            <section className="px-4 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <LatestDiscussion />
                <Leaderbaord />
            </section>

            <Reviews />
            
        </main>
    )
}