import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { TypeProvider } from "../../types";

// CSS
import styles from "./Login.module.css";

// Components
import Intro from "./components/intro/Intro";
import Form from "./components/form/Form";

export default function LoginScreen() {
  let auth = useAuth();
  let navigate = useNavigate();
  // let location: LocationParams = useLocation();
  // let from = location.state?.from?.path || "/";

  const handleLogin = (type: TypeProvider) => {
    auth.signin(type, () => navigate("/dashboard", { replace: true }));
  };

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem("@nothink:user")!);
    if (localStorageUser) {
      auth.setCurrentUser(localStorageUser);
    }
    if (auth.user) {
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
