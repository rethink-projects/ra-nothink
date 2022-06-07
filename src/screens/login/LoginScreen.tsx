import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

//styles
import styles from "./Login.module.css";

// login components
import Intro from "./components/intro/Intro";
import Form from "./components/form/Form";

export default function LoginScreen() {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    auth.signin(
      {
        name: "Felipe Reggiane",
        avatarUrl: "https://www.github.com/FelipeReggiane.png",
        email: "felipe.reggiane@rethink.dev",
      },
      () => navigate("/dashboard", { replace: true })
    );
  };

  useEffect(() => {
    let localStorageUser = localStorage.getItem("@nothink:user");
    console.log({ localStorageUser });
    if (localStorageUser) {
      auth.signin(JSON.parse(localStorageUser), () =>
        navigate("/dashboard", { replace: true })
      );
    }
  }, [auth, navigate]);

  return (
    <div className={styles.login_container}>
      <Intro />
      <Form />
    </div>
  );
}
