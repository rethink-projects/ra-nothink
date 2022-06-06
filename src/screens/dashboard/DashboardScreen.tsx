import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components";
import { useAuth } from "../../context/AuthContext";

const DashboardScreen = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const onSignout = () => {
    auth.signOut(() => navigate("/"));
  };
  return (
    <div>
      <NavBar />
      <h1>Dashboard</h1>
      <p>{auth.user?.name}</p>
      <button onClick={onSignout}>SignOut</button>
    </div>
  );
};

export default DashboardScreen;
