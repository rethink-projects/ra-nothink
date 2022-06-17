import React from "react";
import { Outlet } from "react-router-dom";
import RequireAuth from "../../../services/auth/Auth";
import Header from "./components/Header";

const Layout = () => {
  return (
    <RequireAuth>
      <>
        <Header />
        <Outlet />
      </>
    </RequireAuth>
  );
};

export default Layout;
