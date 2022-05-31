import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Images from './assets';
import AuthProvider from './context/providers/AuthProvider';
import DashBoardScreen from './screens/dashboard/DashBoardScreen';
import LoginScreen from './screens/login/LoginScreen';
import RequireAuth from './services/auth/Auth';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/">
              <Route index element={<LoginScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/dashboard" element={
                <RequireAuth>
                  <DashBoardScreen />
                </RequireAuth>
              } />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
