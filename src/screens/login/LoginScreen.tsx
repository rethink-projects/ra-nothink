import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// styles
import styles from "./Login.module.css";

// Components
import Form from "./components/form/Form";
import Intro from "./components/intro/Intro";
import { ICurrentUser, TypeProvider } from "../../types";
import { parse } from "path";

const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = (type: TypeProvider) => {
    auth.signin(
      type,
      // essa callback é chamada quando o usuário faz login
      // essa callback leva o usuário para o dashboard após o login
      () => navigate("/dashboard", { replace: true })
    );
  };

  useEffect(() => {
    let localStorageUser = JSON.parse(localStorage.getItem("@nothink:user")!);
    console.log("Antes ", auth.user);

    if (localStorageUser) {
      auth.setCurrentUser(localStorageUser);
    }
    console.log("Depois ", auth.user);
    if (auth.user) {
      navigate("/dashboard", { replace: true });
    }

    // const parseCurrentUser: ICurrentUser = JSON.parse(localStorageUser!);
  }, [auth, navigate]);

  return (
    <div className={styles.login_container}>
      <Intro />
      <Form onLogin={handleLogin} />
    </div>
  );
};

export default LoginScreen;
