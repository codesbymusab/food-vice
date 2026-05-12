import { useEffect, useState } from 'react';
import { fetchReports, assignReport, resolveReport } from '../../../apis/moderation';
import type { Report } from '../../../apis/moderation';
import { LoadingDialog } from '../../Shared/Feedback';

export function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('open');

  // Assign modal state
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);
  const [assignTo, setAssignTo] = useState('self');

  // Resolve modal state
  const [resolveModalOpen, setResolveModalOpen] = useState(false);
  const [selectedResolveReportId, setSelectedResolveReportId] = useState<string | null>(null);
  const [resolution, setResolution] = useState('');
  const [escalateToAdmin, setEscalateToAdmin] = useState(false);

  useEffect(() => {
    void loadReports();
  }, [filterStatus]);

  const loadReports = async () => {
    setLoading(true);
    setError('');
    try {
      const query = filterStatus ? `?status=${filterStatus}` : '';
      const data = await fetchReports(query);
      setReports(data.data || []);
    } catch (err) {
      setError((err as Error).message ?? 'Unable to load reports');
    } finally {
      setLoading(false);
    }
  };

  const openAssignModal = (reportId: string) => {
    setSelectedReportId(reportId);
    setAssignTo('self');
    setAssignModalOpen(true);
  };

  const handleAssign = async () => {
    if (!selectedReportId) return;
    
    setActionLoading(true);
    setError('');
    try {
      await assignReport(selectedReportId, assignTo);
      setAssignModalOpen(false);
      await loadReports();
    } catch (err) {
      setError((err as Error).message ?? 'Failed to assign report');
    } finally {
      setActionLoading(false);
    }
  };

  const openResolveModal = (reportId: string) => {
    setSelectedResolveReportId(reportId);
    setResolution('');
    setEscalateToAdmin(false);
    setResolveModalOpen(true);
  };

  const handleResolve = async () => {
    if (!selectedResolveReportId || !resolution.trim()) {
      setError('Please provide a resolution');
      return;
    }

    setActionLoading(true);
    setError('');
    try {
      await resolveReport(selectedResolveReportId, resolution, escalateToAdmin);
      setResolveModalOpen(false);
      await loadReports();
    } catch (err) {
      setError((err as Error).message ?? 'Failed to resolve report');
    } finally {
      setActionLoading(false);
    }
  };

  const getReportTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      'review': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200',
      'thread': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200',
      'user': 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200',
      'restaurant': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200',
    };
    return colors[type] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200';
  };

  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">User Reports</h1>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800"
        >
          <option value="">All Status</option>
          <option value="open">Open</option>
          <option value="escalated">Escalated</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      {loading ? (
        <LoadingDialog message="Loading reports..." />
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
          {error}
        </div>
      ) : (
        <div className="space-y-4">
          {reports.length === 0 ? (
            <div className="rounded-xl border border-slate-200 p-4">
              No {filterStatus ? filterStatus : ''} reports found.
            </div>
          ) : (
            reports.map((report) => (
              <article key={report._id} className="rounded-xl border border-slate-200 p-4 shadow-sm dark:border-slate-700">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${getReportTypeColor(report.type)}`}>
                        {report.type.toUpperCase()}
                      </span>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        report.status === 'open' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200' :
                        report.status === 'escalated' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200' :
                        'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200'
                      }`}>
                        {report.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="font-semibold mb-1">Reported by: {report.reporterId?.name || report.reporterId?.username || 'Unknown'}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1"><strong>Reason:</strong> {report.reason}</p>
                    {report.details && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1"><strong>Details:</strong> {report.details}</p>
                    )}
                    {report.assignedTo && (
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Assigned to: {report.assignedTo.name || report.assignedTo.username}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    {report.status === 'open' && (
                      <>
                        <button
                          onClick={() => openAssignModal(report._id)}
                          className="rounded-full bg-blue-500 px-3 py-1 text-white text-sm font-medium hover:bg-blue-600"
                        >
                          Assign
                        </button>
                        <button
                          onClick={() => openResolveModal(report._id)}
                          className="rounded-full bg-emerald-500 px-3 py-1 text-white text-sm font-medium hover:bg-emerald-600"
                        >
                          Resolve
                        </button>
                      </>
                    )}
                    {report.status === 'escalated' && (
                      <button
                        onClick={() => openResolveModal(report._id)}
                        className="rounded-full bg-emerald-500 px-3 py-1 text-white text-sm font-medium hover:bg-emerald-600"
                      >
                        Resolve
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      )}

      {/* Assign Modal */}
      {assignModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="rounded-xl bg-white p-6 shadow-lg max-w-md w-full mx-4 dark:bg-slate-900">
            <h2 className="text-xl font-bold mb-4">Assign Report</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Assign To</label>
                <select
                  value={assignTo}
                  onChange={(e) => setAssignTo(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 p-2 text-sm dark:border-slate-600 dark:bg-slate-800"
                  disabled={actionLoading}
                >
                  <option value="self">Assign to Me</option>
                  <option value="admin">Escalate to Admin</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button
                onClick={() => setAssignModalOpen(false)}
                disabled={actionLoading}
                className="flex-1 rounded-lg border border-slate-300 py-2 font-medium hover:bg-slate-50 disabled:opacity-50 dark:border-slate-600 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={() => void handleAssign()}
                disabled={actionLoading}
                className="flex-1 rounded-lg bg-blue-500 py-2 font-medium text-white hover:bg-blue-600 disabled:opacity-50"
              >
                {actionLoading ? 'Assigning...' : 'Assign'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resolve Modal */}
      {resolveModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="rounded-xl bg-white p-6 shadow-lg max-w-md w-full mx-4 dark:bg-slate-900">
            <h2 className="text-xl font-bold mb-4">Resolve Report</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Resolution</label>
                <textarea
                  value={resolution}
                  onChange={(e) => setResolution(e.target.value)}
                  placeholder="Describe the resolution action taken..."
                  className="w-full rounded-lg border border-slate-300 p-2 text-sm dark:border-slate-600 dark:bg-slate-800"
                  rows={3}
                  disabled={actionLoading}
                />
              </div>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={escalateToAdmin}
                  onChange={(e) => setEscalateToAdmin(e.target.checked)}
                  className="rounded"
                  disabled={actionLoading}
                />
                <span className="text-sm">Escalate to Admin (if needed)</span>
              </label>
            </div>

            <div className="mt-6 flex gap-2">
              <button
                onClick={() => setResolveModalOpen(false)}
                disabled={actionLoading}
                className="flex-1 rounded-lg border border-slate-300 py-2 font-medium hover:bg-slate-50 disabled:opacity-50 dark:border-slate-600 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={() => void handleResolve()}
                disabled={actionLoading}
                className="flex-1 rounded-lg bg-emerald-500 py-2 font-medium text-white hover:bg-emerald-600 disabled:opacity-50"
              >
                {actionLoading ? 'Resolving...' : 'Resolve'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
