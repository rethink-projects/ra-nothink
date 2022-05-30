import { createContext, useContext } from 'react'


export type UserType = {
    name: string;
    email: string;
    avatarUrl: string;
}

interface AuthContextType{
    user: UserType;
    signIn: (newUser: UserType, callback: VoidFunction) => void;
    signOut: (callback: VoidFunction) => void;

}

export const AuthContext = createContext<AuthContextType>(null!);

export const useAuth = () => {

    return useContext(AuthContext)

}



