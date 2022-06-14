import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ICurrentUser } from "../../types";

const DashboardScreen = () => {
  const auth = useAuth();
  let navigate = useNavigate();

  const currentUser: ICurrentUser = auth.user;

  const onSignout = () => {
    auth.signout(() => navigate("/"));
  };

  return (
    <div>
      <h1>DashboardScreen</h1>
      <h2>{currentUser.email}</h2>
      <button onClick={onSignout}>Logout</button>
    </div>
  );
};

export default DashboardScreen;
