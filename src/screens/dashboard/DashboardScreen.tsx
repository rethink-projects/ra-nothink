// CSS
import styles from "./DashboardScreen.module.css";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ICurrentUser } from "../../types";

export default function DashboardScreen() {
  const auth = useAuth();
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
      <h1>Dashboard</h1>
      <button onClick={onSignout}>Logout</button>
    </div>
  );
}
