import { Outlet } from 'react-router-dom';

//components
import { Navbar } from '../..';

//context
import { useAuth } from '../../../context/AuthContext'

import { RequireAuth } from '../../../services/auth/Auth';




const Layout = () => {
    const auth = useAuth();
    console.log({auth})


  return (
      <RequireAuth>
          <>
          <Navbar/>
          <Outlet/>
          </>
      </RequireAuth>
  )
}

export default Layout