import React from 'react'
import styles from './SideNavItem.module.css'
import { NavLink } from 'react-router-dom'

export const SideNavItem = ({
   title,
   path,
   icon:Icon
}) => {
  const nvClass =({ isActive }) => {
   const classes = `${styles.Path} ${isActive ? styles.Active:''}`
   console.log(classes)
   return classes
  } 
  return (
    <li className={styles.SideNavItem}>
      <NavLink className={nvClass} to={path}>
         <span className={styles.Icon}><Icon/></span>
         <span className={styles.Title}>{title}</span>
      </NavLink>
    </li>
  )
}
