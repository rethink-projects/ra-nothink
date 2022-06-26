/* eslint-disable react-hooks/exhaustive-deps */
// import { useNavigate } from 'react-router-dom';

// Context
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext';

// types
import { ICurrentUser } from '../../types';

// components
import { Card, Loading } from '../../components';

// hooks
import { usePageActive } from '../../hooks';

// Styles
import styles from './Dashboard.module.css'
import { useCallback, useEffect } from 'react';


export default function DashboardScreen() {
  const {  fetch, isLoading, categories, isCreating } = useData();
  const auth = useAuth();
  // let navigate = useNavigate();
  const currentUser: ICurrentUser = auth.user;
  // const onSignout = () => {
  //   auth.signout(() => navigate("/"));
  // };

  const fetchCategories = useCallback(
    async () => {
      await fetch()
    },
    [fetch],
  )
  
  useEffect(() => {
    if(categories.length<=0){
      fetchCategories();
    }
  }, [])
  

  if(!currentUser) {
    return <p>Carregando...</p>
  }
  
  return (
    <div className={styles.dashboard_container}>
      {isLoading && <Loading /> }
      {isCreating && <Loading text="Criando categorias..."/>}
      {categories.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Nenhuma categoria encontrada."/>
      )}
      { !isLoading && !isCreating && categories.length > 0 && (
        <div className={styles.render_grid_category}>
          {categories.map((category, index) => (
            // criar component card e listar cards 
            // <h1>{category.title}</h1>
            <Card  key={category.id} index={index} category={category} type={"category"}/>
            ))}
        </div>
      )}
    </div>
  )
}
