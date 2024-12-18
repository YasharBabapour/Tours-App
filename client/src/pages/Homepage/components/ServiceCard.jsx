import React from 'react'
import styles from './ServiceCard.module.css'
import { Card } from '../../../components/Card/Card'
export const ServiceCard = ({icon,title}) => {
  return (
   <Card>
      <div className={styles.ServiceCard}>
         <div className={styles.Icon}>{icon}</div>
         <div className={styles.Name}>{title}</div>
      </div>
    </Card>
  )
}
