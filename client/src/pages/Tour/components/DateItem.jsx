import React from 'react'
import { MdDateRange } from 'react-icons/md'
import styles from './DateItem.module.css'
import { KeyValueItem } from '../../../components/KeyValueItem/KeyValueItem'

export const DateItem = ({
   title='',
   date='',
   icon: Icon = MdDateRange
}) => {
   const dateOrg = new Date(date)
   const day = dateOrg.getDay()
   const month = dateOrg.getMonth()
   const year = dateOrg.getFullYear()

   const formatedDate = `${year}/${month}/${day}`
  return (
    <KeyValueItem >
      <div className={styles.TitleIcon}>
         <Icon/>
         <span className={styles.Title}>{title}</span>
      </div>
      <div>{formatedDate}</div>
    </KeyValueItem>
  )
}
