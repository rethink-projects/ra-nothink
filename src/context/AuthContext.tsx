import { createContext, useContext } from "react";
import { ICurrentUser, TypeProvider } from "../types";

interface AuthContextType {
  user: ICurrentUser;
  signin: (type: TypeProvider, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  setCurrentUser: (user: ICurrentUser) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

function useAuth() {
  return useContext(AuthContext);
}

export { AuthContext, useAuth };
