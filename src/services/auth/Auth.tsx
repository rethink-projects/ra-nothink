import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';



type RequireAuthType = {
    children: JSX.Element;
}


//Requisito para saber se o usuário está ou não na tela
export const RequireAuth = ({ children}: RequireAuthType) => {
    let auth = useAuth();
    let location = useLocation();

    if(!auth.user){
        return(
            <Navigate to="/login" state={{from: location}} replace/>
        )
    }
    return children;

}