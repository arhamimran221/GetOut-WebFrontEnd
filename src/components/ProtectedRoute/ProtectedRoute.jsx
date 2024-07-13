import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({allowedRole, children }) => {
  const role = localStorage.getItem("role");

  if (role !== allowedRole) {
    return <Navigate to="/login-host" replace />;
  }

  return children;
};

export default ProtectedRoute;
