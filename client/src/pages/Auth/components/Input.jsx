import React from 'react'
import styles from './Input.module.css'
export const Input = ({
   title,
   ...props
}) => {
  return (
    <div className={styles.Input}>
      <label>{title}</label>
      <div>
         <input  {...props} />
      </div>
    </div>
  )
}
