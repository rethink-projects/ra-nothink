import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ICurrentUser } from "../../types";

type RequireAuthType = {
  children: JSX.Element;
};

function RequireAuth({ children }: RequireAuthType) {
    let auth = useAuth();
    let location = useLocation();

    const localStorageUser: ICurrentUser = JSON.parse(
      localStorage.getItem("@nothink:user")!
    )

    useEffect(() => {
      if(localStorageUser){
        auth.setCurrentUser(localStorageUser);
      }


    }, [])

    if(!localStorageUser){
        return <Navigate to="/login" state={{from: location}} replace />
    }

    return children;
}

export default RequireAuth;