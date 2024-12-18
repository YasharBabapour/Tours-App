import React, { useEffect, useState } from 'react'
import styles from './AdminNavbar.module.css'
import {  FaUserNinja } from 'react-icons/fa'
import { geUserProfileRequest, useUserProfile } from '../../helper/auth'

export const AdminNavbar = () => {
  const [user,setUser] = useState(null)
  const username = user?.username || "admin"
  const role = user?.role === "ADMIN" ? user?.username ==="admin" ? "ادمین اصلی":"ادمین" :'کاربر';
  
  const loadData =async  ()=> {
    const prof = await geUserProfileRequest()
    setUser(prof)
  }
  
  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.AdminNavbar}>
      <div className={styles.Right}>
        <div className={styles.UserProfile}>
          <div className={styles.Icon}>
            <FaUserNinja/>
          </div>
          <div className={styles.Details}>
              <h2 className={styles.FullName}>{username}</h2>
              <h5 userrole="ADMIN" className={styles.Role}>{role}</h5>
          </div>
        </div>
      </div>
      <div className={styles.Left}>
        <span>LOGO</span>
      </div>
    </div>
  )
}
