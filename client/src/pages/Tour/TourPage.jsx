import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CenterTitle } from '../../components/title/CenterTitleHead';
import styles from './components/TourCardFull.module.css'
import { KeyValueItem } from '../../components/KeyValueItem/KeyValueItem';
import {  Input} from '../../components/Input/Input';
import tourImg  from '../../assets/img/download.jpeg'
import { DateItem } from './components/DateItem';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthenticatedSection } from '../../components/Section/AuthenticatedSection';
import { getAuthToken } from '../../helper/auth';

const request =async  (tourId) => {

   const url =  `http://localhost:5000/tours/${tourId}`;
   let config = {
      headers: { 
        'Content-Type': 'application/json',
         'Authorization':getAuthToken() 
      }
   };
   try {
      const res = await axios.get(url,config)
      return res.data
   } catch (error) {
      return null
   }
   
}
const reserveTourRequest = async (name,count,tourId) => {
   console.log({name,count,tourId})
   let data = JSON.stringify({
     "name_of_registrant": name,
     "counts": +count
   });
   
   const url = `http://localhost:5000/reservations/${tourId}`
   let config = {
     method: 'post',
     maxBodyLength: Infinity,
     headers: { 
        'Content-Type': 'application/json',
        'Authorization':getAuthToken() 
     },
   };
   try {
      const reservation = await axios.post(url,data,config)
      alert('تور ثبت شد')
      return true
   } catch (error) {
      alert('تور ثبت نشد')
      return false
   }

   
   
}
export const TourPage = ({}) => {
   const [tour,setTour] = useState(null)
   const [submitName,setSubmitName] = useState('')
   const [submitCount,setSubmitCount] = useState(0)
   const params = useParams()
   const tourId = params.tourId
   
   const loadData = async () => {
      const tour = await request(tourId)
      setTour(tour)
   }
   const reserveTour = () => {
      const reserved = reserveTourRequest(submitName,submitCount,tourId)
      if(reserved) loadData()

   }

  useEffect(()=> {
      loadData()
  },[tourId])

  return (
    <div style={{padding:"20px 100px",}}>

      <CenterTitle title={
         <h1 className='text-4xl font-bold my-2'>تور</h1>
      }></CenterTitle>
      {tour && (

         <div>
         <div className={styles.Tour}>
         <img className={styles.Image} style={{borderRadius:10}} src={tourImg} alt="" />
         <div className={styles.Content}>
            <h1 className={styles.Title}>{tour.subject}</h1>
            <h5 className={styles.Leader}>
               <span>لیدر</span>
               <span>{tour.leader_full_name}</span>
            </h5>

            <p className={styles.Desc}>
               <span className={styles.DescTitle}>توضحات : </span>
               {tour.description}
            </p>
            <DateItem date={tour.start_date} title='تاریخ حرکت' />
            <DateItem date={tour.end_date} title='تاریخ برگشت' />
            <KeyValueItem>
               <span>ظرفیت</span>
               <span>{tour.capacity}</span>
            </KeyValueItem>
            <KeyValueItem>
               <span>جای خالی</span>
               <span>{tour.capacity - tour.fill_capacity}</span>
            </KeyValueItem>
            <div className={styles.BtnBx}>
            <AuthenticatedSection>
               <div style={{textAlign:"right",direction:"rtl"}}>
                  <h1 className='text-4xl font-bold my-2 text-center'>رزرو کردن</h1>
                  <Input title='نام ثبت کننده' value={submitName} onChange={({target})=>setSubmitName(target.value)} />
                  <Input title='تعداد' value={submitCount} onChange={({target})=>setSubmitCount(target.value)} />
                  <div style={{direction:"ltr", textAlign:"left"}}>
                     <Button onClick={reserveTour} color='primary' >رزرو تور</Button>
                  </div>
               </div>
            </AuthenticatedSection>
            </div>
         </div>
         </div>
      </div>
      )}
</div>
  )
}
