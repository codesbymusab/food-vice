const API_BASE = import.meta.env.VITE_API_BASE


export async function fetchUserProfile(userId: string) {
    try {
        const res = await fetch(`${API_BASE}/user/profile/${userId}`, {
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
        const res = await fetch(`${API_BASE}/restaurant/saved?userId=${userId}`, {
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
        const res = await fetch(`${API_BASE}/reels/${userId}`, {
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
        const res = await fetch(`${API_BASE}/reviews/user/${userId}`, {
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
        const res = await fetch(`${API_BASE}/user/edit`, {
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
