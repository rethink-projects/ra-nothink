import React, { useState } from "react";
import firebaseInstance from "../../services/firebase";
import { ICurrentUser, TypeProvider } from "../../types";
import { AuthContext } from "../AuthContext";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ICurrentUser>(null!);

  const setCurrentUser = (user: ICurrentUser) => {
    setUser(user);
  };
  const signin = async (type: TypeProvider, callback: VoidFunction) => {
    const newUser = await firebaseInstance.loginWithFirebase(type);
    setUser({ ...newUser, type });
    localStorage.setItem("@nothink:user", JSON.stringify({ ...newUser, type }));
    callback();
  };

  const signout = (callback: VoidFunction) => {
    setUser(null!);
    localStorage.removeItem("@nothink:user");
    callback();
  };

  const value = { user, signin, signout, setCurrentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
