import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// Styles
import styles from "./Login.module.css";

// Components
import Intro from "./components/intro/Intro";
import Form from "./components/form/Form";

import { TypeProvider } from "../../types";

export default function LoginScreen() {
  let auth = useAuth();
  let navigate = useNavigate();

  //console.log({ auth });

  const handleLogin = (type: TypeProvider) => {
    auth.signin(type, () => navigate("/categories", { replace: true }));
  };

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem("@nothink:user")!);
    if (localStorageUser) {
      auth.setCurrentUser(localStorageUser);
    }
    if (auth.user) {
      navigate("/categories", { replace: true });
    }
  }, [auth, navigate]);

  //console.log(auth.user);

  // if (!auth.user) {
  //   return (
  //     <div>
  //       <h1>Login Screen</h1>
  //       <button onClick={handleLogin}>Fazer Login</button>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.login_container}>
      {/* <h1>Login Screen</h1>
      <p>{auth.user?.name}</p> */}
      <Intro />
      <Form onLogin={handleLogin} />
    </div>
  );
}
