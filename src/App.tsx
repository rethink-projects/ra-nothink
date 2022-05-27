import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Imagens from "./assets";
import Dashboard from "./screens/dashboard/Dashboard";
import LoginScreen from "./screens/login/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
