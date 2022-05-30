import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Images from './assets';
import DashBoardScreen from './screens/dashboard/DashBoardScreen';
import LoginScreen from './screens/login/LoginScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginScreen />}></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/dashboard" element={<DashBoardScreen />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
