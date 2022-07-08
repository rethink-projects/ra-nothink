import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/providers/AuthProvider";

// Screens

// Login
import LoginScreen from "./screens/login/LoginScreen";

// Categories
import CategoriesScreen from "./screens/categories/CategoriesScreen";
import CategoryScreen from "./screens/categories/CategoryScreen";

// Snippets
import AddSnippetScreen from "./screens/snippets/AddSnippetScreen";

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
            <Route path="/categories" element={<Layout />}>
              <Route index element={<CategoriesScreen />} />
              <Route path=":id" element={<CategoryScreen />} />
              <Route path=":id/add-snippet" element={<AddSnippetScreen />} />
              <Route
                path=":id/snippets/:idSnippet"
                element={<SnippetScreen />}
              />
            </Route>
            <Route path="snippets/liked" element={<MostLiked />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

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
