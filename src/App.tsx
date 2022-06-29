import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/providers/AuthProvider";

// Screens
import CategoriesScreen from "./screens/categories/CategoriesScreen";
import LoginScreen from "./screens/login/LoginScreen";

// Services
import RequireAuth from "./services/auth/Auth";

// Components
import { Layout } from "./components";

function AddSnippetScreen() {
  return <div>Add Snnipet Screen</div>;
}

function SnnipedScreen() {
  return <div>Snnipet Screen</div>;
}

function MostLiked() {
  return <div>Most Liked</div>;
}

function CategoryScreen() {
  return <div>CategoryScreen</div>;
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
              <Route path=":id/add-snnipet" element={<AddSnippetScreen />} />
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
