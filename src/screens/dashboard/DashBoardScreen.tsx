import { Loading } from '../../components';
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext';
import { ICurrentUser } from '../../types';
import styles from './DashBoard.module.css';

export default function DashBoardScreen() {
    const auth = useAuth();
    const currentUser: ICurrentUser = auth.user;
    const { isCreating, categories } = useData();


    if (!currentUser) {
        return <p>Carregando...</p>
    }

    return (
        <div className={styles.dashboard_container}>
            {isCreating && <Loading text="Criando categoria..." />}
            {categories.length <= 0 && !isCreating && (<Loading text="Nenhuma categoria encontrada." />)}
            {!isCreating && categories.length > 0 && (<div className={styles.render_grid_category}>
                {categories.map((category, index) => (
                    <p key={index}>{category.title}</p>
                ))}
            </div>)}
        </div>
    )
}