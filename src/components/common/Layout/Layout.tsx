import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import RequireAuth from "../../../services/auth/Auth";
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";

function Layout() {
  const auth = useAuth();
  console.log(auth);

  return (
    <RequireAuth>
      <>
        <Header />
        <Wrapper>
          {/* Essa tag entende que irá renderizar todo o restante no app.tsx */}
          <Outlet />
        </Wrapper>
      </>
    </RequireAuth>
  );
}

export default Layout;
