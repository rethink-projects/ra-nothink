import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/providers/AuthProvider";

// Screens
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import LoginScreen from "./screens/login/LoginScreen";

// Components
import { Layout } from "./components";

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
              <Route path="add" element={<AddSnippetScreen />} />
              <Route path=":id" element={<SnippetScreen />} />
              <Route path="liked" element={<MostLiked />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

function AddSnippetScreen() {
  return (
    <div>
      <h1>SnippetScreen</h1>
    </div>
  );
}

function SnippetScreen() {
  return (
    <div>
      <h1>SnippetScreen</h1>
    </div>
  );
}

function MostLiked() {
  return (
    <div>
      <h1>SnippetScreen</h1>
    </div>
  );
}
