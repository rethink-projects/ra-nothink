import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import RequireAuth from "../../../services/auth/Auth";
import Header from "../../header/Header";
import Wrapper from "../Wrapper/Wrapper";

function Layout() {
  const auth = useAuth();
  return (
    <RequireAuth>
      <>
        <Header />
        <Wrapper >
        <Outlet />
        </Wrapper>
      </>
    </RequireAuth>
  );
}

export default Layout;
