import styles from "./LoginScreen.module.css";
import NavBar from "../../components/NavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Images from "../../assets";

const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    auth.signin(
      {
        name: "Lucas Araújo",
        avatarUrl: "https://www.github.com/lucaspaula6.png",
        email: "lucas.paula@rethink.dev",
      },
      () => navigate("/dashboard", { replace: true })
    );
  };

  useEffect(() => {
    let localStorageUser = localStorage.getItem("@nothink:user");
    if (localStorageUser) {
      auth.signin(JSON.parse(localStorageUser), () => {
        navigate("/dashboard", { replace: true });
      });
    }
  }, [auth, navigate]);

  if (!auth.user) {
    return (
      <>
        <div>
          <div className={styles.login}>
            <div className={styles.left_side}>
              <h1>
                Anotações rápidas <br></br>para devs!{" "}
              </h1>
              <img src={Images.icons.arrow} />
            </div>
            <div className={styles.right_side}>
              
              <div className={styles.inside}>
              
                <img src={Images.logo.default} />

                <p>Escolha sua forma de login</p>

                <div className={styles.login_options}>
                  <div className={styles.google_login} onClick={handleLogin}>
                    <img src={Images.icons.google} />
                    Entrar com Google
                  </div>

                  <div className={styles.divisoria}>
                    <img src={Images.icons.hl} />
                    ou
                    <img src={Images.icons.hl} />
                  </div>
                  <div className={styles.git_login} onClick={handleLogin}>
                    <img src={Images.icons.github} />
                    Entrar com GitHub
                  </div>
                  <div className={styles.social_media}>
                    <img src={Images.icons.linkedin} />
                    <img src={Images.icons.instagram} />

              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <h1>Login Screen</h1>
      <p>{auth.user?.name}</p>
    </div>
  );
};

export default LoginScreen;
