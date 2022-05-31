import { createContext, useContext } from "react";

type UserType = {
  name: string;
  email: string;
  avatarUrl: string;
};

interface AuthContextType {
  user: UserType;
  signOut: (callback: VoidFunction) => void;
  signIn: (newUser: UserType, callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth, AuthContext };
export type { UserType };
