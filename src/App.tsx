import React from "react";
import Images from "./assets";

function App() {
  return (
    <div>
      <img src={Images.logo.default} alt="logo padrão Nothink" />
      <h3>Anotações rápidas para devs!</h3>
    </div>
  );
}

export default App;
