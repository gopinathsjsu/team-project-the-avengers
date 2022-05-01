import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth';

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/join" replace />;
  }

  return children;
};

export default ProtectedRoute