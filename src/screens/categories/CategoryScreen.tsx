import React, { useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Images from '../../assets';
import { Card, Loading } from '../../components';
import { useData } from '../../context/DataContext'

// Styles
import styles from "./Categories.module.css"

function CategoryScreen() {
    const {fetchSnnipets, snnipets, isLoading} = useData();
    const location = useLocation();
    const navigate = useNavigate();

    const handleData = useCallback(
      async () => {
        const categoryId = location.pathname.replace("/categories/", "");
        console.log(categoryId);
        await fetchSnnipets(categoryId);
      },
      [fetchSnnipets, location.pathname],
    )
    

    useEffect(() => {
        handleData();
      }, [handleData])
      
      console.log({location})

  return (
    <div className={styles.category_container}>
      <div className={styles.category_actions}>
        <img onClick={() => navigate(-1)} src={Images.icons.back} alt="voltar" />
        <span>{`${location.state!}`}</span>
      </div>
      <div className={styles.category_beadcrumb}>
        <span>Categorias</span>
        <img src={Images.icons.back} alt="BreadCrumb" />
        <p>{`${location.state!}`}</p>

      </div>
      {isLoading && <Loading /> }
      {snnipets.length <= 0 && !isLoading && (
        <Loading text="Nenhuma categoria encontrada."/>
      )}

      { !isLoading && snnipets.length > 0 && (
        <div className={styles.render_grid_category} >
          {snnipets.map((snnipet, index) => (
            <Card key={snnipet.id} index={index} snnipet={snnipet} type="snnipet" />
          ))}
        </div>       
      )}
    </div>
  )
}

export default CategoryScreen