import { useEffect, useState } from 'react';
import { fetchModerationReviews, moderateReview, banUser } from '../../../apis/moderation';
import type { Review } from '../../../apis/moderation';
import { useAuth } from '../../../context/AuthContext';
import { LoadingDialog } from '../../Shared/Feedback';

export function ReviewModerationPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const { user } = useAuth();

  // Ban modal state
  const [banModalOpen, setBanModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [selectedUserName, setSelectedUserName] = useState<string>('');
  const [banReason, setBanReason] = useState('');
  const [banDuration, setBanDuration] = useState('permanent');
  const [banUntil, setBanUntil] = useState('');

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
    setActionLoading(true);
    setError('');
    try {
      await moderateReview(id, action, `${action} by ${user?.username}`);
      await loadReviews();
    } catch (err) {
      setError((err as Error).message ?? 'Failed to moderate review');
    } finally {
      setActionLoading(false);
    }
  };

  const openBanModal = (userId: string, userName: string) => {
    setSelectedUserId(userId);
    setSelectedUserName(userName);
    setBanReason('');
    setBanDuration('permanent');
    setBanUntil('');
    setBanModalOpen(true);
  };

  const handleBan = async () => {
    if (!selectedUserId || !banReason.trim()) {
      setError('Please provide a ban reason');
      return;
    }

    setActionLoading(true);
    setError('');
    try {
      const until = banDuration === 'temporary' ? banUntil : undefined;
      await banUser(selectedUserId, banReason, until);
      setBanModalOpen(false);
      await loadReviews();
    } catch (err) {
      setError((err as Error).message ?? 'Failed to ban user');
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Moderation Reviews</h1>
      {loading ? (
        <LoadingDialog message="Loading pending reviews..." />
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
          {error}
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.length === 0 ? (
            <div className="rounded-xl border border-slate-200 p-4">No pending reviews found.</div>
          ) : (
            reviews.map((review) => (
              <section key={review._id} className="rounded-xl border border-slate-200 p-4 shadow-sm dark:border-slate-700">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold">{review.uid?.name || review.uid?.username || 'Unknown'}</p>
                      {review.uid?.banned && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded dark:bg-red-900 dark:text-red-200">
                          BANNED
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{review.text}</p>
                    {review.flags && review.flags.length > 0 && (
                      <p className="text-xs text-amber-600 dark:text-amber-400">
                        🚩 Flagged {review.flags.length} time(s)
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => void handleAction(review._id, 'approve')}
                        disabled={actionLoading}
                        className="rounded-full bg-emerald-500 px-3 py-1 text-white text-sm font-medium hover:bg-emerald-600 disabled:opacity-50"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => void handleAction(review._id, 'reject')}
                        disabled={actionLoading}
                        className="rounded-full bg-red-500 px-3 py-1 text-white text-sm font-medium hover:bg-red-600 disabled:opacity-50"
                      >
                        Reject
                      </button>
                      <button 
                        onClick={() => void handleAction(review._id, 'hide')}
                        disabled={actionLoading}
                        className="rounded-full bg-gray-500 px-3 py-1 text-white text-sm font-medium hover:bg-gray-600 disabled:opacity-50"
                      >
                        Hide
                      </button>
                    </div>
                    {!review.uid?.banned && (
                      <button
                        onClick={() => openBanModal(review.uid._id, review.uid.name || review.uid.username || 'User')}
                        className="rounded-full bg-orange-500 px-3 py-1 text-white text-sm font-medium hover:bg-orange-600"
                      >
                        Ban User
                      </button>
                    )}
                  </div>
                </div>
              </section>
            ))
          )}
        </div>
      )}

      {/* Ban Modal */}
      {banModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="rounded-xl bg-white p-6 shadow-lg max-w-md w-full mx-4 dark:bg-slate-900">
            <h2 className="text-xl font-bold mb-4">Ban User: {selectedUserName}</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Reason for Ban</label>
                <textarea
                  value={banReason}
                  onChange={(e) => setBanReason(e.target.value)}
                  placeholder="Explain why this user is being banned..."
                  className="w-full rounded-lg border border-slate-300 p-2 text-sm dark:border-slate-600 dark:bg-slate-800"
                  rows={3}
                  disabled={actionLoading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Ban Duration</label>
                <select
                  value={banDuration}
                  onChange={(e) => setBanDuration(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 p-2 text-sm dark:border-slate-600 dark:bg-slate-800"
                  disabled={actionLoading}
                >
                  <option value="permanent">Permanent</option>
                  <option value="temporary">Temporary</option>
                </select>
              </div>

              {banDuration === 'temporary' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Ban Until</label>
                  <input
                    type="datetime-local"
                    value={banUntil}
                    onChange={(e) => setBanUntil(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 p-2 text-sm dark:border-slate-600 dark:bg-slate-800"
                    disabled={actionLoading}
                  />
                </div>
              )}
            </div>

            <div className="mt-6 flex gap-2">
              <button
                onClick={() => setBanModalOpen(false)}
                disabled={actionLoading}
                className="flex-1 rounded-lg border border-slate-300 py-2 font-medium hover:bg-slate-50 disabled:opacity-50 dark:border-slate-600 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={() => void handleBan()}
                disabled={actionLoading}
                className="flex-1 rounded-lg bg-orange-500 py-2 font-medium text-white hover:bg-orange-600 disabled:opacity-50"
              >
                {actionLoading ? 'Banning...' : 'Ban User'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
