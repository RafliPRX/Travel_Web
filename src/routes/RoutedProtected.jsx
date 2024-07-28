import { Navigate, Outlet } from "react-router-dom";
const Routed_Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return <>{children || <Outlet />}</>;
};

export default Routed_Protected;
