import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/providers/AuthProvider";

//Screens
import CategoriesScreen from "./screens/categories/CategoriesScreen";

import CategoryScreen from "./screens/categories/CategoryScreen";
import LoginScreen from "./screens/login/LoginScreen";

//components
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
              <Route path=":id/add-snnipet" element={<AddSnnipetScreen />} />
              <Route
                path=":id/snnipets/:idSnnipet"
                element={<SnnipetScreen />}
              />
              <Route path="liked" element={<LikedCategories/>} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

const LikedCategories = () => {
  return (
    <div>
      <h1>LikedCategories</h1>
    </div>
  );
};
const SnnipetScreen = () => {
  return (
    <div>
      <h1>SnnipetScreen</h1>
    </div>
  );
};
const AddSnnipetScreen = () => {
  return (
    <div>
      <h1>AddSnnipetScreen</h1>
    </div>
  );
};

