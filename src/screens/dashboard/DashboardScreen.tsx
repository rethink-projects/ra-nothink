import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const DashboardScreen = () => {
  const auth = useAuth();
  let navigate = useNavigate();

  const onSignout = () => {
    auth.signout(() => navigate("/"));
  };

  return (
    <div>
      <h1>DashboardScreen</h1>
      <h2>{auth.user.avatarURL}</h2>
      <button onClick={onSignout}>Logout</button>
    </div>
  );
};

export default DashboardScreen;
