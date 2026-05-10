
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { LoadingDialog } from "./Shared/Feedback";


export function PublicRoute(){
  const { user, loading } = useAuth();
 
  if (loading) return <LoadingDialog message="Checking your session..." />;

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

