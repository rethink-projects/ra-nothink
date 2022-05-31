import { useNavigate } from "react-router-dom";
import styles from "./LoginButton.module.css";
import Images from "../../../../assets";
import Divider from "../Divider/Divider";
import { useAuth } from "../../../../context/AuthContext";
import { useEffect } from "react";

const LoginButton = () => {
  let auth = useAuth();
  let navigate = useNavigate();
  
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
    console.log(localStorageUser);
    if (localStorageUser) {
      auth.signIn(JSON.parse(localStorageUser), () =>
        navigate("/dashboard", { replace: true })
      );
    }
  }, [auth, navigate]);

  return (
    <div>
      <button className={styles.google} onClick={handleLogin}>
        <img src={Images.icons.google} alt="Google" /> Entrar com Google
      </button>
      <Divider />
      <button className={styles.github} onClick={handleLogin}>
        <img src={Images.icons.github} alt="Github" /> Entrar com Github
      </button>
    </div>
  );
};

export default LoginButton;
