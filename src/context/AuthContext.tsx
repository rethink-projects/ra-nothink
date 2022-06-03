import { createContext, useContext } from "react";
import { ICurrentUser, TypeProvider } from "../types";

interface AuthContextType {
  user: ICurrentUser;
  signIn: (type: TypeProvider, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
  setCurrentUser: (user: ICurrentUser) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const useAuth = () => {
  return useContext(AuthContext);
};
