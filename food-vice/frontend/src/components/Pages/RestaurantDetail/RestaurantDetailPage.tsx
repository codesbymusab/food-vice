import { useEffect, useState } from "react";
import { AddReviewForm } from "./AddReviewForm";
import { RatingSummaryCard, type Rating } from "./RatingSummaryCard";
import { ReviewTile, type Review } from "./ReviewTile";
import { Link, useNavigate, useParams } from "react-router";
import GoogleMapReact from "google-map-react";
import { useAuth } from "../../../context/AuthContext";

export type SimilarRestaurant = {

    similarRestaurants: {
        _id: string,
        avgOverall?: number,
        restaurant: {
            _id: string,
            name: string,
            priceCategory: string,

        },
        distKm?: number,
        media?: {
            _id: string,
            url: string,
        }
    }[]
}

type Restaurant = {
    restaurant: {
        _id: string,
        name: string,
        phone?: string,
        website?: string,
        description?: string,
        priceCategory?: string,

    },
    isOpen: boolean,
    openingTime?: string,
    location?: {

        _id: string,
        latitude: number,
        longitude: number,
        address?: string,
        city?: string,
        distKm?: number

    },
    media: {
        _id: string,
        url: string,

    },
    openingHours?:
    {
        _id: string,

        day: string,
        hours: string,
    }[],

    cuisines?:
    {
        cuisine: {
            _id: string,
            name: string
        }
    }[],
    labels?:
    {
        label: {
            _id: string,
            name: string,
            symbol: string
        }
    }[],
    rating?: Rating,
    reviewCount?: number,
    recentReviews:
    Review[],
    userReview: Review

}


export const Marker = ({ text }: { lat: number; lng: number; text: string }) => (
    <div className="w-20 relative">

        <span className="relative material-symbols-outlined text-red-700 text-3xl mt-1">explore_nearby</span>
        <span className="absolute bottom-10 -left-5 w-full text-blue-900 text-[0.8rem] font-extrabold" >{text}</span>

    </div>
);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date()

