import { createContext, useContext } from "react";
import { ICurrentUser, TypeProvider } from "../types";

// a interface recebe um usuário
interface AuthContextType {
  user: ICurrentUser;
  signin: (type: TypeProvider, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  setCurrentUser: (user: ICurrentUser) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

//retorna o contexto que será utilizado
function useAuth() {
  return useContext(AuthContext);
}

export { AuthContext, useAuth };
