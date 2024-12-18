import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBox } from './NavBox'
import styles from './NavBar.module.css'
import {AuthenticatedSection} from '../Section/AuthenticatedSection'
const NaveItem = ({to,title})=> <li><NavLink  to={to}>{title}</NavLink></li>

export const BaseNavbar = () => {
  return (
    <NavBox>
         <h1 className={styles.BaseTitle}>سفر را با ما تجربه کنید</h1>
         <ul className={styles.Nav}>
            <NaveItem  to="/" title="خانه" />
            <NaveItem  to="/contact-us" title="ارتباط با ما" />
            <NaveItem  to="/tours" title="تورها" />
            <NaveItem  to="/auth/login" title="ورود" />
            <AuthenticatedSection>
              <NaveItem  to="/reserved" title="رزرو ها من" />
              <NaveItem  to="/admin" title="پنل مدیریتی" />
            </AuthenticatedSection>
         </ul>
    </NavBox>
  )
}
