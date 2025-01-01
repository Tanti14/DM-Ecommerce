import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useManagement } from "./context/ManagementContext";

export const ProtectedCheckout = () => {
  const { cart } = useManagement();

  if (cart.length === 0) return <Navigate to="/" replace />;

  return <Outlet />;
};
