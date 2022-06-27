import { Outlet } from "react-router-dom";

//components
import { Header } from "../..";

//context
import { useAuth } from "../../../context/AuthContext";
import { DataProvider } from "../../../context/providers/DataProvider";

import { RequireAuth } from "../../../services/auth/Auth";
import Wrapper from "../wrapper/Wrapper";

const Layout = () => {
  const auth = useAuth();
  console.log({ auth });

  return (
    <RequireAuth>
      <DataProvider>
        <Header />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </DataProvider>
    </RequireAuth>
  );
};

export default Layout;
