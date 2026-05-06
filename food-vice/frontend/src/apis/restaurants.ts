import type { Filter } from "../components/Pages/Explore/ExplorePage";

export type TopRatedRestaurant =
    {
        _id: string,
        name: string,
        distKm: number,
        avgOverall: number,
        cuisines: string[],
        priceCategory: string,
        isOpen?: boolean,
        openingTime?: string
        media?: {
            _id: string,
            url: string,
        },
        latitude: number,
        longitude: number,
        isSaved: boolean

    }

export type RecommendedRestaurant = TopRatedRestaurant


export async function fetchTopRatedRestaurants({ userId, filters, location }: { userId: string, filters: Filter, location: [number, number] | null }) {
    try {
        const res = await fetch(
            `http://localhost:3000/restaurant/toprated?lat=${location?.[0]}&lon=${location?.[1]}&cuisine=${filters.cuisine}&price=${filters.price}&rating=${filters.rating}&dist=${filters.dist}&userId=${userId}`,
            { credentials: "include" }
        );
        if (res.ok) {
            const { details } = await res.json();
            return details

        }
    } catch (error) {
        console.error(error);
    }
}

export async function fetchRecommendedRestaurants({ userId, filters, location }: { userId: string, filters: Filter, location: [number, number] | null }) {
    try {
        const res = await fetch(
            `http://localhost:3000/restaurant/recommended?lat=${location?.[0]}&lon=${location?.[1]}&cuisine=${filters.cuisine}&price=${filters.price}&rating=${filters.rating}&dist=${filters.dist}&userId=${userId}`,
            { credentials: "include" }
        );
        if (res.ok) {
            const { details } = await res.json();
            console.log(details)
            return details;

        }
    } catch (error) {
        console.error(error);
    }
}

export async function saveRestaurant({ userId, restId }: { userId: string, restId: string }) {

    try {
        const res = await fetch("http://localhost:3000/save/restaurant", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: userId, restId: restId }),
            credentials: "include"
        });

        if (!res.ok) {

            throw new Error('Failed to save restaurant')
        }
    }

    catch (error) {
        console.log(error)
        return false

    }

}


export async function fetchPhotos({ restId }: { restId: string }) {
    try {
        const res = await fetch(
            `http://localhost:3000/restaurant/photos/${restId}`,
            { credentials: "include" }
        );
        if (res.ok) {
            const { photos } = await res.json();
            return photos
        }
        else {
            throw new Error('Failed to load photos')
        }
    } catch (error) {
        console.error(error);
    }
}

export async function fetchRestaurantDetails({ restaurantId, location, userId }: { restaurantId: string; location: [number, number] | null; userId?: string }) {
    try {
        const res = await fetch(
            `http://localhost:3000/restaurant/details/${restaurantId}?lat=${location?.[0]}&lon=${location?.[1]}&userId=${userId}`,
            { credentials: "include" }
        );

        if (!res.ok) {
            throw new Error('Failed to load restaurant details');
        }

        const { details } = await res.json();
        return details;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchSimilarRestaurants({ restaurantId, location }: { restaurantId: string; location: [number, number] | null }) {
    try {
        const res = await fetch(
            `http://localhost:3000/restaurant/similar/${restaurantId}?lat=${location?.[0]}&lon=${location?.[1]}`,
            { credentials: "include" }
        );

        if (!res.ok) {
            throw new Error('Failed to load similar restaurants');
        }

        const { details } = await res.json();
        return details;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

