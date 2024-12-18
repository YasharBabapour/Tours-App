import React from 'react'
import styles from './input.module.css'

export const FileUpload = ({
   title,
   ...props
}) => {
  return (
   <div className={styles.Input}>
      <label>{title}</label>
      <div>
         <input type='file' {...props} />
      </div>
   </div>
  )
}
