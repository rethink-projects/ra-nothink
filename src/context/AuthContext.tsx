import { createContext, useContext } from 'react';

export type UserType = {
    name: string;
    email: string;
    avatarUrl: string
}

interface AuthContextType {
    user: UserType;
    signin: (newUser: UserType, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

function useAuth() {
    return useContext(AuthContext);
}


export { AuthContext, useAuth }