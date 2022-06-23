import { Outlet } from "react-router-dom";
import RequireAuth from "../../../services/auth/Auth";

import Wrapper from "../wrapper/Wrapper";
import Header from "../header/Header";
import DataProvider from "../../../context/providers/DataProvider";

const Layout = () => {
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
