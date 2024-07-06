import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ role, allowedRole, children }) => {
  if (role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
