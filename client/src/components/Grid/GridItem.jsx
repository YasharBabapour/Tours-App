import React from 'react'
import styles from './GridItem.module.css'

export const GridItem = ({
   item={},
   component:Component
}) => {
  return (
    <li className={styles.GridItem}>
      <Component {...item} />
    </li>
  )
}
