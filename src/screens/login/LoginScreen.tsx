import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../../components/LoginButton";
import { useAuth } from "../../context/AuthContext";
import Intro from "./components/Intro";
import Login from "./components/Login";
import Styles from "./LoginScreen.module.css";

const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    auth.signIn(
      {
        name: "Gabriel",
        email: "gabriel.gomes@rethink.dev",
        avatarUrl: "https://avatars.githubusercontent.com/u/82178938?v=4",
      },
      () => navigate("/dashboard", { replace: true })
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

  if (!auth.user) {
    return (
      <div className={Styles.LoginContainer}>
        <Intro />
        <Login login={handleLogin} />
      </div>
    );
  }
  return (
    <div>
      <h1>LoginScreen</h1>
      <p>{auth.user?.name}</p>
    </div>
  );
};

export default LoginScreen;
