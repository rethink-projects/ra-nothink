import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

//styles
import styles from "./Login.module.css";

// login components
import Intro from "./components/intro/Intro";
import Form from "./components/form/Form";
import { ICurrentUser, TypeProvider } from "../../types";

export default function LoginScreen() {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = (type: TypeProvider) => {
    auth.signin(type, () => navigate("/dashboard", { replace: true }));
  };

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem("@nothink:user")!);
    if(localStorageUser){
      auth.setCurrentUser(localStorageUser);
    }
    if(auth.user){
      navigate("/dashboard", { replace: true });
    }
  }, [auth, navigate]);

  return (
    <div className={styles.login_container}>
      <Intro />
      <Form onLogin={handleLogin} />
    </div>
  );
}
