import {createContext, useContext} from 'react';

//modelo do usuário da aplicação
export type UserType = {
    name: string;
    email: string;
    avatarUrl: string;
}

// a interface recebe um usuário
interface AuthContextType{
    user: UserType;
    signin: (newUser : UserType, callback : VoidFunction) => void;
    signout: (callback : VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

//retorna o contexto que será utilizado
function useAuth(){
    return useContext(AuthContext);
}

export {AuthContext, useAuth};