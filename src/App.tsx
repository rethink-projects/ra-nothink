import React from "react";
import Imagens from "./assets";

function App() {
  return (
    <div>
      <img src={Imagens.logo.default} alt="Logo Padrão Rethink" />
      <h3>Anotações rápidas para devs!</h3>
    </div>
  );
}

export default App;
