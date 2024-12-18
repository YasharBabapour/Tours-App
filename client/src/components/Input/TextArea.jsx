import React from 'react'
import styles from './input.module.css'
export const TextArea = ({
   title,
   ...props
}) => {
  return (
   <div className={styles.Input}>
      <label>{title}</label>
      <div>
         <textarea rows={10} placeholder='توضیحات تور را وارد کنید' {...props} ></textarea>
      </div>
   </div>
  )
}
