import { Navigate, Outlet } from "react-router-dom";
const Routed_Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token == null) {
    return <Navigate to={"/"} />;
  }

  return <>{children || <Outlet />}</>;
};

export default Routed_Protected;
