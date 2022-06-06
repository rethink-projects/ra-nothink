import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import { LoginScreen } from "./screens/login/LoginScreen";
import { DashboardScreen } from "./screens/dashboard/DashboardScreen";
import { Layout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<DashboardScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