export function RestaurantDetailPage() {
    const params = useParams();
    const [location, setLocation] = useState<[number, number] | undefined>(undefined);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [restaurantDetails, setRestaurantDetails] = useState<Restaurant | null>(null);
    const [similarRestaurants, setSimilarRestaurants] = useState<SimilarRestaurant | null>(null);
    const [loading, setLoading] = useState<boolean>(true)
    const { user } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (!showReviewForm) {
            window.scrollTo(0, 0);
        }
    }, [showReviewForm]);

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
            }
        );
    }

    async function fetchRestaurant(location: [number, number] | undefined) {
        try {
            const res = await fetch(
                `http://localhost:3000/restaurant/details/${params.id}?lat=${location?.[0]}&lon=${location?.[1]}&userId=${user?.userId}`,
                { credentials: "include" }
            );
            if (res.ok) {
                const { details } = await res.json();
                setRestaurantDetails(details);
                console.log(details)
            }
        } catch (error) {
            console.error(error);
        }
    }


    async function fetchSimilarRestaurants(location: [number, number] | undefined) {
        try {
            const res = await fetch(
                `http://localhost:3000/restaurant/similar/${params.id}?lat=${location?.[0]}&lon=${location?.[1]}`,
                { credentials: "include" }
            );
            if (res.ok) {
                const { details } = await res.json();
                setSimilarRestaurants(details)
                console.log(details)
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchLocation();
    }, []);


    useEffect(() => {
        if (!loading) {
            fetchRestaurant(location);
            fetchSimilarRestaurants(location)
        }

    }, [loading]);


    if (!restaurantDetails) {
        return (
            <div>Loading....</div>
        )
    }
    return (
        <main className="flex-1">

            <div className="relative h-[400px] w-full @container">
                <div className="absolute inset-0 bg-cover bg-center"

                    style={{ backgroundImage: `url(${restaurantDetails?.media.url}`, backgroundSize: 'contain', backgroundRepeat: 'repeat' }}>
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent">
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full px-4 md:px-10 pb-8">
                    <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <span
                                    className="rounded bg-primary px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-background-dark">{restaurantDetails.isOpen ? 'Open Now' : `Closed • ${restaurantDetails.openingTime && `Opens ${restaurantDetails.openingTime}`} `}</span>
                                {restaurantDetails.cuisines?.map((e) => {
                                    return (
                                        <span className="text-lg font-medium text-slate-100" key={e.cuisine._id}>• {e.cuisine.name}</span>
                                    )
                                })}

                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{restaurantDetails?.restaurant.name}</h1>
                            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-200">
                                {restaurantDetails.reviewCount && (<div className="flex items-center gap-1 text-primary">
                                    <span className="material-symbols-outlined fill-1">star</span>
                                    <span className="text-lg font-bold">{(restaurantDetails.rating!.overallRating)}</span>
                                    <span className="text-slate-200 font-normal">{`(${restaurantDetails.reviewCount} reviews)`}</span>
                                </div>)
                                }

                                {restaurantDetails.restaurant.priceCategory !== '' && <span>{restaurantDetails.restaurant.priceCategory}</span>}

                                {restaurantDetails.location?.distKm && (<div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                    <span>{restaurantDetails.location.distKm.toFixed(1)} KM away</span>

                                </div>
                                )}

                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <button
                                className="flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-bold text-white border border-white/20 hover:bg-white/20 transition-all">
                                <span className="material-symbols-outlined text-lg">bookmark</span> Save
                            </button>
                            <button
                                className="flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-bold text-white border border-white/20 hover:bg-white/20 transition-all">
                                <span className="material-symbols-outlined text-lg">share</span> Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="sticky top-[65px] z-40 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
                <div className="mx-auto max-w-7xl px-4 md:px-10">
                    <div className="flex gap-8 overflow-x-auto no-scrollbar py-4">
                        <a className="tab-active text-sm font-bold whitespace-nowrap" href="#">Overview</a>
                        <a className="text-slate-500 hover:text-primary text-sm font-medium whitespace-nowrap"
                            href="#">Reviews</a>
                        <a className="text-slate-500 hover:text-primary text-sm font-medium whitespace-nowrap"
                            href="#">Photos</a>
                        <a className="text-slate-500 hover:text-primary text-sm font-medium whitespace-nowrap"
                            href="#">Reels</a>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 md:px-10 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-10 p-8 rounded-xl">

                        <section>
                            <h3 className="text-xl font-bold mb-4">About the Restaurant</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                {restaurantDetails?.restaurant.description}
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                                {restaurantDetails.labels?.map((e) => {
                                    return (
                                        <div
                                            className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10" key={e.label._id}>
                                            <span className="material-symbols-outlined text-primary">{e.label.symbol}</span>
                                            <span className="text-sm font-medium">{e.label.name}</span>
                                        </div>
                                    )
                                })}


                            </div>
                        </section>
                        {restaurantDetails.rating &&
                            <section
                                className="p-6 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">

                                <RatingSummaryCard rating={restaurantDetails.rating} />
                            </section>
                        }

                        <section>

                            {showReviewForm ? <AddReviewForm setShowReviewForm={setShowReviewForm} />

                                : (


                                    <>

                                        {restaurantDetails.userReview &&
                                            (
                                                <div className="mb-6">
                                                    <h3 className="text-xl font-bold mb-6">Your Review</h3>

                                                    <div className="space-y-8 bg-white rounded-3xl p-4">
                                                        {
                                                           
                                                            <ReviewTile key={restaurantDetails.userReview._id} review={restaurantDetails.userReview} />
                                                            
                                                        }


                                                    </div>
                                                </div>
                                            )}

                                        <div className="flex items-center justify-between mb-6 ">
                                            <h3 className="text-xl font-bold">Recent Reviews</h3>

                                            {!restaurantDetails.userReview && (<button className="flex items-center justify-center gap-2 text-primary font-bold text-sm hover:scale-110" onClick={() => { setShowReviewForm((prev) => !prev) }}>
                                                <span className="material-symbols-outlined text-lg">edit</span> <span className="hover:underline underline-offset-4">Write a Review</span>
                                            </button>)

                                            }
                                        </div>


                                        {restaurantDetails.recentReviews.length > 0 ? <div className="space-y-8 bg-white rounded-3xl p-4">
                                            {
                                                restaurantDetails.recentReviews.map((review) => {
                                                    return <ReviewTile key={review._id} review={review} />
                                                })
                                            }


                                        </div>
                                            :
                                            <div className="mt-24 flex text-xl justify-center items-center text-slate-600 font-bold">
                                                Be the first to review this restaurant
                                            </div>
                                        }
                                    </>

                                )
                            }
                        </section>
                    </div>

                    <aside className="space-y-8">

                        {restaurantDetails.location && (<div
                            className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
                            <div className="h-48 w-full bg-slate-200 relative">
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyBfVwHE1g9wDMtM_1n8aus-TyX_Y5fnfwY" }}

                                    center={{ lat: restaurantDetails.location?.latitude, lng: restaurantDetails.location?.longitude }}
                                    defaultZoom={17}

                                >
                                    <Marker lat={restaurantDetails.location.latitude} lng={restaurantDetails.location.longitude} text={restaurantDetails.restaurant.name} />
                                </GoogleMapReact>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <span className="material-symbols-outlined text-primary mt-1">pin_drop</span>
                                    <div>
                                        <p className="font-bold">{restaurantDetails.location?.address}</p>
                                        <p className="text-sm text-slate-500">Downtown District, CHI 60601</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 mb-4">
                                    <span className="material-symbols-outlined text-primary mt-1">call</span>
                                    <p className="font-medium text-slate-900 dark:text-slate-100">{restaurantDetails.restaurant.phone}</p>
                                </div>
                                <div className="flex items-start gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary mt-1">language</span>
                                    <a className="font-medium text-accent-cyan hover:underline overflow-hidden"
                                        href={restaurantDetails.restaurant.website} target="_blank">{restaurantDetails.restaurant.website}</a>
                                </div>
                                <a href={`https://www.google.com/maps/dir/${location?.[0]},${location?.[1]}/${restaurantDetails.location?.latitude},${restaurantDetails.location?.longitude}`} target="_blank"><button
                                    className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Get
                                    Directions</button></a>
                            </div>
                        </div>
                        )}
                        <div
                            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">schedule</span> Hours
                            </h4>
                            <div className="space-y-2 text-sm">
                                {
                                    restaurantDetails.openingHours?.map((e) => {


                                        return (
                                            <div className={`flex justify-between ${e.day === days[d.getDay()] && 'text-primary font-bold'} `} key={e._id}>
                                                <span>{e.day}</span>
                                                <span>{e.hours}</span>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        {similarRestaurants && similarRestaurants.similarRestaurants.length > 0 && (
                            <div>
                                <h4 className="text-lg font-bold mb-4">People Also Liked</h4>


                                <div className="space-y-4">

                                    {
                                        similarRestaurants?.similarRestaurants.map((r) => {
                                            return (
                                                <div key={r._id} className="flex gap-4 group" onClick={() => navigate(`/restaurant/${r._id}`)}>
                                                    {r.media && (
                                                        <div className="size-20 rounded-lg overflow-hidden flex-shrink-0">
                                                            <img
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"

                                                                src={r.media.url} />

                                                        </div>)}
                                                    <div className="flex flex-col justify-center">
                                                        <p className="font-bold group-hover:text-primary transition-colors">{r.restaurant.name}
                                                        </p>
                                                        <div className="flex items-center gap-1 text-xs text-primary">
                                                            <span className="material-symbols-outlined text-sm fill-1">star</span> {r.avgOverall?.toFixed(1)}
                                                            {r.restaurant.priceCategory !== '' && `• ${r.restaurant.priceCategory}`}
                                                        </div>
                                                        <p className="text-xs text-slate-500">{r.distKm?.toFixed(1)} Km away</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </main>
    )
}