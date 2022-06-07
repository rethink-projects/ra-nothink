import { Outlet } from "react-router-dom";
import { Header } from "../..";
import RequireAuth from "../../../services/auth/Auth";
import Wrapper from "../Wrapper/Wrapper";

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
