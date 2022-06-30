import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import { Layout } from "./components";

//screens
import { LoginScreen } from "./screens/login/LoginScreen";
import { CategoriesScreen } from "./screens/categories/CategoriesScreen";
import { CategoryScreen } from "./screens/categories/CategoryScreen";
import { AddSnnipetScreen } from "./screens/snnipets/AddSnnipetScreen";

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
      <Routes>
        <Route path="/">
          <Route index element={<LoginScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/categories" element={<Layout />}>
            <Route index element={<CategoriesScreen />} />
            <Route path=":id" element={<CategoryScreen />} />
            <Route path=":id/add-snnipet" element={<AddSnnipetScreen />} />
            <Route path=":id/snnipets/:idSnnipet" element={<SnnipetScreen />} />
            <Route path="liked" element={<MostLiked />} />
            <Route path="create" element={<CreateSnippetScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//função teste criar tela de snippet, deletar depois

const CreateSnippetScreen = () => {
  return (
    <div>
      <h1>Tela de criação de snnipets</h1>
    </div>
  );
};

export default App;
