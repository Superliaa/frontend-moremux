import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ isAllowed, redirectToFailed = "/", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectToFailed} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
