// import { useNavigate } from 'react-router-dom';

// Context
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext';

// types
import { ICurrentUser } from '../../types';

// components
import { Loading } from '../../components';

// hooks
import { usePageActive } from '../../hooks';

// Styles
import styles from './Dashboard.module.css'

export default function DashboardScreen() {
  const { isCreating, categories } = useData();
  const auth = useAuth();
  // let navigate = useNavigate();
  const currentUser: ICurrentUser = auth.user;
  // const onSignout = () => {
  //   auth.signout(() => navigate("/"));
  // };

  if(!currentUser) {
    return <p>Carregando...</p>
  }


  return (
    <div className={styles.dashboard_container}>
      {isCreating && <Loading text="Criando categorias..."/>}
      {categories.length <= 0 && !isCreating && (
        <Loading text="Nenhuma categoria encontrada."/>
      )}
      {!isCreating && categories.length > 0 && (
        <div className={styles.render_grid_category}>
          {categories.map((category, index) => (
            <p key={index}>{category.title}</p>
          ))}
        </div>
      )}
    </div>
  )
}
