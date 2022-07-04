import { BrowserRouter, Route, Routes } from "react-router-dom";

// Screens
import LoginScreen from "./screens/login/LoginScreen";

// Categories
import CategoriesScreen from "./screens/categories/CategoriesScreen";
import CategoryScreen from "./screens/categories/CategoryScreen";

// SnnipetsCount
import AddSnnipetScreen from "./screens/snnipets/AddSnnipetScreen";

// Components
import { Layout } from "./components";

// Providers
import AuthProvider from "./context/providers/AuthProvider";

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
              <Route path=":id/snnipet/:idSnnipet" element={<SnnipetScreen />}/>
            </Route>
            <Route path="snnipets/liked" element={<MostLiked />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
