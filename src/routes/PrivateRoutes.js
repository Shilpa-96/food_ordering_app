import { Navigate } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  let authentication = sessionStorage.getItem("Auth Token");
  console.log("auth", authentication, !authentication);
  if (!authentication) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoutes;
