
import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";


export function ProtectedRoute(){
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <div>Loading...</div>;
   
  if (!user) {

    if(location.pathname === "/signup"){
       return <Navigate to="/auth/signup" replace />;
    }
    
    return <Navigate to="/auth/login" replace />;
  
  }

  return <Outlet />;
};

