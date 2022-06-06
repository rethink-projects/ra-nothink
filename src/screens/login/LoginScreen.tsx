import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import { ICurrentUser, LocationParams, TypeProvider } from '../../types';

// Styles
import styles from "./Login.module.css"

// Components
import Intro from './components/intro/Intro';
import Form from './components/form/Form';


const LoginScreen = () => {
    let auth = useAuth();
    let navigate = useNavigate();



    const handleLogin = (type: TypeProvider) => {
        auth.signin(type, () => navigate("/dashboard", { replace: true }));
    };

    useEffect(() => {
        let localStorageUser = JSON.parse(localStorage.getItem("@nothink:user")!);
        if (localStorageUser) {
            auth.setCurrentUser(localStorageUser)

        }
        if (auth.user) {
            navigate("/dashboard", { replace: true })
        }
    }, [auth, navigate])

    return (
        <div className={styles.login_container}>
            <Intro />
            <Form onLogin={handleLogin} />
        </div>
    );

}

export default LoginScreen