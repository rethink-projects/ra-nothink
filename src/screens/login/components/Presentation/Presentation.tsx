import React from 'react'
import Images from '../../../../assets'
import styles from "./Presentation.module.css"

const Presentation = () => {
  return (
    <div className={styles.container}>
          <p>Anotações rápidas para devs!</p>
          <img src={Images.arrow.default} alt="seta padrão nothink" />
        </div>
  )
}

export default Presentation