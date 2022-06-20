import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ICurrentUser } from "../../types";

type RequiredAuthType = {
  children: JSX.Element;
};

function RequireAuth({ children }: RequiredAuthType) {
  const auth = useAuth();
  let location = useLocation();

  const localStorageUser: ICurrentUser = JSON.parse(
    localStorage.getItem("@nothink:user")!
  );

  useEffect(() => {
    console.log({ localStorageUser })
    if (localStorageUser) {
      auth.setCurrentUser(localStorageUser);
    }
  }, []);

  if (!localStorageUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
