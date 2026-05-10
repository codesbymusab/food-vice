
import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";
import { LoadingDialog } from "./Shared/Feedback";


export function ProtectedRoute(){
  const { user, loading } = useAuth();
  const location = useLocation();
  
  if (loading) return <LoadingDialog message="Verifying your account..." />;
   
  if (!user) {

    if(location.pathname === "/signup"){
       return <Navigate to="/auth/signup" replace />;
    }
    
    return <Navigate to="/auth/login" replace />;
  
  }

  return <Outlet />;
};

