import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { ICurrentUser } from "../../../types";

const DashboardScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const currentUser: ICurrentUser = auth.user;

  const onSignout = () => {
    auth.signout(() => navigate("/"));
  };

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Tela de Dashboard / Outlet</h1>
      <button onClick={onSignout}>Fazer Logout</button>
    </div>
  );
};

export default DashboardScreen;
