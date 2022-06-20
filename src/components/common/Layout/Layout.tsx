import React from "react";
import { Outlet } from "react-router-dom";
import DataProvider from "../../../context/providers/DataProvider";
import RequireAuth from "../../../services/auth/Auth";

//Components
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";

const Layout = () => {
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
};

export default Layout;
