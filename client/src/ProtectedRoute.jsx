import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const ProtectedRoute = () => {
  const { loading, isAuth } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!loading && !isAuth) return <Navigate to="/login" replace />;

  return <Outlet />;
};
