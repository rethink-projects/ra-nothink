import {Navbar} from "../../components";
import { useAuth } from "../../context/AuthContext";



export const DashboardScreen = () => {

    const auth = useAuth();

  return (
    <div>
      <Navbar/>
      <h1>Dashboard Screen</h1>
      <h2>{auth.user.email}</h2>
    </div>
  );
};
