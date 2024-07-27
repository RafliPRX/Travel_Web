import { Navigate, Outlet } from "react-router-dom";
const ProtectedRouteAdmin = ({ children }) => {
  const role = localStorage.getItem("role");
  if (role != "admin") {
    return <Navigate to={"/"} />;
  }

  return <>{children || <Outlet />}</>;
};

export default ProtectedRouteAdmin;
