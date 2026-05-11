import { useEffect, useState } from 'react';
import { fetchAdminUsers, setUserRole } from '../../../apis/admin';
import type { User } from '../../../apis/admin';

const ROLE_OPTIONS: readonly ('user' | 'moderator' | 'admin')[] = ['user', 'moderator', 'admin'];

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchAdminUsers();
      setUsers(data.data || []);
    } catch (err) {
      setError((err as Error).message ?? 'Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, role: 'user' | 'moderator' | 'admin') => {
    try {
      await setUserRole(userId, role);
      await loadUsers();
    } catch (err) {
      setError((err as Error).message ?? 'Failed to update role');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="space-y-4">
          {users.length === 0 ? (
            <div className="rounded-xl border border-slate-200 p-4">No users found.</div>
          ) : (
            users.map((user) => (
              <article key={user._id} className="rounded-xl border border-slate-200 p-4 shadow-sm flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">{user.name || user.username}</p>
                  <p className="text-sm text-slate-600">{user.email}</p>
                </div>
                <select
                  value={user.role || 'user'}
                  onChange={(e) => void handleRoleChange(user._id, e.target.value as 'user' | 'moderator' | 'admin')}
                  className="rounded-xl border border-slate-300 px-3 py-2"
                >
                  {ROLE_OPTIONS.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </article>
            ))
          )}
        </div>
      )}
    </main>
  );
}
