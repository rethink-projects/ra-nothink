import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/providers/AuthProvider";

//Screens
import CategoriesScreen from "./screens/categories/CategoriesScreen";
import LoginScreen from "./screens/login/LoginScreen";

//Components
import { Layout } from "./components";

function AddSnnipetScreen() {
  return <div>Add Snnipet Screen</div>;
}

function SnnipetScreen() {
  return <div>Snnipet Screen</div>;
}

function MostLiked() {
  return <div>Most Liked</div>;
}

function CategoryScreen() {
  return <div>Category Screen</div>;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/">
            <Route index element={<LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            {/* categories */}
            <Route path="/categories" element={<Layout />}>
              <Route index element={<CategoriesScreen />} />
              {/* categories/123hindksa/ */}
              <Route path=":id" element={<CategoryScreen />} />
              {/* categories/123hindksa/add-snnipet */}
              <Route path=":id/add-snnipet" element={<AddSnnipetScreen />} />
              {/* categories/123hindksa/snnipet/123jsdi */}
              <Route
                path=":id/snnipets/:idSnnipet"
                element={<SnnipetScreen />}
              />
            </Route>
            {/* snnipets/liked */}
            <Route path="snnipets/liked" element={<MostLiked />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
