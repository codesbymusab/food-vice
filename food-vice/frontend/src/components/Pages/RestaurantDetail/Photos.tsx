import { useEffect, useState } from "react"
import { useParams } from "react-router"

type Photo = {
    _id: string,
    url: string,
}
export function Photos() {
    const params = useParams()

    const [photos, setPhotos] = useState<Photo[] | null>(null)

    async function fetchPhotos() {
        try {
            const res = await fetch(
                `http://localhost:3000/restaurant/photos/${params.id}`,
                { credentials: "include" }
            );
            if (res.ok) {
                const { photos } = await res.json();
                console.log(photos)
                setPhotos(photos)
            }
            else {
                throw new Error('Failed to load photos')
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPhotos()
    }, [])

    return (
        <section className="lg:col-span-2 space-y-10 p-8 rounded-xl">

            
            <div className="flex items-center justify-between mb-6 ">

                <h3 className="text-xl font-bold">Photos</h3>

            </div>


            {photos && photos.length > 0 ? <div className="grid grid-cols-3 gap-2 p-4 bg-white rounded-3xl">
                
                {
                    photos!.map((photo) => {
                        return <img alt="Restaurant Photo" key={photo._id} src={photo.url}/>
                    })
                }


            </div>
            :
                <div className="mt-24 flex text-xl justify-center items-center text-slate-600 font-bold">
                    No Photos Uploaded
                </div>
            
            }   
        </section>
    )
}