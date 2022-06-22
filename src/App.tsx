import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/providers/AuthProvider";

//Screens
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import LoginScreen from "./screens/login/LoginScreen";

//Components
import { Layout } from "./components";

function AddSnnipetScreen() {
  return <div>Add Snnipet Screen</div>;
}

function SnnipetScreen() {
  return <div>Snnipet Screen</div>;
}

function MostLiked() {
  return <div>Most Liked</div>;
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
