import React from "react";
import { useAuth } from "../Hooks/Auth/useAuth";
import Loader from "../Components/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
