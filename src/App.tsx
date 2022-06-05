import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/providers/AuthProvider";

// Screens
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import LoginScreen from "./screens/login/LoginScreen";
import RequireAuth from "./services/auth/Auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Todas as páginas executam a verificação de login do AuthProvider */}
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
    </div>
  );
}

export default App;
