import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import RequireAuth from "../../../services/auth/Auth";
import Header from "./components/Header";

function Layout() {
  const auth = useAuth();
  console.log(auth);

  return (
    <RequireAuth>
      <>
        <Header />
        {/* Essa tag entende que irá renderizar todo o restante no app.tsx */}
        <Outlet />
      </>
    </RequireAuth>
  );
}

export default Layout;
