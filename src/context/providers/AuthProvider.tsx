import React, { useState } from "react";
import firebaseInstance from "../../services/firebase";
import { ICurrentUser, TypeProvider } from "../../types";
import { AuthContext } from "../AuthContext";

// {
//   /* <AuthProvider>
//     O que tiver aqui dentro são children
//     <AlgumComponente/>
//     <AlgumComponente/>
// </AuthProvider> */
// }

// Função AuthProvider seta as informações do usuario do tipo UserType que foi definido pelo AuthContext
function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<ICurrentUser>(null!);

  let setCurrentUser = (user: ICurrentUser) => {
    setUser(user);
  };

  // Função pra setar o usuário na variável user pra ser inserida no Provider
  let signin = async (type: TypeProvider, callback: VoidFunction) => {
    const newUser = await firebaseInstance.loginWithFirebase(type!);
    setUser({ ...newUser, type });
    // Armazenando localmente as informações do usuario
    localStorage.setItem("@nothink:user", JSON.stringify({ ...newUser, type }));
    callback();
  };

  let signout = (callback: VoidFunction) => {
    setUser(null!);
    localStorage.removeItem("@nothink:user");
    callback();
  };

  let value = { user, signin, signout, setCurrentUser };

  // Provider que por sua vez recebe o user e vai transmitir as informações pra outros componentes
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
