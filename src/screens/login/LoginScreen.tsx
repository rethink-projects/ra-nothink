import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LocationParams } from '../../types';

const LoginScreen = () => {
    let auth = useAuth();
    let navigate = useNavigate();



    const handleLogin = () => {
        auth.signin({
            name: "Fernando Henrique",
            avatarUrl: "https://images.unsplash.com/photo-1531504755913-927243f59214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            email: "fernando.henrique@rethink.dev"
        }, () => navigate("/dashboard", { replace: true }));
    };

    useEffect(() => {
        let localStorageUser = localStorage.getItem("@nothink:user");
        console.log({ localStorageUser });
        if (localStorageUser) {
            auth.signin(JSON.parse(localStorageUser), () => navigate("/dashboard", { replace: true }))
        }
    }, [auth, navigate])

    if (!auth.user) {
        return (
            <div>
                <h1>Login Screen</h1>
                <button onClick={handleLogin}>Fazer Login</button>
            </div>
        );
    }
    return (
        <div>
            <h1>Login Screen</h1>
            <p>{auth.user?.name}</p>
        </div>
    )
}

export default LoginScreen