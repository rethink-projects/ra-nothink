import { Outlet } from "react-router-dom";
import RequireAuth from "../../../services/auth/Auth";
import DataProvider from "../../../context/providers/DataProvider";

import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";

function Layout() {
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
}

export default Layout;
