import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// styles
import styles from "./Login.module.css";

// Components
import Form from "./components/form/Form";
import Intro from "./components/intro/Intro";

const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    auth.signin(
      {
        name: "Ana",
        email: "ana.ramos@rethink.dev",
        avatar:
          "https://uploads.spiritfanfiction.com/historias/capitulos/202101/amantes-ou-inimigos-21561631-260120211846.jpg",
      },
      // essa callback é chamada quando o usuário faz login
      // essa callback leva o usuário para o dashboard após o login
      () => navigate("/dashboard", { replace: true })
    );
  };

  useEffect(() => {
    let localStorageUser = localStorage.getItem("@nothink:user");
    if (localStorageUser) {
      auth.signin(JSON.parse(localStorageUser), () =>
        navigate("/dashboard", { replace: true })
      );
    }
  }, []);

  return (
    <div className={styles.login_container}>
      <Intro />
      <Form />
    </div>
  );
};

export default LoginScreen;
