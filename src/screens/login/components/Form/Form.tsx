import styles from "./Form.module.css";

import Images from "../../../../assets";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../../context/AuthContext";
import Divider from "../Divider/Divider";

import { LoginButton } from "../../../../components";

const Form = () => {
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
    <div className={styles.container}>
      <div className={styles.social}>
        <img src={Images.icons.linkedin} alt="Linkedin" />
        <img src={Images.icons.instagram} alt="Instagram" />
      </div>
      <div className={styles.form}>
        <img src={Images.logo.default} alt="Logo Nothink" />
        <div className={styles.paragraph}>
          <p>Escolha sua forma de login</p>
        </div>
        <LoginButton type="google" onClick={handleLogin} />
        <Divider />
        <LoginButton type="github" onClick={handleLogin} />
      </div>
    </div>
  );

};

export default Form;
