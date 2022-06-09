import { createContext, useContext } from "react";

export type UserType = {
  name: string;
  email: string;
  avatarURL: string;
};

// Criando uma interface para receber o contexto e identificar o que esse contexto tem
interface AuthContextType {
  // O tipo do contexto 'AuthContextType' possui o user
  user: UserType;
  signin: (newUser: UserType, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

// Criando um contexto 'AuthContext' do tipo 'AuthContextType' que necessariamente nunca será null
const AuthContext = createContext<AuthContextType>(null!);

// Criando uma função que renderiza o AuthContext
// Essa função vai retornar apenas o contexto que está sendo utilizado
// Função useAuth > useContext (AuthContext) > cria o contexto do tipo AuthContextType > chega o user no AuthContext
function useAuth() {
  return useContext(AuthContext);
}

export { AuthContext, useAuth };
