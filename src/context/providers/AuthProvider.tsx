import React, { useState } from "react";
import firebaseInstance from "../../services/firebase";
import { ICurrentUser, TypeProvider } from "../../types";
import { AuthContext } from "../AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = useState<ICurrentUser>(null!);

  let setCurrentUser = (user: ICurrentUser) => {
    setUser(user);
  };

  let signIn = async (type: TypeProvider, callback: VoidFunction) => {
    const newUser = await firebaseInstance.loginWithFirebase(type!);
    setUser({ ...newUser, type });
    localStorage.setItem("@nothink:user", JSON.stringify(newUser));
    callback();
  };

  let signOut = (callback: VoidFunction) => {
    setUser(null!);
    localStorage.removeItem("@nothink:user");
    callback();
  };

  let value = { user, signIn, signOut, setCurrentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
