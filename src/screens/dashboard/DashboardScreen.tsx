import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";



export const DashboardScreen = () => {

    const auth = useAuth();
    let navigate = useNavigate();
  
    const onSignout = () => {
      auth.signOut(() => navigate("/"));
    };

  return (
    <div>
      <h1>Dashboard Screen</h1>
      <h2>{auth.user.email}</h2>
      <button onClick={onSignout}> Fazer Logout</button>
    </div>
  );
};
