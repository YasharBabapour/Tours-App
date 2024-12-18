import React from 'react'
import styles from './AdminSidebar.module.css'
import { sidebarNavData } from './sidebar.data'
import { SideNavItem } from './SideNavItem'


export const AdminSidebar = () => {
  return (
    <div className={styles.AdminSidebar}>
      <ul>{sidebarNavData.map(SideNavItem)}</ul>
    </div>
  )
}
