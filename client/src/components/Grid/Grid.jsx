import React from 'react'
import styles from './Grid.module.css'
import { GridItem } from './GridItem'

export const Grid = ({
   data = [],
   component:Component
}) => {
  return (
    <div className={styles.GridBox}>
      <ul className={styles.Grid}>
         {data.map((item,idx)=> <GridItem key={idx} component={Component} item={item} />)}
      </ul>      
    </div>
  )
}
