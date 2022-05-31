import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LocationParams } from "../../types";

const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();
  let location: LocationParams = useLocation();
  let from = location.state?.from?.path || "/";

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
      <div>
        <h1>LoginScreeen</h1>
        <p>Sem usuario Logado</p>
        <button onClick={handleLogin}>Login</button>
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
