import React from 'react'
import styles from './Button.module.css'
export const Button = (title,props) => {
  return (
    <button className={styles.Button} {...props}>{title}</button>
  )
}
