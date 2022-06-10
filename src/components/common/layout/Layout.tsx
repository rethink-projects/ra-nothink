import { Outlet } from "react-router-dom";

//components
import { Navbar } from "../..";

//context
import { useAuth } from "../../../context/AuthContext";

import { RequireAuth } from "../../../services/auth/Auth";
import Wrapper from "../wrapper/Wrapper";

const Layout = () => {
  const auth = useAuth();
  console.log({ auth });

  return (
    <RequireAuth>
      <>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </>
    </RequireAuth>
  );
};

export default Layout;
