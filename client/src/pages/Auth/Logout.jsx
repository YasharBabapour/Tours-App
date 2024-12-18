import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import { clearToken } from '../../helper/auth'

export const Logout = () => {

   useEffect(()=>{
      clearToken(null)
   },[])
  return (
    <div className='text-4xl font-bold text-center center' style={{
         display:"flex",
         alignItems:"center",
         justifyContent:"center",
         height:"100vh"
      }}>
      <NavLink to='/' style={{color:"cyan"}}>
         <h1>رفتن به صفحه اصلی</h1>
      </NavLink>
    </div>
  )
}
