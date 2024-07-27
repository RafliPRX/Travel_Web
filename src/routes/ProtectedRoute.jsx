import { Navigate, Outlet } from "react-router-dom";
const Protected_Route = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token == null) {
    return <Navigate to={"/"} />;
  }

  return <>{children || <Outlet />}</>;
};

export default Protected_Route;
