// RequireAuth faz a verificação da tela possuir usuário ou não.

import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ICurrentUser } from "../../types";

type RequireAuthType = {
  children: JSX.Element;
};

// function RequireAuth({children}: {children:ReactNode})
function RequireAuth({ children }: RequireAuthType) {
  let auth = useAuth();
  let location = useLocation();

  // Pegando o usuario salvo do localStorage
  const localStorageUser: ICurrentUser = JSON.parse(
    localStorage.getItem("@nothink:user")!
  );

  useEffect(() => {
    if (localStorageUser) {
      auth.setCurrentUser(localStorageUser);
    }
  }, []);

  // Se a tela não possuir usuario, redireciona para a tela de Login
  if (!localStorageUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Caso possua login, redireciona para a tela desejada
  return children;
}

export default RequireAuth;
