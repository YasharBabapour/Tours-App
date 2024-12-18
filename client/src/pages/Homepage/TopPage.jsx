import React from 'react'
import tourImage from '../../assets/img/headhome.jpg'
import styles from './HomePage.module.css'
import { NavLink } from 'react-router-dom'
export const TopPage = () => {
  return (
    <div className={styles.TopPage}>
      <img src={tourImage} alt="" />
      <div className={styles.Content}>
         <span className={styles.Travel}>بگرد ، کشف کن ، سفر کن</span>
         <h1 className={styles.Maz}>  را تجربه کن سفر در مازندران</h1>
         <NavLink className={styles.ReadBtn} to="/" >
            خواندن بیشتر...
         </NavLink >
      </div>
    </div>
  )
}
