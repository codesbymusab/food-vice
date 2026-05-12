import { useEffect, useState } from 'react';
import { fetchAuditLogs } from '../../../apis/admin';
import type { AuditLog } from '../../../apis/admin';
import { LoadingDialog } from '../../Shared/Feedback';

export function AuditLogsPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    void loadLogs();
  }, []);

  const loadLogs = async () => {
    setLoading(true);
    try {
      const data = await fetchAuditLogs();
      setLogs(data.data || []);
    } catch (err) {
      setError((err as Error).message ?? 'Failed to load audit logs');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Audit Logs</h1>
      {loading ? (
        <LoadingDialog message="Loading audit logs..." />
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="space-y-4">
          {logs.length === 0 ? (
            <div className="rounded-xl border border-slate-200 p-4">No audit logs available.</div>
          ) : (
            logs.map((log) => (
              <article key={log._id} className="rounded-xl border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">{log.action}</p>
                    <p className="text-sm text-slate-600">Actor: {log.actorRole}</p>
                  </div>
                  <p className="text-xs text-slate-500">{new Date(log.createdAt).toLocaleString()}</p>
                </div>
                <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-100 p-3 text-xs text-slate-700">{JSON.stringify(log.metadata || {}, null, 2)}</pre>
              </article>
            ))
          )}
        </div>
      )}
    </main>
  );
}
