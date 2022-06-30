
import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loading } from '../../components';
import Card from '../../components/ui/Card/Card';
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext';
import { ICurrentUser } from '../../types';
import styles from './CategoriesScreen.module.css';

export default function CategoriesScreen() {
    const auth = useAuth();
    const currentUser: ICurrentUser = auth.user;
    const { isCreating, categories, fetch, isLoading } = useData();
    const location = useLocation();

    const fetchCategories = useCallback(
        async () => {
            await fetch()
        },
        [fetch],
    )

    useEffect(() => {
        if (categories.length <= 0) {
            fetchCategories()
        }
    }, []);

    console.log({ location });


    if (!currentUser) {
        return <p>Carregando...</p>
    }

    return (
        <div className={styles.dashboard_container}>
            {isLoading && <Loading />}
            {isCreating && <Loading text="Criando categoria..." />}
            {categories.length <= 0 && !isCreating && !isLoading && (<Loading text="Nenhuma categoria encontrada." />)}

            {!isLoading && !isCreating && categories.length > 0 && (<div className={styles.render_grid_category}>
                {categories.map((category, index) => (
                    <Card key={category?.id} index={index} data={{ category }} type="category"></Card>
                ))}

            </div>)
            }
        </div >
    )
}