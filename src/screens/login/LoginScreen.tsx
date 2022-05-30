import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LocationParams } from "../../types";

export const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();
  let location: LocationParams = useLocation();
  let from = location.state?.from?.path || "/";

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
    //console.log(localStorageUser);
    if (localStorageUser) {
      auth.signIn(JSON.parse(localStorageUser), () =>
        navigate("/dashboard", { replace: true })
      );
    }
  }, [auth, navigate]);

  if (!auth.user) {
    return (
      <div>
        <h1>Login Screen</h1>
        <p>Sem usuário no momento</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
  return (
    <div>
      <p>{auth.user?.name}</p>
    </div>
  );
};
