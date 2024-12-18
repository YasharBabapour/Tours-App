import React from 'react'
import styles from './NavBar.module.css'
export const NavBox = ({children}) => {
  return (
   <div className={styles.NavBox}>
      {children}
   </div>
  )
}
