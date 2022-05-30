import Images from "./assets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen } from "./screens/login/LoginScreen";
import { DashboardScreen } from "./screens/dashboard/DashboardScreen";
import { RequireAuth } from "./services/auth/Auth";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
