import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/providers/AuthProvider';
import CategoriesScreen from './screens/categories/CategoriesScreen';
import LoginScreen from './screens/login/LoginScreen';
import CategoryScreen from './screens/categories/CategoryScreen';

// Components
import { Layout } from './components';


function AddSnnipetScreen() {
  return (
    <div>
      <h1>AddSnnipetScreen</h1>
    </div>
  )
}

function SnnipetScreen() {
  return (
    <div>
      <h1>SnnipetScreen</h1>
    </div>
  )
}

function MostLiked() {
  return (
    <div>
      <h1>MostLiked</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/'>
              <Route index element={<LoginScreen />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path="/categories" element={<Layout />}>
                <Route index element={<CategoriesScreen />} />
                <Route path=':id' element={<CategoryScreen />} />
                <Route path=':id/add-snnipet' element={<AddSnnipetScreen />} />
                <Route path=':id/snnipets/:idSnnipet' element={<SnnipetScreen />} />
              </Route>
              <Route path='snnipetsliked' element={<MostLiked />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
