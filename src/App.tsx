import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/providers/AuthProvider";
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import LoginScreen from "./screens/login/LoginScreen";
import RequireAuth from "./services/auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/">
            <Route index element={<LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />

            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <DashboardScreen />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
