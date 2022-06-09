import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LocationParams } from "../../types";

export default function LoginScreen() {
  let auth = useAuth();
  let navigate = useNavigate();
  let location: LocationParams = useLocation();

  let from = location.state?.from?.path || "/";

  const handleLogin = () => {
    auth.signin(
      {
        name: "Fabiana Kamo",
        email: "fabiana.kamo@rethink.dev",
        avatarURL: "https://avatars.githubusercontent.com/u/102757800?s=96&v=4",
      },
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
  }, [auth, navigate]);

  if (!auth.user) {
    return (
      <div>
        <h1>Login Screen</h1>
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
}
