import styles from "./LoginScreen.module.css";

//components
import Form from "./components/Form/Form";
import Presentation from "./components/Presentation/Presentation";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import { TypeProvider } from "../../types";

export const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = (type: TypeProvider) => {
    auth.signIn(type, () => {
      navigate("/categories", { replace: true });
    });
  };

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem("@nothink:user")!);

    console.log("ANTES", auth.user);

    if (localStorageUser) {
      auth.setCurrentUser(localStorageUser);
    }
    console.log("DEPOIS", auth.user);
    if (auth.user) {
      navigate("/categories", { replace: true });
    }
  }, [auth, navigate]);

  return (
    <div className={styles.container}>
      <Presentation />
      <Form onLogin={handleLogin} />
    </div>
  );
};
