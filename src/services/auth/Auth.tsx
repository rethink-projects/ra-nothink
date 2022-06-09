import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

type RequiredAuthType = {
  children: JSX.Element;
};

function RequireAuth({ children }: RequiredAuthType) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
