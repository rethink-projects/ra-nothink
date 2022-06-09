import { BrowserRouter, Routes, Route } from "react-router-dom";

// Screens
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import LoginScreen from "./screens/login/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route index element={<LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
