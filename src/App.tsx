import { BrowserRouter, Routes, Route } from "react-router-dom";

// Screens
import LoginScreen from "./screens/login/LoginScreen";
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import AuthProvider from "./context/providers/AuthProvider";

// Services
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
