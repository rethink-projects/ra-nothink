import { BrowserRouter, Route, Routes } from "react-router-dom";

// Screens
import CategoriesScreen from "./screens/categories/CategoriesScreen";
import CategoryScreen from "./screens/categories/CategoryScreen";
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
              <Route path="/categories" element={<Layout />}>
                {/* Lista de categorias */}
                <Route index element={<CategoriesScreen />} />
                {/* Um categoria escolhida */}
                <Route path=":id" element={<CategoryScreen />} />
                {/* Adicionar snnipet a categoria escolhida */}
                <Route path=":id/add-snnipet" element={<AddSnnipetScreen />} />
                {/* Um snnipet da categoria */}
                <Route
                  path=":id/snnipets/:idSnnipet"
                  element={<SnnipetScreen />}
                />
              </Route>
              <Route path="liked" element={<MostLiked />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
