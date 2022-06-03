/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Screens
import LoginScreen from "./screens/login/LoginScreen";
import DashboardScreen from "./screens/dashboard/DashboardScreen";

// Components
import { Layout } from "./components";

// Provider
import AuthProvider from "./context/providers/AuthProvider";

function AddSnnipetScreen() {
  return (
    <div>
      <h1>Add Snnipet Screen</h1>
    </div>
  );
}

function MostLiked() {
  return (
    <div>
      <h1>MostLiked Snnipet Screen</h1>
    </div>
  );
}

function SnnipetScreen() {
  return (
    <div>
      <h1>SnnipetScreen Snnipet Screen</h1>
    </div>
  );
}

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
              <Route path="add" element={<AddSnnipetScreen />} />
              <Route path=":id" element={<SnnipetScreen />} />
              <Route path="liked" element={<MostLiked />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
