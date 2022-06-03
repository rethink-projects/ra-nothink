import { Outlet } from "react-router-dom";
import RequireAuth from "../../../services/auth/Auth";

function Layout() {
  return (
    <RequireAuth>
      <>
        <h1>Header do NOTHINK</h1>
        <Outlet />
      </>
    </RequireAuth>
  );
}

export default Layout;
