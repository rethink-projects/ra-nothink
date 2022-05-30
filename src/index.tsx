import "./theme/global.css"

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./services/firebase";
import { AuthProvider } from "./context/providers/AuthProvider";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
