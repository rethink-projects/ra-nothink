import { BrowserRouter, Route, Routes } from "react-router-dom";

// Screens
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import LoginScreen from "./screens/login/LoginScreen";
import AuthProvider from "./context/providers/AuthProvider";

// Components
import Layout from "./components/common/Layout/Layout";

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
      <h1>SnnipetScreen</h1>
    </div>
  );
}

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
    </div>
  );
}

export default App;
