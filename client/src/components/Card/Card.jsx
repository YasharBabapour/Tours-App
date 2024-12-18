import React from 'react'
import styles from './Cards.module.css'

export const Card = ({children}) => {
  return (
    <div className={styles.Card}>{children}</div>
  )
}
