import React from 'react'
import styles from './KeyValueItem.module.css'

export const KeyValueItem = ({
  children,
  ...props
}) => {
  const key = children[0]
  const vlaue = children[1]
  return (
    <div className={styles.KeyValueItem} {...props}>
      <div className={styles.Key}>{key}</div>
      <div className={styles.Value}>{vlaue}</div>
    </div>
  )
}

