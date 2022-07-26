import { useAuth } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { authState } = useAuth();
  const { token } = authState;
  return token ? (
    children
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};
