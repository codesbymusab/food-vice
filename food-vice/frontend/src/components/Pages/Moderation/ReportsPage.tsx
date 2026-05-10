import { useEffect, useState } from 'react';
import { fetchReports, assignReport, resolveReport } from '../../../apis/moderation';
import type { Report } from '../../../apis/moderation';

export function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    void loadReports();
  }, []);

  const loadReports = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchReports('?status=open');
      setReports(data.data || []);
    } catch (err) {
      setError((err as Error).message ?? 'Unable to load reports');
    } finally {
      setLoading(false);
    }
  };

  const handleAssign = async (id: string) => {
    try {
      await assignReport(id, 'self');
      await loadReports();
    } catch (err) {
      setError((err as Error).message ?? 'Assign failed');
    }
  };

  const handleResolve = async (id: string) => {
    try {
      await resolveReport(id, 'Resolved by moderator', false);
      await loadReports();
    } catch (err) {
      setError((err as Error).message ?? 'Resolve failed');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Reports</h1>
      {loading ? (
        <p>Loading reports...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="space-y-4">
          {reports.length === 0 ? (
            <div className="rounded-xl border border-slate-200 p-4">No open reports found.</div>
          ) : (
            reports.map((report) => (
              <article key={report._id} className="rounded-xl border border-slate-200 p-4 shadow-sm">
                <p className="font-semibold">{report.type} report</p>
                <p className="text-sm text-slate-600">Reason: {report.reason}</p>
                <p className="text-sm text-slate-600">Details: {report.details}</p>
                <div className="mt-3 flex gap-2">
                  <button onClick={() => void handleAssign(report._id)} className="rounded-full bg-blue-500 px-3 py-1 text-white">Assign to me</button>
                  <button onClick={() => void handleResolve(report._id)} className="rounded-full bg-emerald-500 px-3 py-1 text-white">Resolve</button>
                </div>
              </article>
            ))
          )}
        </div>
      )}
    </main>
  );
}
