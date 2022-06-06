import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

type RequireAuthType = {
    children: JSX.Element;
}


function RequireAuth({children} : RequireAuthType){
    let auth = useAuth();
    let location = useLocation();

    if(!auth.user){
        return <Navigate to="/login" state={{from: location}} replace />;
    }

    return children;
}

export default RequireAuth;