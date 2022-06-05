import { createContext, useContext } from "react";

export type UserType = {
  name: string;
  email: string;
  avatar: string;
};

interface AuthContextType {
  user: UserType;
  signin: (newUser: UserType, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
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
