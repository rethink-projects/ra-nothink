import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import AuthProvider from "./context/providers/AuthProvider";
import Add from "./screens/dashboard/Add";
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import LoginScreen from "./screens/login/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/">
            <Route index element={<LoginScreen />} />

            <Route path="/login" element={<LoginScreen />} />
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<DashboardScreen />} />
              <Route path="add" element={<Add />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
