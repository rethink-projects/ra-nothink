import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function DashboardScreen() {
  const auth = useAuth();
  let navigate = useNavigate();

  const onSignout = () => {
    auth.signout(() => navigate("/"));
  };

  return (
    <div>
      <h1>Dahsboard Screen</h1>
      <h2>{auth.user.name}</h2>
      <button onClick={onSignout}>Fazer Logout</button>
    </div>
  );
}
