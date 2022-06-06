import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Intro from "./components/Intro";
import FormLogin from "./components/FormLogin";
import Styles from "./LoginScreen.module.css";
import { TypeProvider } from "../../types";

const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = (type: TypeProvider) => {
    auth.signIn(type, () => navigate("/dashboard", { replace: true }));
  };

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem("@nothink:user")!);
    if (localStorageUser) {
      auth.setCurrentUser(localStorageUser);
    }
    if (auth.user) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate, auth]);

  return (
    <div className={Styles.login_container}>
      <Intro />
      <FormLogin onLogin={handleLogin} />
    </div>
  );
};

export default LoginScreen;
