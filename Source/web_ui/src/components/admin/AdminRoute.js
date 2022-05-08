import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, isAdmin } from '../auth';

const AdminRoute = ({ children }) => {
  if (!isAuthenticated() || !isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute