import { useEffect, useState } from "react";
import { ReelCard } from "./ReelCard";
import { SearchBar } from "../../SearchBar";
import { UploadReelForm } from "./UploadForm";
import { useAuth } from "../../../context/AuthContext";
import { UploadProgressDialog } from "./ProgressDialouge";

type ReelsMode = 'for-you' | 'following' | 'discover'
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
export function ReelsPage() {

    const [reelsMode, setReelsMode] = useState<ReelsMode>('for-you')
    const [showUploadForm, setShowUploadForm] = useState<boolean>(false)
    const [uploading, setUploading] = useState<boolean>(false)
    const [progress, setProgress] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [reels, setReels] = useState<Reel[] | null>(null)
    const [popularTags, setPopularTags] = useState<ReelTag[] | null>(null)

    const { user } = useAuth()

    function changeMode(mode: ReelsMode) {
        if (mode !== reelsMode) setReelsMode(mode)

    }

    async function uploadReel(formData: FormData) {
        try {
            setUploading(true)
            setProgress(0)
            setInterval(() => {
                if (progress < 100) {
                    setProgress(prev => prev + 10)
                }
            }, 1000)
            formData.append("userId", user!.userId)

            const response = await fetch("http://localhost:3000/reels/upload", {
                method: "POST",
                body: formData,
                credentials: "include"
            });

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            const data = await response.json();
            console.log("Reel uploaded:", data);
            setShowUploadForm(false)

            // setReels([...reels, data]);
        } catch (err) {
            console.error("Error uploading reel:", err);
            alert("Failed to upload reel");
        } finally {
            setUploading(false)

        }
    }

    async function fetchPopularTags() {
        try {

            const res = await fetch(
                `http://localhost:3000/reels/tags/popular`,
                { credentials: "include" }
            );
            if (res.ok) {
                const tags = await res.json();
                console.log(tags)
                setPopularTags(tags)
            }
            else {
                throw new Error('Failed to load tags')
            }
        } catch (error) {
            console.error(error);
        }

    }

    async function fetchRecentReels() {
        try {
            setLoading(true)
            const res = await fetch(
                `http://localhost:3000/reels/recent/reels?userId=${user?.userId}`,
                { credentials: "include" }
            );
            if (res.ok) {
                const reels = await res.json();
                console.log(reels)
                setReels(reels)
            }
            else {
                throw new Error('Failed to load recent reels')
            }
        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false)
        }
    }

    async function fetchFollowersReels() {
        try {
            setLoading(true)
            const res = await fetch(
                `http://localhost:3000/reels/followers/reels?userId=${user?.userId}`,
                { credentials: "include" }
            );
            if (res.ok) {
                const reels = await res.json();

                if(reels.length>0){
                    setReels(reels)
                }
                else{
                    await fetchRecentReels()
                }
            }
            else {
                throw new Error('Failed to load followers reels')
            }
        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false)
        }
    }

    async function saveReel(userId: string, reelId: string) {

        try {
            const res = await fetch("http://localhost:3000/save/reel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: userId, reelId: reelId }),
                credentials: "include"
            });

            if (res.ok) {
                console.log(await res.json())
                setReels(prev =>
                    prev
                        ? prev.map(r =>
                            r._id === reelId ? { ...r, isSavedByUser: !r.isSavedByUser, saveCount: r.isSavedByUser ? r.saveCount - 1 : r.saveCount + 1 } : r
                        )
                        : prev
                );
            }
            else {
                throw new Error('Failed to save reel')
            }
        }
        catch (error) {
            console.log(error)
            return false

        }

    }

    async function toggleLikeReel(
        userId: string,
        reelId: string,
        currentLiked: boolean

    ) {

        setReels(prev =>
            prev
                ? prev.map(r =>
                    r._id === reelId ? { ...r, isLikedByUser: !currentLiked, likeCount: currentLiked ? r.likeCount - 1 : r.likeCount + 1 } : r
                )
                : prev
        );

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

            console.log(await res.json());
        } catch (err) {
            console.error(err);

            setReels(prev =>
                prev
                    ? prev.map(r =>
                        r._id === reelId ? { ...r, isLikedByUser: currentLiked, likeCount: currentLiked ? r.likeCount + 1 : r.likeCount - 1 } : r
                    )
                    : prev
            );
        }
    }

    useEffect(() => {
        fetchRecentReels()
        fetchPopularTags()
    }, [])

    
    useEffect(() => {
        fetchReels();
    }, [reelsMode]);


    function fetchReels() {

        if (reelsMode === "following") fetchFollowersReels()
        if (reelsMode === "for-you") fetchRecentReels()
        if (reelsMode === "discover") fetchRecentReels()

    }

    if (loading) return <div>Loading...</div>

    return (
        <main className="flex flex-1 max-w-[1440px] mx-auto w-full">
            {uploading && <UploadProgressDialog progress={progress} />}

            {!showUploadForm && <aside className="bg-white hidden lg:flex w-64 flex-col border-slate-200 dark:border-slate-800 p-4 sticky top-[65px] h-[calc(100vh-65px)]">

                <button
                    className="my-5 flex w-full full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] hover:brightness-110 transition-all shadow-lg shadow-primary/20" onClick={() => setShowUploadForm(prev => !prev)}>
                    <span className="material-symbols-outlined">upload</span>
                    <span>Upload Reel</span>
                </button>

                <div className="flex flex-col gap-1">
                    <button className={`flex items-center gap-3 px-3 py-3 ${reelsMode === 'for-you' ? 'border-b-2 border-primary text-primary bg-primary/5' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                        onClick={() => changeMode('for-you')}>
                        <span className="material-symbols-outlined">home</span>
                        <span className="font-bold">For You</span>
                    </button>
                    <button className={`flex items-center gap-3 px-3 py-3   ${reelsMode === 'following' ? 'border-b-2 border-primary text-primary bg-primary/5' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                        onClick={() => changeMode('following')}>
                        <span className="material-symbols-outlined">group</span>
                        <span className="font-medium">Following</span>
                    </button>
                    <button className={`flex items-center gap-3 px-3 py-3   ${reelsMode === 'discover' ? 'border-b-2 border-primary text-primary bg-primary/5' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                        onClick={() => changeMode('discover')}>
                        <span className="material-symbols-outlined">explore</span>
                        <span className="font-medium">Discover</span>
                    </button>
                </div>
                <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6">
                    <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Suggested Accounts</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 px-3 cursor-pointer hover:scale-110">
                            <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                                <img className="w-full h-full object-cover" data-alt="Female chef portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMZwUbpcv6sU_fuyfAcHkQygO5yJ-L5S7890fP7VUbBEIyGOo45SwdrtdWQoi4C2a_JJJv1fM5U2RP0FZrNQ095xqNC7TuyDStVc2revtNr5qQBBHWj5SsVzVDIJzz0b6wAleupz8Y87JjkFLrOVkWsIozQK0I8NowWJ3G6SelSk3U5N6RLyhy7MZCLJKEwMQPPFCKvhVPxUOP0KS2P4GRI51rv-hqzuU4E4g5qzZODysS0IgFSIPpjpCSrpTJbuFwuzAmuz51s_E" />
                            </div>
                            <div className="flex-1 min-w-0 hover:text-primary">
                                <p className="text-sm font-bold truncate ">Chef Isabella</p>
                                <p className="text-xs text-slate-500 truncate">Pasta Specialist</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-3 cursor-pointer hover:scale-110">
                            <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                                <img className="w-full h-full object-cover" data-alt="Male cook portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxJV5Mcv3xySfjJsKBq0g6Gk2GLv0Q40xj-PiijBkWPNptHdWUp4swrMItg1HKKyd6oFghB5pk5D8MVnYlX351xC8gxrJBbiDT2WFk6yIiDlNzfhr1AmwrZTZBbznFl3yI7HGdZt89s_yvILoXznduIKJ5VQ2_LIRb3ERNIMbbyckfQ8SujJqwi-VqCC1vUdwfDWDVDURvi8kgiwzUHUDbyt-qfb2__fuFuHnxnMStk4PR3Y4F-guH8-EuVnQvcCAkNtGqTy5Ov-g" />
                            </div>
                            <div className="flex-1 min-w-0 hover:text-primary">
                                <p className="text-sm font-bold truncate">GourmetGuy</p>
                                <p className="text-xs text-slate-500 truncate">Street Food Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            }
            <section className="flex-1 flex flex-col md:flex-row min-w-0 overflow-hidden mt-2">
                {showUploadForm ? <UploadReelForm setShowReelForm={setShowUploadForm} onSubmit={uploadReel} /> :
                    <div className="flex-1 overflow-y-auto dark:bg-black/20 p-4 md:p-6 snap-y snap-mandatory scroll-smooth">

                        <SearchBar placeHolder="Search reels, creators, or food tags..." />

                        {
                            reels && reels.map((reel) => {
                                return <ReelCard key={reel._id} reel={reel} saveReel={saveReel} toggleReelLike={toggleLikeReel} />
                            })

                        }



                    </div>
                }
                <div className="mr-10 mt-6 hidden xl:flex w-[380px] flex-col gap-10 rounded-2xl border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark overflow-y-auto sticky top-[0px] h-min">

                    <div className="p-6 rounded-2xl bg-primary text-white">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-white">tag</span>
                            Popular Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">

                            {
                                popularTags && popularTags.map(
                                    (tag) => {
                                        return <span key={tag._id} className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm font-medium hover:bg-white hover:text-primary cursor-pointer transition-colors">{`#${tag.name}`}</span>

                                    }
                                )
                            }

                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}