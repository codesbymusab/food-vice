import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

type ReelComment = {
  _id: string;
  text: string;
  createdAt: string;
  user: {
    _id: string;
    name: string;
    profilePhoto?: string;
  };
  likeCount: number;
  isLikedByUser: boolean;
};

export function ReelCommentsSheet({
  reelId,
  setShowComments,
  setCommentCount
}: {
  reelId: string;
  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
  setCommentCount:React.Dispatch<React.SetStateAction<number>>;
}) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<ReelComment[]>([]);
  const { user } = useAuth();

  async function fetchComments() {
    try {
      const res = await fetch(
        `http://localhost:3000/comments/${reelId}?userId=${user!.userId}`
      );
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      } else {
        throw new Error("Failed to load comments");
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  async function postComment() {
    if (!newComment.trim()) return;
    try {
      const res = await fetch(`http://localhost:3000/comments/${reelId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user!.userId, text: newComment }),
      });
      if (!res.ok) throw new Error("Failed to post comment");
      setNewComment("");
      fetchComments();
      setCommentCount(prev=>prev+1)
      
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  }

  async function toggleCommentLike(commentId: string) {
    try {
      const res = await fetch(`http://localhost:3000/like/reel/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commentId, userId: user!.userId }),
      });
      if (!res.ok) throw new Error("Failed to toggle comment like");
      fetchComments();
    } catch (error) {
      console.error("Error toggling comment like:", error);
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="w-full absolute bottom-0 bg-black/60 flex items-end justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-t-2xl p-6 overflow-y-auto max-h-[70vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-tertiary">Comments</h2>
          <button
            onClick={() => setShowComments(false)}
            className="text-sm text-red-500 hover:bg-red-200 p-2 rounded font-bold"
          >
            Close
          </button>
        </div>

        <div className="space-y-4">
          {comments.map((c) => (
            <>
            <div key={c._id} className="flex items-start gap-3">
              <img
                src={c.user.profilePhoto}
                alt={c.user.name}
                className="size-8 rounded-full border border-outline"
              />
              <div className="flex-1">
                <p className="text-sm font-bold text-on-surface">{c.user.name}</p>
                <p className="text-xs text-on-surface-variant">{c.text}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    className={`size-6 rounded-full flex items-center justify-center ${
                      c.isLikedByUser
                        ? "bg-primary/20 text-primary"
                        : "bg-black/10 text-slate-600"
                    }`}
                    onClick={() => toggleCommentLike(c._id)}
                  >
                    <span className="material-symbols-outlined text-lg">thumb_up</span>
                  </button>
                  <span className="text-xs font-bold text-on-surface-variant">
                    {c.likeCount}
                  </span>
                </div>
              </div>
              
            </div>
            <div className="border-b-2 rounded-3xl border-primary/40 w-full"></div>
            </>
          ))}
        </div>

    
        <div className="mt-6 flex items-center gap-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border border-outline rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={postComment}
            className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/80 transition-colors"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
