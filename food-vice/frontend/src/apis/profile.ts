export async function fetchUserProfile(userId: string) {
    try {
        const res = await fetch(`http://localhost:3000/user/profile/${userId}`, {
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error("Failed to load user profile");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchSavedRestaurants(userId: string) {
    try {
        const res = await fetch(`http://localhost:3000/restaurant/saved?userId=${userId}`, {
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error("Failed to load saved restaurants");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchUserReels(userId: string) {
    try {
        const res = await fetch(`http://localhost:3000/reels/${userId}`, {
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error("Failed to load user reels");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchUserReviews(userId: string) {
    try {
        const res = await fetch(`http://localhost:3000/reviews/user/${userId}`, {
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error("Failed to load user reviews");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function editUserProfile(formData: FormData) {
    try {
        const res = await fetch("http://localhost:3000/user/edit", {
            method: "PUT",
            body: formData,
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error("Failed to update profile");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
