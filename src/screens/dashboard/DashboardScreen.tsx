import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useAuth } from "../../context/AuthContext";



export const DashboardScreen = () => {

    const auth = useAuth();
    let navigate = useNavigate();
  
    const onSignout = () => {
      auth.signOut(() => navigate("/"));
    };

  return (
    <div>
      <Navbar/>
      <h1>Dashboard Screen</h1>
      <h2>{auth.user.email}</h2>
    </div>
  );
};
