import { useEffect, useState } from 'react';
import { fetchModerationThreads, moderateThread } from '../../../apis/moderation';
import type { Thread } from '../../../apis/moderation';

export function ThreadsModerationPage() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    void loadThreads();
  }, []);

  const loadThreads = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchModerationThreads('?status=pending');
      setThreads(data.data || []);
    } catch (err) {
      setError((err as Error).message ?? 'Failed to load threads');
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id: string, action: 'approve' | 'reject' | 'hide') => {
    try {
      await moderateThread(id, action, `${action} by moderator`);
      await loadThreads();
    } catch (err) {
      setError((err as Error).message ?? 'Failed to moderate thread');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Thread Moderation</h1>
      {loading ? (
        <p>Loading pending threads...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="space-y-4">
          {threads.length === 0 ? (
            <div className="rounded-xl border border-slate-200 p-4">No pending threads found.</div>
          ) : (
            threads.map((thread) => (
              <section key={thread._id} className="rounded-xl border border-slate-200 p-4 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{thread.title}</p>
                    <p className="text-sm text-slate-600">{thread.content}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => void handleAction(thread._id, 'approve')} className="rounded-full bg-emerald-500 px-3 py-1 text-white">Approve</button>
                    <button onClick={() => void handleAction(thread._id, 'reject')} className="rounded-full bg-red-500 px-3 py-1 text-white">Reject</button>
                    <button onClick={() => void handleAction(thread._id, 'hide')} className="rounded-full bg-gray-500 px-3 py-1 text-white">Hide</button>
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
