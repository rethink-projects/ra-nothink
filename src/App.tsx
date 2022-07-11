import { BrowserRouter, Routes, Route } from "react-router-dom";

// Provider
import AuthProvider from "./context/providers/AuthProvider";

// Screens
import LoginScreen from "./screens/login/LoginScreen";

// Categories
import CategoriesScreen from "./screens/categories/CategoriesScreen";
import CategoryScreen from "./screens/categories/CategoryScreen";

// Snnipets
import AddSnnipetScreen from "./screens/snnipets/AddSnnipetScreen";

// Components
import { Layout } from "./components";

function SnnipedScreen() {
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
            <Route path="/categories" element={<Layout />}>
              <Route index element={<CategoriesScreen />} />
              <Route path=":id/add-snnipet" element={<AddSnnipetScreen />} />
              <Route path=":id" element={<CategoryScreen />} />
              <Route
                path=":id/snnipets/:idSnnipet"
                element={<SnnipedScreen />}
              />
              <Route path="snnipets/liked" element={<MostLiked />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
