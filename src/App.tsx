import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/providers/AuthProvider";

//Screens
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import LoginScreen from "./screens/login/LoginScreen";

//components
import { Layout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* <Route path="/">
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
          </Route> */}

          <Route path="/">
            <Route index element={<LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<DashboardScreen />} />
              <Route path="liked" element={<DashboardScreen />} />
              <Route path="add" element={<DashboardScreen />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

const SnnipetScreen = () => {
  return (
    <div>
      <h1>Snnipet Screen</h1>
    </div>
  );
};
