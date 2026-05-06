export type ReelsMode = 'for-you' | 'following' | 'discover'
export type ReelTag = {

    _id: string,
    name: string

}
export type Reel = {

    _id: string,
    title: string,
    description: string,
    tags:
    ReelTag[]
    ,
    createdAt: string,
    user: {
        _id: string,
        name: string,
        username: string,
        profilePhoto: string
    },
    likeCount: number,
    commentCount: number,
    saveCount: number,
    isLikedByUser: boolean,
    videoUrl: string,
    isSavedByUser: boolean,
    views: number

}

export async function fetchRecentReels({ userId }: { userId: string }) {
    try {

        const res = await fetch(
            `http://localhost:3000/reels/recent/reels?userId=${userId}`,
            { credentials: "include" }
        );
        if (res.ok) {
            const reels = await res.json();
            return reels

        }
        else {
            throw new Error('Failed to load recent reels')
        }
    } catch (error) {
        console.error(error);
    }

}


export async function updateViews({ reelId }: { reelId: string }) {
    try {
        await fetch(`http://localhost:3000/reels/${reelId}/view`, {
            method: "POST"
        });
    } catch (error) {
        console.error("Error tracking view:", error);
    }
}


export async function fetchComments({ userId, reelId }: { userId: string, reelId: string }) {
    try {
        const res = await fetch(
            `http://localhost:3000/comments/${reelId}?userId=${userId}`
        );
        if (res.ok) {
            const data = await res.json();
            return data
        } else {
            throw new Error("Failed to load comments");
        }
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
}

export async function postComment({ reelId, userId, newComment }: { reelId: string, userId: string, newComment: string }) {
    if (!newComment.trim()) return;
    try {
        const res = await fetch(`http://localhost:3000/comments/${reelId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: userId, text: newComment }),
        });
        if (!res.ok) throw new Error("Failed to post comment");


    } catch (error) {
        console.error("Error posting comment:", error);
    }
}

export async function toggleCommentLike({ commentId, userId }: { commentId: string, userId: string }) {
    try {
        const res = await fetch(`http://localhost:3000/like/reel/comment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ commentId, userId: userId }),
        });
        if (!res.ok) throw new Error("Failed to toggle comment like");

    } catch (error) {
        console.error("Error toggling comment like:", error);
    }
}



export async function uploadReel({ formData, userId }: { formData: FormData, userId: string }) {
    try {

        formData.append("userId", userId)

        const response = await fetch("http://localhost:3000/reels/upload", {
            method: "POST",
            body: formData,
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error("Upload failed");
        }

        await response.json();

    } catch (err) {
        console.error("Error uploading reel:", err);

    }
}

export async function fetchPopularTags() {
    try {

        const res = await fetch(
            `http://localhost:3000/reels/tags/popular`,
            { credentials: "include" }
        );
        if (res.ok) {
            const tags = await res.json();
            return tags
        }
        else {
            throw new Error('Failed to load tags')
        }
    } catch (error) {
        console.error(error);
    }

}


export async function fetchFollowersReels({ userId }: { userId: string }) {
    try {

        const res = await fetch(
            `http://localhost:3000/reels/followers/reels?userId=${userId}`,
            { credentials: "include" }
        );
        if (res.ok) {
            const reels = await res.json();

            return reels;

        }
        else {
            throw new Error('Failed to load followers reels')
        }
    } catch (error) {
        console.error(error);
    }

}

export async function saveReel(userId: string, reelId: string) {

    try {
        const res = await fetch("http://localhost:3000/save/reel", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: userId, reelId: reelId }),
            credentials: "include"
        });

        if (!res.ok) {

            throw new Error('Failed to save reel')
        }
    }
    catch (error) {
        console.log(error)
        return false

    }

}

export async function toggleLikeReel({ userId, reelId }: {
    userId: string,
    reelId: string,

}

) {



    try {
        const res = await fetch("http://localhost:3000/like/reel", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: userId, reelId: reelId }),
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error("Failed to update like");
        }

    } catch (err) {
        console.error(err);

    }
}



export async function fetchReels({ reelId }: { reelId: string }) {
    try {
        const res = await fetch(
            `http://localhost:3000/restaurant/reels/${reelId}`,
            { credentials: "include" }
        );
        if (res.ok) {
            const { reels } = await res.json();
            return reels
        }
        else {
            throw new Error('Failed to load Reels')
        }
    } catch (error) {
        console.error(error);
    }
}