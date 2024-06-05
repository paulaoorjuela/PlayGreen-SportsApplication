import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // You can customize this with a spinner or a loading screen
  }

  return user ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
