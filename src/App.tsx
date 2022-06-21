import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import { LoginScreen } from "./screens/login/LoginScreen";
import { DashboardScreen } from "./screens/dashboard/DashboardScreen";
import { Layout } from "./components";


function AddSnnipetScreen() {
  return (
    <div>
      <h1>AddSnnipetScreen Screen</h1>
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<DashboardScreen />} />
            <Route path="add" element={<AddSnnipetScreen />} />
            <Route path=":id" element={<SnnipetScreen />} />
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
