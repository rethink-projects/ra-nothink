import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const DashboardScreen = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const onSignout = () => {
    auth.signOut(() => navigate("/"));
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{auth.user?.name}</p>
      <button onClick={onSignout}>SignOut</button>
    </div>
  );
};

export default DashboardScreen;
