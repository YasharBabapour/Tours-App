import React from 'react'
import { AdminNavbar } from '../components/navBar/AdminNavbar'
import styles  from './AdminLayout.module.css'
import { AdminSidebar } from '../components/Sidebar/AdminSidebar'

export const AdminLayout = ({children}) => {
  return (
    <div className={styles.AdminLayout}>
      <div className={styles.Head}>
        <AdminNavbar/>
      </div>
      <div className={styles.Layout}>
        <div className={styles.Side}>
            <AdminSidebar/>
         </div>
            <div className={styles.Content}>
              {children}
           </div>
      </div>
    </div>
  )
}
