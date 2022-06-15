import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import RequireAuth from "../../../services/auth/Auth";
import Header from "../Header/Header";

const Layout = () => {
  const auth = useAuth();
  console.log({ auth });
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
