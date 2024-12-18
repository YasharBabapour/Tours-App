import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './TourTableSetting.module.css'
import { AiFillEye } from "react-icons/ai";
import { FcEditImage ,FcFullTrash} from "react-icons/fc";
import { deleteTourById } from '../../../../helper/tour.api';

export const TourTableSetting = ({tourId,reload=()=>{}}) => {
  const onTourDeleteHandler  = async () => { 
    const deletedTour = await deleteTourById(tourId)
    if(deletedTour){
      const {tour, reservedCountDeleted} = deletedTour
      alert(`
        تور ${tour.subject} حذف شد
        ${reservedCountDeleted} تعداد رزرو کاربران حذف شد و هزینه به حساب کاربران بازگشت داده شد
      `)
      reload && reload()
    }
    else {
      alert('تور حذف نشد')
    }
  }
  return (
      <div className={styles.UserTableSetting}>
      <NavLink to={`/admin/tours/${tourId}/view`}><AiFillEye size={25}/></NavLink>
      <NavLink to={`/admin/tours/${tourId}/edit`}><FcEditImage size={25}/></NavLink>
      <FcFullTrash onClick={onTourDeleteHandler} size={25}/>
   </div>
  )
}
