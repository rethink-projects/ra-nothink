import styles from "./LoginScreen.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Form from "./components/Form";
import Intro from "./components/Intro";
import { TypeProvider } from "../../types";
import Images from "../../assets";

const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();
  // let screenCssPixelRatio = window.outerWidth / window.innerWidth;

  const handleLogin = (type: TypeProvider) => {
    auth.signin(type, () => navigate("/dashboard", { replace: true }));
  };

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem("@nothink:user")!);
    console.log("Antes", auth.user);
    localStorageUser && auth.setCurrentUser(localStorageUser);
    console.log("Depois", auth.user);
    auth.user && navigate("/dashboard", { replace: true });
  }, [auth, navigate]);


  return (
    <div className={styles.login}>
      <Intro />

      <Form onLogin={handleLogin} />
    </div>
  );
};
export default LoginScreen;
