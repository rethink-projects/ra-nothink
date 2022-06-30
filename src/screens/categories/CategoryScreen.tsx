import React, { useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Loading } from '../../components';
import Card from '../../components/ui/Card/Card';
import { useData } from '../../context/DataContext'

import Images from '../../assets';

import styles from './CategoriesScreen.module.css';

const CategoryScreen = () => {
    const { fetchSnnipets, snnipets, isLoading } = useData();
    const navigate = useNavigate();
    const location = useLocation();


    const handleData = useCallback(
        async () => {
            const categoryId = location.pathname.replace("/categories/", "");
            await fetchSnnipets(categoryId);
        },
        [fetchSnnipets, location.pathname],
    )


    useEffect(() => {
        handleData();
    }, [handleData])

    console.log({ location });

    return (
        <div className={styles.category_container}>
            <div className={styles.category_actions}>
                <img onClick={() => navigate(-1)} src={Images.icons.back} alt="Voltar"></img>
                <span>{`${location.state}`}</span>
            </div>
            <div className={styles.category_breadcrumb}>
                <span>Categorias</span>
                <img src={Images.icons.back} alt="BreadCrumb" />
                <p>{`${location.state}`}</p>
            </div>
            {isLoading && <Loading />}
            {snnipets.length <= 0 && !isLoading && (<Loading text="Nenhuma categoria encontrada." />)}

            {!isLoading && snnipets.length > 0 && (<div className={styles.render_grid_category}>
                {snnipets.map((snnipet, index) => (
                    <Card key={snnipet?.id} index={index} data={{ snnipet }} type="snnipet"></Card>
                ))}

            </div>)
            }
        </div>
    )
}

export default CategoryScreen