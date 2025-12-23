// ProtectedRoute Component - Route guard for authentication
// Redirects unauthenticated users to login page
// File: src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// ProtectedRoute wrapper component for securing routes
// Props:
//   - children: The component to render if authenticated
//   - isAuthenticated: Boolean flag indicating authentication status
const ProtectedRoute = ({ children, isAuthenticated }) => {
  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
