import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // Not logged in? Redirect to /signup (NOT /login)
  return currentUser ? children : <Navigate to="/signup" replace />;
};

export default PrivateRoute;