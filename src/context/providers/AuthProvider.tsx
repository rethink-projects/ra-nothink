import React, { useState } from "react";
import { AuthContext } from "../AuthContext";
import firebaseInstance from "../../services/firebase";
import { ICurrentUser, TypeProvider } from "../../types";

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<ICurrentUser>(null!);

  let setCurrentUser = (user: ICurrentUser) => {
    setUser(user);
  };

  let signin = async (type: TypeProvider, callback: VoidFunction) => {
    const newUser = await firebaseInstance.loginWithFirebase(type!);
    setUser({ ...newUser, type });
    localStorage.setItem("@nothink:user", JSON.stringify({ ...newUser, type }));
    callback();
  };

  let signout = (callback: VoidFunction) => {
    setUser(null!);
    localStorage.removeItem("@nothink:user");
    callback();
  };

  let value = { user, signin, signout, setCurrentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
