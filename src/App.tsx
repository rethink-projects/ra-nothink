import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import { LoginScreen } from "./screens/login/LoginScreen";
import { DashboardScreen } from "./screens/dashboard/DashboardScreen";
import { Layout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<DashboardScreen />} />
            <Route path="create" element={<CreateSnippetScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//função teste criar tela de snippet, deletar depois

const CreateSnippetScreen = () => {
  return <div>
    <h1>Tela de criação de snnipets</h1>
  </div>;
};

export default App;
