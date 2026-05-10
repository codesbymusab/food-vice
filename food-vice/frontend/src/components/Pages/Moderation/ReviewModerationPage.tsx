import { useEffect, useState } from 'react';
import { fetchModerationReviews, moderateReview } from '../../../apis/moderation';
import type { Review } from '../../../apis/moderation';
import { useAuth } from '../../../context/AuthContext';

export function ReviewModerationPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    void loadReviews();
  }, []);

  const loadReviews = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchModerationReviews('?status=pending');
      setReviews(data.data || []);
    } catch (err) {
      setError((err as Error).message ?? 'Failed to load reviews');
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id: string, action: 'approve' | 'reject' | 'hide') => {
    try {
      await moderateReview(id, action, `${action} by ${user?.username}`);
      await loadReviews();
    } catch (err) {
      setError((err as Error).message ?? 'Failed to moderate review');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Moderation Reviews</h1>
      {loading ? (
        <p>Loading pending reviews...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="space-y-4">
          {reviews.length === 0 ? (
            <div className="rounded-xl border border-slate-200 p-4">No pending reviews found.</div>
          ) : (
            reviews.map((review) => (
              <section key={review._id} className="rounded-xl border border-slate-200 p-4 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">Review by {review.uid?.name || review.uid?.username || 'Unknown'}</p>
                    <p className="text-sm text-slate-600">{review.text}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => void handleAction(review._id, 'approve')} className="rounded-full bg-emerald-500 px-3 py-1 text-white">Approve</button>
                    <button onClick={() => void handleAction(review._id, 'reject')} className="rounded-full bg-red-500 px-3 py-1 text-white">Reject</button>
                    <button onClick={() => void handleAction(review._id, 'hide')} className="rounded-full bg-gray-500 px-3 py-1 text-white">Hide</button>
                  </div>
                </div>
              </section>
            ))
          )}
        </div>
      )}
    </main>
  );
}
