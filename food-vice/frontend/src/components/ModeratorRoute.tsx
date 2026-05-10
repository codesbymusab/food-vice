import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { LoadingDialog } from './Shared/Feedback';

export function ModeratorRoute() {
  const { user, loading } = useAuth();
  if (loading) return <LoadingDialog message="Verifying moderator permissions..." />;
  if (!user || (user.role !== 'moderator' && user.role !== 'admin')) {
    return <Navigate to="/home" replace />;
  }
  return <Outlet />;
}
