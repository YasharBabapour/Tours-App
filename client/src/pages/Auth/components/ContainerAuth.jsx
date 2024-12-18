import React from 'react'
import styles from './ContainerAuth.module.css'
import { CenterTitle } from '../../../components/title/CenterTitleHead'
import { Link } from 'react-router-dom'

export const ContainerAuth = ({
   title,
   btnTitle,
   route={
      to:"/",
      title:""
   },
   onSubmit,
   color,
   children
}) => {
  return (
   <div className={styles.ContainerAuth}>
      <div className={styles.Box}>
         <form onSubmit={(e)=>{
            e.preventDefault()
            onSubmit()
         }}>
            <CenterTitle
               title={
                  <h1 
                  style={{color}}
                  className={styles.Title}>{title}</h1>
               }
            />
            <div className={styles.FormInputs}>{children}</div>
            <div>
               <Link 
               style={{color}}
               className={styles.Route} to={route.to}>
                  {route.title}
               </Link>
            </div>
            <div className={styles.ButtonContainer}>
               <button 
                  style={{
                     color:"white",
                     background:color
                  }}
                  className={styles.Button}
               >
                  {btnTitle}
               </button>
            </div>
         </form>
         <CenterTitle
            title={<Link 
               className={styles.HomeLink}
                to="/">رفتن به صفحه اصلی</Link>}
         >
         </CenterTitle>
      </div>

   </div>
  )
}
