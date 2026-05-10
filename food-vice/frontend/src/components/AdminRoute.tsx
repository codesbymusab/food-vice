import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { LoadingDialog } from './Shared/Feedback';

export function AdminRoute() {
  const { user, loading } = useAuth();
  if (loading) return <LoadingDialog message="Verifying admin permissions..." />;
  if (!user || user.role !== 'admin') {
    return <Navigate to="/home" replace />;
  }
  return <Outlet />;
}
