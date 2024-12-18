import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Button.module.css'

export const ButtonLink = ({title,bgColor="black",to,...props}) => {
  return (
      <NavLink 
      className={styles.ButtonLink} 
      to={to} 
      style={{backgroundColor:bgColor}}
      {...props}
    >
      {title}
    </NavLink>
  )
}
