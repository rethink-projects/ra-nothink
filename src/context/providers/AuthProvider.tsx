import { ReactNode, useState } from "react";
import { callbackify } from "util";
import { AuthContext, UserType } from "../AuthContext";

{
  /* <AuthProvider>
    O que tiver aqui dentro são children
    <AlgumComponente/>
    <AlgumComponente/>
</AuthProvider> */
}

// Função AuthProvider seta as informações do usuario do tipo UserType que foi definido pelo AuthContext
function AuthProvider({ children }: { children: ReactNode }) {
  let [user, setUser] = useState<UserType>(null!);

  // Função pra setar o usuário na variável user pra ser inserida no Provider
  let signin = (newUser: UserType, callback: VoidFunction) => {
    setUser(newUser);
    // Armazenando localmente as informações do usuario
    localStorage.setItem("@nothink:user", JSON.stringify(newUser));
    callback();
  };

  let signout = (callback: VoidFunction) => {
    setUser(null!);
    localStorage.removeItem("@nothink:user");
    callback();
  };

  let value = { user, signin, signout };

  // Provider que por sua vez recebe o user e vai transmitir as informações pra outros componentes
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
