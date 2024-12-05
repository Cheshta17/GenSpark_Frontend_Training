import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, role } = useSelector((state) => state.auth);

  // If no user is logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check if the user's role is allowed
  if (allowedRoles && !allowedRoles.includes(role)) {
    // Redirect to unauthorized page or home
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;