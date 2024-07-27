import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token == null) {
    return <Navigate to={"/"} />;
  }

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
