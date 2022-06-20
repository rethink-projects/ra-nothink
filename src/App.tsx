import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/providers/AuthProvider';
import DashBoardScreen from './screens/dashboard/DashBoardScreen';
import LoginScreen from './screens/login/LoginScreen';

// Components
import { Layout } from './components';
import AddSnnipet from './screens/addSnnipet/AddSnnipet';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/'>
              <Route index element={<LoginScreen />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path="/dashboard" element={<Layout />}>
                <Route index element={<DashBoardScreen />} />
                <Route path='add' element={<AddSnnipet />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
