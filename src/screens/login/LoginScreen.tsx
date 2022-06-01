import styles from "./LoginScreen.module.css";
import NavBar from "../../components/NavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Images from "../../assets";
import LoginButton from "../../components/ui/loginbuttons/LoginButton";

const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();
  // let screenCssPixelRatio = window.outerWidth / window.innerWidth;

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
                  <LoginButton
                    type="google"
                    underDivider
                    onClick={handleLogin}
                  />
                  <LoginButton
                    type="github"
                    
                    onClick={handleLogin}
                  />

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
