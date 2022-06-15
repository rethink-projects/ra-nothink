import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import RequireAuth from "../../../services/auth/Auth";

const Layout = () => {
  const auth = useAuth();
  console.log({ auth });
  return (
    <RequireAuth>
      <>
        <h1>Header</h1>
        <Outlet />
      </>
    </RequireAuth>
  );
};

export default Layout;
