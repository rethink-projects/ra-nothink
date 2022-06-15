import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import { usePageActive } from '../../hooks';
import { ICurrentUser } from '../../types';

export default function DashboardScreen() {
  const auth = useAuth();
  let navigate = useNavigate();
  const currentUser: ICurrentUser = auth.user;
  const onSignout = () => {
    auth.signout(() => navigate("/"));
  };

  if(!currentUser) {
    return <p>Carregando...</p>
  }


  return (
    <div>
      <h1>Tela do dashboard/outlet</h1>
      <button onClick={onSignout}>Fazer Logout</button>
    </div>
  )
}
