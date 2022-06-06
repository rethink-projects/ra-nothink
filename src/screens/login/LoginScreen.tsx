import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen() {
  let auth = useAuth();
  let navigate = useNavigate();
 
  const handleLogin = () => {
    auth.signin({
      name: "Sthephany", 
      avatarUrl: "https://www.github.com/sthephanytezza-dev.png", 
      email: "sthephany.tezza@rethink.dev"
    }, 
      () => navigate("/dashboard", {replace: true})
    );
  }

  useEffect(() => {
    let localStorageUser = localStorage.getItem("nothink:user");

    if(localStorageUser){
      auth.signin(
        JSON.parse(localStorageUser),
        () => navigate("/dashboard", {replace: true}
      ));
    }
  }, [auth, navigate]);

  if(!auth.user){
    return(
      <div>
        <h1>Login Screen</h1>
        <p>Sem usuário no momento</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Login Screen</h1>
      <p>{auth.user?.name}</p>
    </div>
  )
}
