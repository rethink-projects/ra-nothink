import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Images from "../../assets";
import { useAuth } from "../../context/AuthContext";
import { LocationParams } from "../../types";
import Form from "./components/Form/Form";
import Presentation from "./components/Presentation/Presentation";
import styles from "./LoginScreen.module.css";

export const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();
  let location: LocationParams = useLocation();
  let from = location.state?.from?.path || "/";

  const handleLogin = () => {
    auth.signIn(
      {
        name: "Gabriel Melo",
        email: "gabriel.melo@rethink.dev",
        avatarUrl: "https://github.com/gabsrethink.png",
      },
      () => {
        navigate("/dashboard", { replace: true });
      }
    );
  };

  useEffect(() => {
    let localStorageUser = localStorage.getItem("@nothink:user");
    //console.log(localStorageUser);
    if (localStorageUser) {
      auth.signIn(JSON.parse(localStorageUser), () =>
        navigate("/dashboard", { replace: true })
      );
    }
  }, [auth, navigate]);

  if (!auth.user) {
    return (
      <div className={styles.container}>
        <Presentation />
        <Form />
        {/* <button onClick={handleLogin}>Login</button> */}
      </div>
    );
  }
  return (
    <div>
      <p>{auth.user?.name}</p>
    </div>
  );
};
