import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// Components
import Intro from "./components/intro/Intro";

export default function LoginScreen() {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    auth.signin(
      {
        name: "Filipe Prado",
        avatarUrl: "https://www.github.com/filiperethink.png",
        email: "filipe.prado@rethink.dev",
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

  return (
    <div>
      <Intro />
    </div>
  );
}
