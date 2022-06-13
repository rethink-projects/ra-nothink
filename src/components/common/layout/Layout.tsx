import { Outlet } from "react-router-dom";
import RequireAuth from "../../../services/auth/Auth";

import Wrapper from "../wrapper/Wrapper";
import Header from "../header/Header";

const Layout = () => {
  return (
    <RequireAuth>
      <>
        <Header />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </>
    </RequireAuth>
  );
};

export default Layout;
