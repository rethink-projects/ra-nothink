// RequireAuth faz a verificação da tela possuir usuário ou não.

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

type RequireAuthType = {
  children: JSX.Element;
};

// function RequireAuth({children}: {children:ReactNode})
function RequireAuth({ children }: RequireAuthType) {
  let auth = useAuth();
  let location = useLocation();

  // Se a tela não possuir usuario, redireciona para a tela de Login
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Caso possua login, redireciona para a tela desejada
  return children;
}

export default RequireAuth;
