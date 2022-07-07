import { BrowserRouter, Routes, Route } from "react-router-dom";
import Images from "./assets";
import AuthProvider from "./context/providers/AuthProvider";

// Services
import RequireAuth from "./services/auth/Auth";

// Screens
import CategoriesScreen from "./screens/categories/CategoriesScreen";
import LoginScreen from "./screens/login/LoginScreen";
import CategoryScreen from "./screens/categories/CategoryScreen";

import AddSnippetScreen from "./screens/snippets/AddSnippetScreen";

// Components
import Layout from "./components/common/Layout/Layout";

function MostLiked() {
  return (
    <div>
      <h1>MostLiked Snippet Screen</h1>
    </div>
  );
}

function SnippetScreen() {
  return (
    <div>
      <h1>SnippetScreen Snippet Screen</h1>
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
