import React, { useState } from "react";
import { AuthContext, UserType } from "../AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = useState<UserType>(null!);

  let signIn = (newUser: UserType, callback: VoidFunction) => {
    localStorage.setItem("@nothink:user", JSON.stringify(newUser));
    setUser(newUser);
    callback();
  };

  let signOut = (callback: VoidFunction) => {
    setUser(null!);
    localStorage.removeItem("@nothink:user");
    callback();
  };

  let value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
