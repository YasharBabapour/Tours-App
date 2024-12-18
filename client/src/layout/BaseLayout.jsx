import React from 'react'
import { BaseNavbar } from '../components/navBar/BaseNavbar'
import { BaseFooter } from '../components/footer/BaseFooter'
import styles  from './BaseLayout.module.css'

export const BaseLayout = ({children}) => {
  return (
   <>
      <BaseNavbar/>
      <div className={styles.BaseLayout}>{children}</div>
      <BaseFooter/>
   </>
  )
}
