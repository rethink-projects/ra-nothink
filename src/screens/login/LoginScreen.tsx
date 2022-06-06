import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginScreen() {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    auth.signin(
      {
        name: "Felipe Reggiane",
        avatarUrl: "https://www.github.com/FelipeReggiane.png",
        email: "felipe.reggiane@rethink.dev",
      },
      () => navigate("/dashboard", { replace: true })
    );
  };

  useEffect(() => {
    let localStorageUser = localStorage.getItem("@nothink:user");
    console.log({ localStorageUser });
    if (localStorageUser) {
      auth.signin(JSON.parse(localStorageUser), () =>
        navigate("/dashboard", { replace: true })
      );
    }
  }, [auth, navigate]);

  if (!auth.user) {
    return (
      <div>
        <h1>LoginScreen</h1>
        <button onClick={handleLogin}>Fazer Login</button>
      </div>
    );
  }
  return (
    <div>
      <h1>LoginScreen</h1>
      <p>{auth.user?.name}</p>
    </div>
  );
}
