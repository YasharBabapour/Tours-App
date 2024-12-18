import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './BaseFooter.module.css'
import {AiFillTwitterCircle,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'
import {} from 'react-icons/bi'
import {} from 'react-icons/bs'
import {CgFlagAlt} from 'react-icons/cg'
const NavItem = ({to,subject})=> <li><NavLink to={to} />{subject}</li>
const FooterItem = ({
   title,
   routes = []
})=> {
   return <li className={styles.FooterItem}>
      <ul>
         <h4>{title}</h4>
         <div className={styles.Line}></div>
         {routes.map((route)=><NavItem {...route}/>)}
      </ul>
   </li>
}
const mianbor = {
   title:"میانبر",
   routes : [
      {to:"/",subject:"خانه"},
      {to:"/",subject:"تماس با ما"},
      {to:"/",subject:"تورگردی"},
      {to:"/",subject:"بازی بازی"},
      {to:"/",subject:"تمرین"},
   ]
}
export const BaseFooter = () => {
  return (
    <div className={styles.BaseFooter}>
      <div>
         <h3>درباره ما</h3>
         <p>متن تستی</p>
      </div>
      <div className={styles.NavFooter}>
         <ul style={{display:"flex"}}>
            <FooterItem  {...mianbor}/>
            <FooterItem  {...mianbor}/>
            <FooterItem  {...mianbor}/>
         </ul>
      </div>
      <div className={styles.Left}>
         <h3><CgFlagAlt/></h3>
         <ul >
           <li><AiFillTwitterCircle/></li> 
           <li><AiFillFacebook/></li> 
           <li><AiFillInstagram/></li> 
         </ul>
      </div>
    </div>
  )
}
