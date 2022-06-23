/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Screens
import LoginScreen from "./screens/login/LoginScreen";
import CategoriesScreen from "./screens/categories/CategoriesScreen";

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

function CategoryScreen() {
  return (
    <div>
      <h1>CategoryScreen Screen</h1>
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
            <Route path="/categories" element={<Layout />}>
              <Route index element={<CategoriesScreen />} />
              <Route path=":id" element={<CategoryScreen />} />
              <Route path=":id/add-snnipet" element={<AddSnnipetScreen />} />
              <Route
                path=":id/snnipets/:idSnnipet"
                element={<SnnipetScreen />}
              />
            </Route>
            <Route path="snnipets/liked" element={<MostLiked />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
