import { createContext, useContext } from "react";
import { ICurrentUser, TypeProvider } from "../types";

interface AuthContextType {
  user: ICurrentUser;
  signin: (type: TypeProvider, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  setCurrentUser: (user: ICurrentUser) => void;
}

// Criação do contexto
// O contexto será do tipo AuthContextType indicado em <>
// O parâmetro null! avisa que não terá um caso null, garantindo que sempre terá alguma coisa
const AuthContext = createContext<AuthContextType>(null!);

// Função para renderizar o contexto
function useAuth() {
  return useContext(AuthContext);
}

export { AuthContext, useAuth };
